var character = new CharacterSheet();
var currentSession;
var dispatchMessages = false;  // Flag used differentiating between archived and freshly received messages.
var lazyMode = false; // Autoroll all forced rolls.

var eventPane = $("#eventPane");

function initializePage() {
	initializeDB();

	$("input[name='charName']").val(localStorage.getItem("ESORP[name]"));
	$("input[name='charPlayer']").val(localStorage.getItem("ESORP[player]"));
	$("#rollControls button, #rollControls input, #rollControls select").attr("disabled", "true");

	resetRollSelect();
}

function resetRollSelect() {
	var i;
	var rollSelector = $("#rollSelect");
	var charItems = Object.entries(character.skills);
	
	rollSelector.text("");

	for (i = 0; i < charItems.length; i++) {
		var curQuality = getQuality(charItems[i][0]);

		rollSelector.append("<option value='" + curQuality.key +"'>" + curQuality.name + "</option>")
	}

	for(i = 0; i < masterQualityList.length; i++) {
		var workingList = masterQualityList[i];

		for (var idx = 0; idx < workingList.length; idx++) {
			if (!charItems.find(element => element[0] == workingList[idx].key)) {
				rollSelector.append("<option value='" + workingList[idx].key +"'>" + workingList[idx].name + "</option>")
			}
		}
	}
}

function performRoll() {
	var key = $("#rollSelect").val();
	var result = character.makeRoll(key);
	var modifier = character.getRollModifier(key);
	var comment = $("#rollComment");
	dbPushEvent(new EventRoll(character.name, key, modifier, result, comment.val()));

	comment.val("");
}

function performAttack() {
	var target = $("#rollTarget").val();
	var key = $("#rollSelect").val();
	var result = character.makeRoll(key);
	var modifier = character.getRollModifier(key);
	var comment = $("#rollComment");

	dbPushEvent(new EventPlayerAttack(character.name, nameEncode(target), key, modifier, result, comment.val()));

	comment.val("");
}

function toggleLazyMode() {
	lazyMode = $(this).prop("checked");
}

function copyOutput(event) {
	event.stopPropagation();
	var printout = $("#printout");
	var range = document.createRange();
	range.selectNodeContents(printout[0]);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	document.execCommand("copy");
	sel.removeAllRanges();
}

function addEventDisplay(event) {
	switch (event.eventType) {
		case "Close":
			eventPane[0].textContent = "";
			$("#rollControls button, #rollControls input, #rollControls select").attr("disabled", "true");
			dbLoadSessionByParticipant(character.name, sessionLoaded);
			break;
		case "End":
			$("#rollControls button, #rollControls input, #rollControls select").attr("disabled", "true");
			eventPane.append(convertEventToHtml(event));
			dbClearEventSystem();
		case "NPCAttack":
			if ((dispatchMessages) && (event.player == character.name)) {
				forcePlayerRoll("You have been attacked by " + nameDecode(event.name) + "!", event.name, "Defense", "", event.id, resolveNPCAttack);
			}
			break;
		case "NPCAttackResolution":
			if (event.success) {
				if ((dispatchMessages) && (event.player == character.name)) {
					forcePlayerRoll("You have been hit by " + nameDecode(event.name) + "!", event.name, "Toughness", event.attackType, event.parent, resolveNPCDamage);
				}
			} else {
				$("div[data-parent='" + event.parent + "']").append(convertEventToHtml(event));
			}
			break;
		case "PlayerAttackResolution":
			if (event.success) {
				if (event.player == character.name) {
					forcePlayerRoll("You hit " + nameDecode(event.target) + "!  Roll for damage!", event.target, event.key, event.attackType, event.parent, resolvePlayerDamage);
				}
			} else {
				$("#" + event.parent).append(convertEventToHtml(event));
			}
			break;
		case "PlayerDamage":
				$("#" + event.parent).append(convertEventToHtml(event));
		case "PlayerToughness":
				eventPane.find("div[data-parent='" + event.parent + "']").append(convertEventToHtml(event));
			break;
		case "RollContested":
			if ((dispatchMessages) && (event.player == character.name)) {
				forcePlayerRoll("Roll " + getQuality(event.key).name + " vs. " + nameDecode(event.name) + "!", event.name, event.key, "", event.id, resolveContestedRoll);
			}
			break;
		default:
			if (GM_EVENTS.indexOf(event.eventType) < 0) {
				eventPane.append(convertEventToHtml(event));
			}
	}

	var queue = $("#eventPane");
	queue.scrollTop(queue.height());
}

function resolveContestedRoll() {
	var npc = $("#rollModal").attr("data-npc");
	var key = $("#rollModal").attr("data-key");
	var parent = $("#rollModal").attr("data-parent");

	dbPushEvent(new EventContestedResponse(character.name, npc, key, character.getRollModifier(key), character.makeRoll(key), $("#forceRollComment").val(), parent));

	hidePopup();
}

function resolveNPCAttack() {
	var npc = $("#rollModal").attr("data-npc");
	var key = $("#rollModal").attr("data-key");
	var parent = $("#rollModal").attr("data-parent");

	dbPushEvent(new EventPlayerDefense(npc, character.name, character.getRollModifier(key), character.makeRoll(key), $("#forceRollComment").val(), parent));

	hidePopup();
}

function resolveNPCDamage() {
	var attackType = $("#rollModal").attr("data-type");
	var parent = $("#rollModal").attr("data-parent");
	var resist = character.resistsDamage(SPECIAL_ATTACK_TYPES[attackType]);
	var weak = character.weakToDamage(SPECIAL_ATTACK_TYPES[attackType]);

	var result = character.makeToughnessRoll(SPECIAL_ATTACK_TYPES[attackType]);

	dbPushEvent(new EventPlayerToughnessRoll(character.name, character.getRollModifier("Toughness"), result, attackType, resist, weak, $("#forceRollComment").val(), parent));

	hidePopup();
}

function resolvePlayerDamage() {
	var attackType = $("#rollModal").attr("data-type");
	var parent = $("#rollModal").attr("data-parent");
	var target = $("#rollModal").attr("data-npc");
	var key = $("#rollModal").attr("data-key");
	var modifier;

	if (attributes.find(element => element.key == key)) {
		modifier = character.getAttributeModifier(key);
	} else {
		key = getQuality(key).governing;
		modifier = character.getAttributeModifier(key);
	}

	result = character.makeRoll(key);

	dbPushEvent(new EventPlayerDamageRoll(character.name, target, modifier, result, attackType, $("#forceRollComment").val(), parent));

	hidePopup();
}

function loadChar() {
	event.preventDefault();
	var tmpName = $("input[name='charName']").val();
	var tmpPlayer = $("input[name='charPlayer']").val();

	if ((!tmpName) || (!tmpPlayer)) {
		showErrorPopup("Please enter a character name and a player name.");
		return;
	}

	$("#rollTarget").text("");
	$("#rollControls button, #rollControls input, #rollControls select").attr("disabled", "true");
	dbLoadCharacter(tmpName, characterLoaded)
}

function characterLoaded(loadMe) {
	if ((loadMe.val()) && (loadMe.val().player == $("input[name='charPlayer']").val())) {
		character = loadMe.val();
		Object.setPrototypeOf(character, new CharacterSheet());
		localStorage.setItem("ESORP[name]", nameDecode(character.name));
		character.print("printout");
		resetRollSelect();

		eventPane.text("");
		dbLoadSessionByParticipant(character.name, sessionLoaded);
		
	} else {
		showErrorPopup("Character not found.");
		$("input[name='charName']").val(character.name);
		$("input[name='charPlayer']").val(character.player || localStorage.getItem("ESORP[player]"));
	}
}

function sessionLoaded(loadMe) {
	if (loadMe) {
		var i;
		var dummy;
		eventPane.text("");
		currentSession = loadMe;
		Object.setPrototypeOf(currentSession, new RoleplaySession());

		dummy = new CharacterStatus("");

		for (i = 0; i < currentSession.statuses.length; i++) {
			Object.setPrototypeOf(currentSession.statuses[i], dummy);
		}

		dummy = new NPC();

		for (i = 0; i < currentSession.npcs.length; i++) {
			Object.setPrototypeOf(currentSession.npcs[i], dummy);
			$("#rollTarget").append("<option>" + currentSession.npcs[i].name + "</option>");
		}

		dispatchMessages = false;
		dbLoadEventMessages(currentSession.owner, eventSystemLoaded);
		dbBindCallbackToEventSystem("child_added", eventAddedCallback);
	} else {
		showErrorPopup("This character is not part of an active roleplaying session.  Check with your Game Master.");
	}
}

function eventSystemLoaded(loadMe) {
	$("#rollControls button, #rollControls input, #rollControls select").removeAttr("disabled");
	dispatchMessages = true;
}

function eventAddedCallback(loadMe) {
	if (loadMe.val()) {
		addEventDisplay(loadMe.val());
	}
}

function showErrorPopup(message) {
	$("#modalBG").addClass("show");
	$("#errorModal").addClass("show");
	$("#errorText").text(message);
}

function forcePlayerRoll(message, npc, key, attackType, parent, callback) {
	if (!dispatchMessages) {
		return;
	}

	// Tack on all the data we'll want to use when we make our roll.
	$("#rollModal").attr("data-npc", npc).attr("data-key", key).attr("data-type", attackType).attr("data-parent", parent);

	if (lazyMode) {
		$("#forceRollComment").val("Lazy mode.");
		callback();
	} else {
		$("#forceRollComment").val("");
		$("#modalBG").addClass("show");
		$("#rollModal").addClass("show");
		$("#forceRollText").text(message);
		$("#makeForceRoll").off("click").on("click", callback);
	}
}

function hidePopup() {
	$("#modalBG").removeClass("show");
	$("#modalBG > div").removeClass("show");
}

$("#loadChar").on("click", loadChar);
$("#rollExecute").on("click", performRoll);
$("#attackExecute").on("click", performAttack);
$("#lazyMode").on("click", toggleLazyMode);
$("#printout").on("dblclick", copyOutput);
$("#errorButton").on("click", hidePopup);

initializePage();