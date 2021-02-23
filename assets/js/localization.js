var localizationLanguage; // Global variable that other files can access.
const checkAttributes = [ "alt", "title", "placeholder" ];
const localizationList = [
	{
		language: "EN-US",
		strings: [
			[ "ROLLPLAY_TITLE", "ESO Rollplay" ],
			[ "RETURN_TO_DASHBOARD", "Return to Dashboard" ],
			[ "ACCOUNT_OPTIONS", "Account Options" ],
			[ "HANDBOOK", "Handbook"],
			[ "LOGOUT", "Logout" ],
			[ "LOGOUT_CONFIRM", "Log out of your account?" ],
			[ "SESSION_HISTORY", "Session History" ],
			[ "ERROR", "Error" ],
			[ "CONFIRM", "Confirm" ],
			[ "OK", "Ok" ],
			[ "CANCEL", "Cancel" ],
			[ "DONE", "Done" ],
			[ "SEARCH", "Search" ],
			[ "HELP", "Help" ],
			[ "COMMENT", "Comment" ],
			[ "MARKDOWN", "Markdown" ],
			[ "USER_NOT_FOUND", "User USER not found!" ],
			[ "CHARACTER_NOT_FOUND", "Character not found." ],
			[ "THERE_WAS_AN_ERROR_LOADING_THE_CHARACTER", "There was an error loading the character." ],
			[ "ERROR_SESSION_FAILED_TO_LOAD", "Your session failed to load." ],
			[ "OR", "or" ],
			[ "DOUBLE_CLICK_TO_COPY_CHARACTER_SHEET", "Double click to copy character sheet." ],
			[ "NOT_APPLICABLE", "N/A" ],
			[ "LABEL_NAME", "Name:" ],
			[ "SEX_MALE", "Male" ],
			[ "SEX_FEMALE", "Female" ],
			[ "LABEL_ALIGNMENT", "Alignment:" ],
			[ "NOT_SET", "-- Not Set --" ],
			[ "ALIGNMENT_LG", "Lawful Good" ],
			[ "ALIGNMENT_NG", "Neutral Good" ],
			[ "ALIGNMENT_CG", "Chaotic Good" ],
			[ "ALIGNMENT_LN", "Lawful Neutral" ],
			[ "ALIGNMENT_N", "Neutral" ],
			[ "ALIGNMENT_CN", "Chaotic Neutral" ],
			[ "ALIGNMENT_LE", "Lawful Evil" ],
			[ "ALIGNMENT_NE", "Neutral Evil" ],
			[ "ALIGNMENT_CE", "Chaotic Evil" ],
			[ "LABEL_BIRTHSIGN", "Birthsign:" ],
			[ "BIRTHSIGN_APPRENTICE", "The Apprentice" ],
			[ "BIRTHSIGN_ATRONACH", "The Atronach" ],
			[ "BIRTHSIGN_LADY", "The Lady" ],
			[ "BIRTHSIGN_LORD", "The Lord" ],
			[ "BIRTHSIGN_LOVER", "The Lover" ],
			[ "BIRTHSIGN_MAGE", "The Mage" ],
			[ "BIRTHSIGN_RITUAL", "The Ritual" ],
			[ "BIRTHSIGN_SERPENT", "The Serpent" ],
			[ "BIRTHSIGN_SHADOW", "The Shadow" ],
			[ "BIRTHSIGN_STEED", "The Steed" ],
			[ "BIRTHSIGN_THIEF", "The Thief" ],
			[ "BIRTHSIGN_TOWER", "The Tower" ],
			[ "BIRTHSIGN_WARRIOR", "The Warrior" ],
			[ "LABEL_ALIASES", "Aliases:" ],
			[ "LABEL_PRIMARY_RESIDENCE", "Primary Residence:"],
			[ "LABEL_ORGANIZATIONS", "Organizations:" ],
			[ "LABEL_ALLIANCES", "Alliances:" ],
			[ "LABEL_ENEMIES", "Enemies:" ],
			[ "LABEL_RELATIONSHIPS", "Relationships:" ],
			[ "VIEW_DESCRIPTION", "View Description" ],
			[ "ACTION_ATTACK!", "Attack!" ],
			[ "ACTION_ROLL", "Roll" ],
			[ "ACTION_ROLL!", "Roll!" ],
			[ "ACTION_HIT!", "Hit!" ],
			[ "ACTION_MISS!", "Miss!" ],
			[ "ACTION_SUCCESS!", "Success!" ],
			[ "ACTION_FAILURE!", "Failure!" ],
			[ "ACTION_ALLOW", "Allow" ],
			[ "ACTION_DENY", "Deny" ],
			[ "DISMISS_SUMMON", "Dismiss" ],
			[ "RESISTANCES", "Resistances" ],
			[ "WEAKNESSES", "Weaknesses" ],
			[ "===== Dashboard ====="],
			[ "WELCOME_MESSAGE", "Welcome, USER!" ],
			[ "NEW_PLAYER_WELCOME", "Welcome Aboard!" ],
			[ "NEW_PLAYER_BEFORE_LINK", "Please refer to the" ],
			[ "NEW_PLAYER_AFTER_LINK", "for more information on getting started.  Or dive right in and make your first character!" ],
			[ "MAKE_A_CHARACTER", "Make a Character" ],
			[ "PLEASE_SELECT_A_CHARACTER", "Please select a character." ],
			[ "CREATE_A_NEW_CHARACTER", "Create a New Character" ],
			[ "BUTTON_PLAY", "Play!" ],
			[ "BUTTON_EDIT", "Edit" ],
			[ "BUTTON_DELETE", "Delete" ],
			[ "OTHER_TASKS", "Other Tasks" ],
			[ "GM_SCREEN", "GM Screen" ],
			[ "BROWSE_CHARACTERS", "Browse Characters" ],
			[ "GENERATE_LORE_FRIENDLY_NAMES", "Generate Lore Friendly Names" ],
			[ "FOOTER_JOIN_THE_DISCUSSION", "Join the discussion:" ],
			[ "FOOTER_GET_THE_ADDON", "Get the addon:" ],
			[ "FOOTER_ADDON_BEFORE_LINK", "in the Roleplay category in" ],
			[ "FOOTER_ADDON_AFTER_LINK", "!" ],
			[ "CONFIRM_DELETE_CHARACTER", "Are you sure you want to delete the character CHARACTER?" ],
			[ "ACCOUNT_SETTINGS", "Account Settings" ],
			[ "ALERT_VOLUME", "Alert Volume" ],
			[ "GAME_MASTER", "Game Master" ],
			[ "GM_SETTING_LINE_1", "Enable this option for access" ],
			[ "GM_SETTING_LINE_2", "to the GM Screen." ],
			[ "LANGUAGE", "Language" ],
			[ "EN-US", "English" ],
			[ "PT-BR", "Português do Brasil" ],
			[ "CHANGE_PASSWORD", "Change Password" ],
			[ "NEW_PASSWORD", "New Password" ],
			[ "CONFIRM_PASSWORD", "Confirm Password" ],
			[ "===== Character Sheet ====="],
			[ "GENERATE_RANDOM_NAME", "Generate a random name." ],
			[ "LABEL_RACE", "Race:" ],
			[ "LABEL_SEX", "Sex:" ],
			[ "LABEL_SUPERNATURAL", "Supernatural:" ],
			[ "LABEL_CLASS", "Class:" ],
			[ "SAVE", "Save" ],
			[ "LABEL_ATTRIBUTE_POINTS", "Attribute Points:" ],
			[ "LABEL_SKILL_POINTS", "Skill Points:" ],
			[ "ATTRIBUTES", "Attributes" ],
			[ "COMBAT_SKILLS", "Combat Skills" ],
			[ "MAGICKA_SKILLS", "Magicka Skills" ],
			[ "GENERAL_SKILLS", "General Skills" ],
			[ "CRAFTING_SKILLS", "Crafting Skills" ],
			[ "KNOWLEDGE_SKILLS", "Knowledge Skills" ],
			[ "LABEL_DIFFICULTY", "Difficulty:" ],
			[ "ERROR_EDIT_CHARACTER_NOT_YOURS", "You cannot edit a character that is not yours!" ],
			[ "ERROR_CHARACTER_NAME", "Please enter a character name." ],
			[ "ERROR_OVER_POINT_ALOTMENT", "You are over your point allotment." ],
			[ "ERROR_CHARACTER_OTHER_PLAYER", "This character has already been created by another player! (PLAYER)"],
			[ "CHARACTER_SAVED_SUCCESSFULLY", "Character saved successfully! You may return to the dashboard." ],
			[ "CHARACTER_PROFILE", "Character Profile" ],
			[ "SHORT_DESCRIPTION", "Short Description" ],
			[ "SHORT_DESCRIPTION_DESCRIPTION", "This is what players will see if they click your character during a Rollplay session.  This is a good place to mention physical characteristics and publicly known information about your character!" ],
			[ "SHORT_DESCRIPTION_HELPER", "This is only a summary.  Please be brief! (CURRENT/MAX characters)" ],
			[ "GENERAL_INFORMATION", "General Information" ],
			[ "CHARACTER_IMAGE", "Character Image" ],
			[ "CHARACTER_IMAGE_URL", "Image URL" ],
			[ "ALIASES_DESCRIPTION", "Other names you may go by." ],
			[ "PRIMARY_RESIDENCE_DESCRIPTION", "Where you live." ],
			[ "ORGANIZATIONS_DESCRIPTION", "Any groups you belong to." ],
			[ "ALLIANCES_DESCRIPTION", "Any groups you are friendly to." ],
			[ "ENEMIES_DESCRIPTION", "Any groups or people you are NOT friendly to." ],
			[ "RELATIONSHIPS_DESCRIPTION", "Other characters you are close to." ],
			[ "LABEL_CHARACTER_IS_NPC", "This character is an NPC." ],
			[ "CHARACTER_NPC_DESCRIPTION", "This setting is only available for Gamemasters.  A character that is marked as an NPC can be played by any GM that adds that character to their session." ],
			[ "BIOGRAPHY", "Biography" ],
			[ "BIOGRAPHY_DESCRIPTION", "### Write Character Backstory Here\n\nGo in depth as you like.  Section headings should be done with 3 hashtags, as above." ],
			[ "PREVIEW", "Preview" ],
			[ "CHARACTER_HELP_TITLE", "Building Your Character" ],
			[ "NAMERACEETC", "Name/Race/Etc." ],
			[ "CHARACTER_HELP_NAMERACEETC_TEXT", "You must specify a character name to save your character.  Race, sex, and supernatural type have an effect on stats, so be sure to select the appropriate values." ],
			[ "CHARACTER_HELP_ATTRIBUTES_TEXT", "You should begin by choosing your attribute scores. This is a straight 1-for-1 point buy." ],
			[ "SKILLS", "Skills" ],
			[ "CHARACTER_HELP_SKILLS_TEXT", "Skills are added much like attributes, but they increase in cost as you increase in rank. However, the governing attribute of a skill controls how quickly the increase occurs." ],
			[ "CHARACTER_HELP_KNOWLEDGE_SKILLS_TEXT", "Knowledge skills are a special class of skill that always have Intelligence as their governing attribute.  Some are more difficult to learn and increase in difficulty more quickly." ],
			[ "PROFILE_INFO", "Profile Info" ],
			[ "CHARACTER_HELP_PROFILE_INFO_BEFORE_LINK", "Below your skill selections, you can enter more information for your character.  All fields support" ],
			[ "CHARACTER_HELP_PROFILE_INFO_AFTER_LINK", "formatting!" ],
			[ "===== Rollplay Session =====" ],
			[ "LOAD_SESSION", "Load Session" ],
			[ "SESSION_SELECTION", "Session Selection"],
			[ "CHOOSE_SESSION", "Choose the GM of the session you will be joining:" ],
			[ "YOUR_CHARACTER", "Your Character" ],
			[ "CHARACTER_INFO", "Character Info" ],
			[ "LABEL_EQUIPPED", "Equipped:" ],
			[ "LABEL_ARMOR", "Armor:" ],
			[ "PARTY", "Party" ],
			[ "SECTION_MAKE_A_ROLL", "Make a Roll!" ],
			[ "ROLL_USING", "Roll using" ],
			[ "SECTION_PVP", "Player vs. Player" ],
			[ "SECTION_SUMMONING", "Summoning" ],
			[ "ACTION_SUMMON!", "Summon!" ],
			[ "SUMMON_ROLL_CAPTION", "Make a SKILL roll to summon a TEMPLATE." ],
			[ "ENEMIES", "Enemies" ],
			[ "LAZY_MODE", "Lazy mode" ],
			[ "LAZY_MODE_DESCRIPTION", "Any incoming rolls you need to make are resolved automatically." ],
			[ "CLICK_TO_VIEW_PROFILE", "Click to view profile." ],
			[ "TITLE_MAKE_A_ROLL", "Make a Roll" ],
			[ "TITLE_ROLL_NEEDED", "Roll Needed!" ],
			[ "PLAYER_ROLL_CAPTION", "Make a roll using QUALITY." ],
			[ "ATTACK_ROLL_CAPTION", "Make an attack roll using QUALITY." ],
			[ "ATTACK_HIT_CAPTION", "You hit TARGET!  Roll for damage!" ],
			[ "INCOMING_ATTACK_CAPTION", "You have been attacked by NAME!" ],
			[ "INCOMING_HIT_CAPTION", "You have been hit by NAME!" ],
			[ "ROLL_CAPTION", "Roll QUALITY!" ],
			[ "ROLL_AGAINST_OPPONENT_CAPTION", "Roll QUALITY vs. NAME!" ],
			[ "TRANSFORM_INTO", "Transform into FORM" ],
			[ "TRANSFORM_REVERT", "End Transformation" ],
			[ "NOT_PART_OF_SESSION", "This character is not part of an active roleplaying session.  Check with your Game Master."],
			[ "YOU_HAVE_BEEN_REMOVED_FROM_THE_SESSION", "You have been removed from the session." ],
			[ "ERROR_CONNECTED_ELSEWHERE", "Players can only maintain one connection to a session.  This player has connected from somewhere else." ],
			[ "===== GM Screen =====" ],
			[ "CURRENT_SESSION", "Current Session" ],
			[ "OPEN_SESSION", "Open Session" ],
			[ "CONFIRM_NEW_SESSION", "Opening another session will delete the current session." ],
			[ "END_SESSION", "End Session" ],
			[ "CONFIRM_END_SESSION", "Are you sure you want to end the session?" ],
			[ "ADD", "Add" ],
			[ "NEW_NPC_NAME_HERE", "New NPC name here." ],
			[ "ADD_NPC_FROM_TEMPLATE", "Add NPC from template." ],
			[ "NPC_NAME_EXISTS", "An NPC with that name already exists. Please enter a unique name for the NPC." ],
			[ "NPC_NO_NAME", "Please enter a name for the NPC." ],
			[ "CURRENT_NPC", "Current NPC" ],
			[ "LABEL_ATTACK_BONUS", "Attack Bonus:" ],
			[ "LABEL_ATTACK_TYPE", "Attack Type:" ],
			[ "LABEL_DAMAGE_BONUS", "Damage Bonus:" ],
			[ "LABEL_DEFENSE_BONUS", "Defense Bonus:" ],
			[ "LABEL_TOUGHNESS_BONUS", "Toughness Bonus:" ],
			[ "LABEL_RESISTS", "Resists:" ],
			[ "LABEL_WEAK_TO", "Weak to:" ],
			[ "CLICK_TO_VIEWEDIT", "Click to view/edit" ],
			[ "STATUS_HIDDEN", "Hidden" ],
			[ "CONFIRM_REMOVE_NPC", "Remove NPC <b>NAME</b> from the session?" ],
			[ "ERROR_REMOVE_NPC", "Error removing NPC <b>NAME</b> from the session - not found."],
			[ "PLAYERS", "Players" ],
			[ "CHARACTER_NAME_HERE", "Character name here."],
			[ "SEARCH_CHARACTER_BY_ACCOUNT_NAME", "Search for a character by account name." ],
			[ "PLAYER_NO_NAME", "You must enter a character name to add." ],
			[ "PLAYER_IN_SESSION", "This character is already in the session." ],
			[ "CLICK_TO_VIEW", "Click to view" ],
			[ "CONFIRM_REMOVE_PLAYER", "Remove player <b>NAME</b> from the session?"],
			[ "ERROR_REMOVE_PLAYER", "Error removing player <b>NAME</b> from the session - not found." ],
			[ "ROLL_DIE", "Roll die" ],
			[ "TARGET_PLAYER", "Target Player" ],
			[ "PROMPT_FOR_ROLL", "Prompt for Roll" ],
			[ "CONTESTED_ROLL", "Contested Roll" ],
			[ "VS", "vs." ],
			[ "ROLL_AGAINST", "Roll Against" ],
			[ "MAKE_A_GM_POST", "Make a GM Post" ],
			[ "MAKE_POST_HIT_SEND", "Make a post here and hit Send." ],
			[ "SEND", "Send" ],
			[ "ADD_NPC_TEMPLATE", "Add NPC from Template" ],
			[ "ADD_NPC_TEMPLATE_TEXT", "Adding a new NPC:" ],
			[ "ADD_NPC_TEMPLATE_NAME", "Adding NAME:" ],
			[ "PLAYER_SEARCH", "Player Search" ],
			[ "PLAYER_ACCOUNT_NAME", "Player account name" ],
			[ "===== Profile Screen =====" ],
			[ "CHARACTER_PROFILE", "Character Profile" ],
			[ "NO_DESCRIPTION_GIVEN", "No description given." ],
			[ "===== Name Generator =====" ],
			[ "NAME_GENERATOR", "Name Generator" ],
			[ "GENERATE", "Generate" ],
			[ "RESULT_COUNT", "results."],
			[ "RESULTS", "Results" ],
			[ "===== Roleplaying System Definitions =====" ],
			[ "SKILL_EASY", "Easy" ],
			[ "SKILL_MODERATE", "Moderate" ],
			[ "SKILL_HARD", "Hard" ],
			[ "SKILL_ESOTERIC", "Esoteric!" ],
			[ "STATUS_UNHURT", "Unhurt" ],
			[ "STATUS_INJURED", "Injured" ],
			[ "STATUS_CRITICAL", "Critical" ],
			[ "STATUS_INCAPACITATED", "Incapacitated!" ],
			[ "RACE_ALTMER", "Altmer" ],
			[ "RACE_ARGONIAN", "Argonian" ],
			[ "RACE_BOSMER", "Bosmer" ],
			[ "RACE_BRETON", "Breton" ],
			[ "RACE_DUNMER", "Dunmer" ],
			[ "RACE_IMPERIAL", "Imperial" ],
			[ "RACE_KHAJIIT", "Khajiit" ],
			[ "RACE_NORD", "Nord" ],
			[ "RACE_ORC", "Orc" ],
			[ "RACE_REDGUARD", "Redguard" ],
			[ "RACE_KHAJIIT_OHMES", "Khajiit (Ohmes)" ],
			[ "RACE_MAORMER", "Maormer" ],
			[ "RACE_REACHMAN", "Reachman" ],
			[ "RACE_ASHLANDER", "Ashlander", "// Not a real race, but it's used by the Name Generator."],
			[ "SUPERNATURAL_WEREWOLF", "Werewolf" ],
			[ "SUPERNATURAL_VAMPIRE", "Vampire" ],
			[ "SUPERNATURAL_VAMPIRE_DAGGERFALL", "Vampire (Daggerfall)" ],
			[ "SUPERNATURAL_VAMPIRE_AUNDAE", "Vampire (Aundae)" ],
			[ "SUPERNATURAL_VAMPIRE_BERNE", "Vampire (Berne)" ],
			[ "SUPERNATURAL_VAMPIRE_QUARRA", "Vampire (Quarra)" ],
			[ "SUPERNATURAL_VAMPIRE_CYRODIIL", "Vampire (Cyrodiil)" ],
			[ "SUPERNATURAL_VAMPIRE_VOLKIHAR", "Vampire (Volkihar)" ],
			[ "TRANSFORM_WEREWOLF", "Werewolf" ],
			[ "TRANSFORM_BLOOD_SCION", "Blood Scion" ],
			[ "TRANSFORM_VAMPIRE_LORD", "Vampire Lord" ],
			[ "TRANSFORM_WEREWOLF_BEHEMOTH", "Werewolf Behemoth" ],
			[ "CLASS_DRAGONKNIGHT", "Dragonknight" ],
			[ "CLASS_NECROMANCER", "Necromancer" ],
			[ "CLASS_NIGHTBLADE", "Nightblade" ],
			[ "CLASS_SORCERER", "Sorcerer" ],
			[ "CLASS_TEMPLAR", "Templar" ],
			[ "CLASS_WARDEN", "Warden" ],
			[ "ATTRIBUTE_STRENGTH", "Strength" ],
			[ "ATTRIBUTE_STRENGTH_ABBR", "Str" ],
			[ "ATTRIBUTE_STRENGTH_DESCRIPTION", "How strong you are." ],
			[ "ATTRIBUTE_INTELLIGENCE", "Intelligence" ],
			[ "ATTRIBUTE_INTELLIGENCE_ABBR", "Int" ],
			[ "ATTRIBUTE_INTELLIGENCE_DESCRIPTION", "How smart you are." ],
			[ "ATTRIBUTE_WILLPOWER", "Willpower" ],
			[ "ATTRIBUTE_WILLPOWER_ABBR", "Wil" ],
			[ "ATTRIBUTE_WILLPOWER_DESCRIPTION", "How focused you are." ],
			[ "ATTRIBUTE_AGILITY", "Agility" ],
			[ "ATTRIBUTE_AGILITY_ABBR", "Agi" ],
			[ "ATTRIBUTE_AGILITY_DESCRIPTION", "How quickly you react." ],
			[ "ATTRIBUTE_SPEED", "Speed" ],
			[ "ATTRIBUTE_SPEED_ABBR", "Spd" ],
			[ "ATTRIBUTE_SPEED_DESCRIPTION", "How fast you move." ],
			[ "ATTRIBUTE_ENDURANCE", "Endurance" ],
			[ "ATTRIBUTE_ENDURANCE_ABBR", "End" ],
			[ "ATTRIBUTE_ENDURANCE_DESCRIPTION", "How tough you are." ],
			[ "ATTRIBUTE_PERSONALITY", "Personality" ],
			[ "ATTRIBUTE_PERSONALITY_ABBR", "Per" ],
			[ "ATTRIBUTE_PERSONALITY_DESCRIPTION", "Affects your ability to gain information and better prices from NPCs." ],
			[ "ATTRIBUTE_LUCK", "Luck" ],
			[ "ATTRIBUTE_LUCK_ABBR", "Luc" ],
			[ "ATTRIBUTE_LUCK_DESCRIPTION", "Affects everything you do in a small way." ],
			[ "SKILL_TWO_HANDED", "Two Handed" ],
			[ "SKILL_TWO_HANDED_DESCRIPTION", "How well you use two handed weapons." ],
			[ "SKILL_ONE_HANDED", "One Handed" ],
			[ "SKILL_ONE_HANDED_DESCRIPTION", "How well you use a single one handed weapon." ],
			[ "SKILL_BLOCK", "Block" ],
			[ "SKILL_BLOCK_DESCRIPTION", "How well you protect yourself with a shield." ],
			[ "SKILL_DUAL_WIELD", "Dual Wield" ],
			[ "SKILL_DUAL_WIELD_DESCRIPTION", "How well you use two weapons at once." ],
			[ "SKILL_BOW", "Bow" ],
			[ "SKILL_BOW_DESCRIPTION", "How well you use bows." ],
			[ "SKILL_UNARMED", "Unarmed" ],
			[ "SKILL_UNARMED_DESCRIPTION", "How well you can fight or grapple with your bare hands." ],
			[ "SKILL_LIGHT_ARMOR", "Light Armor" ],
			[ "SKILL_LIGHT_ARMOR_DESCRIPTION", "How well you use light armor - robes and clothing." ],
			[ "SKILL_MEDIUM_ARMOR", "Medium Armor" ],
			[ "SKILL_MEDIUM_ARMOR_DESCRIPTION", "How well you use medium armor - leather." ],
			[ "SKILL_HEAVY_ARMOR", "Heavy Armor" ],
			[ "SKILL_HEAVY_ARMOR_DESCRIPTION", "How well you use heavy armor - metal." ],
			[ "SKILL_ALTERATION", "Alteration" ],
			[ "SKILL_ALTERATION_DESCRIPTION", "How well you manipulate the natural world and its properties." ],
			[ "SKILL_CONJURATION", "Conjuration" ],
			[ "SKILL_CONJURATION_DESCRIPTION", "How well you dominate the wills of daedra or the undead, or summon otherworldly weapons and armor." ],
			[ "SKILL_DESTRUCTION", "Destruction" ],
			[ "SKILL_DESTRUCTION_DESCRIPTION", "How well you use magic for destructive ends." ],
			[ "SKILL_ILLUSION", "Illusion" ],
			[ "SKILL_ILLUSION_DESCRIPTION", "How well you alter the perceptions and thoughts of sentient beings." ],
			[ "SKILL_MYSTICISM", "Mysticism" ],
			[ "SKILL_MYSTICISM_DESCRIPTION", "How well you focus mystical energy into feats of telekinesis or perception." ],
			[ "SKILL_RESTORATION", "Restoration" ],
			[ "SKILL_RESTORATION_DESCRIPTION", "How well you restore or bolster the body." ],
			[ "SKILL_ACROBATICS", "Acrobatics" ],
			[ "SKILL_ACROBATICS_DESCRIPTION", "How well you jump, climb, and avoid damage from falls."],
			[ "SKILL_ATHLETICS", "Athletics" ],
			[ "SKILL_ATHLETICS_DESCRIPTION", "How well you can run and swim." ],
			[ "SKILL_LEGERDEMAIN", "Legerdemain" ],
			[ "SKILL_LEGERDEMAIN_DESCRIPTION", "How well you can pick pockets or locks." ],
			[ "SKILL_MERCANTILE", "Mercantile" ],
			[ "SKILL_MERCANTILE_DESCRIPTION", "How well you barter and haggle." ],
			[ "SKILL_PERCEPTION", "Perception" ],
			[ "SKILL_PERCEPTION_DESCRIPTION", "Noticing details about the world around you." ],
			[ "SKILL_SNEAK", "Sneak" ],
			[ "SKILL_SNEAK_DESCRIPTION", "How well you can move unseen and unheard." ],
			[ "SKILL_SPEECHCRAFT", "Speechcraft" ],
			[ "SKILL_SPEECHCRAFT_DESCRIPTION", "How well you can influence others by admiring, intimidating, or taunting them." ],
			[ "SKILL_ALCHEMY", "Alchemy" ],
			[ "SKILL_ALCHEMY_DESCRIPTION", "How well you can brew potions and poisons, as well as recognize and use alchemical ingredients." ],
			[ "SKILL_BLACKSMITHING", "Blacksmithing" ],
			[ "SKILL_BLACKSMITHING_DESCRIPTION", "How well you can create metal items." ],
			[ "SKILL_CLOTHING", "Clothing" ],
			[ "SKILL_CLOTHING_DESCRIPTION", "How well you can make clothing and leather items." ],
			[ "SKILL_ENCHANTING", "Enchanting" ],
			[ "SKILL_ENCHANTING_DESCRIPTION", "How well you can add enchantments to items." ],
			[ "SKILL_JEWELRY", "Jewelry" ],
			[ "SKILL_JEWELRY_DESCRIPTION", "How well you can create jewelry." ],
			[ "SKILL_PROVISIONING", "Provisioning" ],
			[ "SKILL_PROVISIONING_DESCRIPTION", "How well you can prepare food and drink." ],
			[ "SKILL_WOODWORKING", "Woodworking" ],
			[ "SKILL_WOODWORKING_DESCRIPTION", "How well you can create wooden items." ],
			[ "SKILL_ALTMER_LORE", "Altmer Lore" ],
			[ "SKILL_ALTMER_LORE_DESCRIPTION", "Studying the history of the Altmer people, as well as their elvish language." ],
			[ "SKILL_AKAVIRI_LORE", "Akaviri Lore" ],
			[ "SKILL_AKAVIRI_LORE_DESCRIPTION", "Knowledge of the continent of Akavir." ],
			[ "SKILL_AYLEID_LORE", "Ayleid Lore" ],
			[ "SKILL_AYLEID_LORE_DESCRIPTION", "Studying the history of the extinct Ayleid people, and their language Ayleidoon." ],
			[ "SKILL_BLOOD_MAGIC", "Blood Magic" ],
			[ "SKILL_BLOOD_MAGIC_DESCRIPTION", "A form of dark magic to manipulate blood, most famously used by vampires." ],
			[ "SKILL_BOSMER_LORE", "Bosmer Lore" ],
			[ "SKILL_BOSMER_LORE_DESCRIPTION", "Studying the history of the Bosmer people, as well as the Wild Hunt." ],
			[ "SKILL_BRETON_LORE", "Breton Lore" ],
			[ "SKILL_BRETON_LORE_DESCRIPTION", "Studying the history of the Breton people and their mixed man/mer ancestry." ],
			[ "SKILL_DAEDRIC_LORE", "Daedric Lore" ],
			[ "SKILL_DAEDRIC_LORE_DESCRIPTION", "Studying the secrets of the daedra - their society/planes, summoning them, and their language." ],
			[ "SKILL_DRAGON_LORE", "Dragon Lore" ],
			[ "SKILL_DRAGON_LORE_DESCRIPTION", "Studying the secrets of the dragon lords of the Merethic Era, and their language which is now only used by the Greybeards." ],
			[ "SKILL_DUNMER_LORE", "Dunmer Lore" ],
			[ "SKILL_DUNMER_LORE_DESCRIPTION", "Studying the history of the Dunmer people, as well as their writings in Dunmeris or Ald Chimeris." ],
			[ "SKILL_DWEMEROLOGY", "Dwemerology" ],
			[ "SKILL_DWEMEROLOGY_DESCRIPTION", "Studying the secrets of the Dwemer, who disappeared in the First Era." ],
			[ "SKILL_FALMER_LORE", "Falmer Lore" ],
			[ "SKILL_FALMER_LORE_DESCRIPTION", "Studying the history of the Falmer, and what little remains of their culture." ],
			[ "SKILL_FIRST_AID", "First Aid" ],
			[ "SKILL_FIRST_AID_DESCRIPTION", "Treating and dressing wounds in the field." ],
			[ "SKILL_HANDLE_ANIMAL", "Handle Animal" ],
			[ "SKILL_HANDLE_ANIMAL_DESCRIPTION", "Dealing with animals, either tame or wild." ],
			[ "SKILL_HIST_LORE", "Hist Lore" ],
			[ "SKILL_HIST_LORE_DESCRIPTION", "Studying the intricacies of the Hist, as well as Jel, the language of the Argonians." ],
			[ "SKILL_IMPERIAL_LORE", "Imperial Lore" ],
			[ "SKILL_IMPERIAL_LORE_DESCRIPTION", "Studying the history of the Imperial people, and the Alessian Empire that came before them." ],
			[ "SKILL_KHAJIIT_LORE", "Khajiit Lore" ],
			[ "SKILL_KHAJIIT_LORE_DESCRIPTION", "Studying the history of the Khajiit people, as well as their Ta'agra language." ],
			[ "SKILL_KOTHRINGI_LORE", "Kothringi Lore" ],
			[ "SKILL_KOTHRINGI_LORE_DESCRIPTION", "Studying the history of the Kothringi people, who were wiped out by a plague earlier in the Second Era." ],
			[ "SKILL_MAORMER_LORE", "Maormer Lore" ],
			[ "SKILL_MAORMER_LORE_DESCRIPTION", "Knowledge of the maormer, or sea elves, as well as their language, Pyandonean." ],
			[ "SKILL_MERETHIC_LORE", "Merethic Lore" ],
			[ "SKILL_MERETHIC_LORE_DESCRIPTION", "Studying the origins of all the people of Tamriel, as well as their proto-language, Ehlnofex." ],
			[ "SKILL_NATURE_MAGIC", "Nature Magic" ],
			[ "SKILL_NATURE_MAGIC_DESCRIPTION", "Study of magic for harnessing and controlling nature, like the Wyresses of Daggerafall." ],
			[ "SKILL_NECROMANCY", "Necromancy" ],
			[ "SKILL_NECROMANCY_DESCRIPTION", "Knowledge of summoning and/or controlling the dead." ],
			[ "SKILL_NEDIC_LORE", "Nedic Lore" ],
			[ "SKILL_NEDIC_LORE_DESCRIPTION", "Studying the history of the early men who settled Tamriel, the Nedes." ],
			[ "SKILL_NORD_LORE", "Nord Lore" ],
			[ "SKILL_NORD_LORE_DESCRIPTION", "Studying the history of the Nords and their ancestral homeland of Atmora." ],
			[ "SKILL_ORCISH_LORE", "Orcish Lore" ],
			[ "SKILL_ORCISH_LORE_DESCRIPTION", "Studying the history of the pariah mer, or Orcs, as well as the modern and archaic forms of their language." ],
			[ "SKILL_REACH_LORE", "Reach Lore" ],
			[ "SKILL_REACH_LORE_DESCRIPTION", "Knowledge of the people, customs, and religion of the Reach." ],
			[ "SKILL_REDGUARD_LORE", "Redguard Lore" ],
			[ "SKILL_REDGUARD_LORE_DESCRIPTION", "Studying the history of the Redguard people and their ancestral homeland of Yokuda." ],
			[ "SKILL_SHADOW_MAGIC", "Shadow Magic" ],
			[ "SKILL_SHADOW_MAGIC_DESCRIPTION", "An obscure form of magic which is used by Nocturnal, but can also be learned by mortals in limited forms." ],
			[ "SKILL_SLOAD_LORE", "Sload Lore" ],
			[ "SKILL_SLOAD_LORE_DESCRIPTION", "Studying the history of the Sload, a slug-like race that live over the seas southwest of Tamriel." ],
			[ "SKILL_SURVIVAL", "Survival" ],
			[ "SKILL_SURVIVAL_DESCRIPTION", "Living off the land." ],
			[ "NPC_ZOMBIE", "Zombie" ],
			[ "NPC_SKELETON", "Skeleton" ],
			[ "NPC_GHOST", "Ghost" ],
			[ "NPC_WRAITH", "Wraith" ],
			[ "NPC_VAMPIRE", "Vampire" ],
			[ "NPC_BLOODFIEND", "Bloodfiend" ],
			[ "NPC_SHAMBLES", "Shambles" ],
			[ "NPC_FLESH_ATRONACH", "Flesh Atronach" ],
			[ "NPC_REANIMATED_ANIMAL_SMALL", "Reanimated Animal (Small)" ],
			[ "NPC_REANIMATED_ANIMAL_MEDIUM", "Reanimated Animal (Medium)" ],
			[ "NPC_REANIMATED_ANIMAL_LARGE", "Reanimated Animal (Large)" ],
			[ "NPC_SCAMP", "Scamp" ],
			[ "NPC_CLANNFEAR", "Clannfear" ],
			[ "NPC_FLAME_ATRONACH", "Flame Atronach" ],
			[ "NPC_FROST_ATRONACH", "Frost Atronach" ],
			[ "NPC_STORM_ATRONACH", "Storm Atronach" ],
			[ "NPC_WINGED_TWILIGHT", "Winged Twilight" ],
			[ "NPC_DREMORA", "Dremora" ],
			[ "NPC_DAEDROTH", "Daedroth" ],
			[ "NPC_HUNGER", "Hunger" ],
			[ "NPC_FAMILIAR", "Familiar" ],
			[ "NPC_WOLF", "Wolf" ],
			[ "NPC_BEAR", "Bear" ],
			[ "NPC_SMALL_ANIMAL", "Small Animal" ],
			[ "NPC_MEDIUM_ANIMAL", "Medium Animal" ],
			[ "NPC_LARGE_ANIMAL", "Large Animal" ],
			[ "NPC_SPRIGGAN", "Spriggan" ],
			[ "NPC_LURCHER", "Lurcher" ],
			[ "NPC_WILD_HUNT_SMALL", "Wild Hunt (Small)" ],
			[ "NPC_WILD_HUNT_MEDIUM", "Wild Hunt (Medium)" ],
			[ "NPC_WILD_HUNT_LARGE", "Wild Hunt (Large)" ],
			[ "NPC_WEREWOLF", "Werewolf" ],
			[ "NPC_DWEMER_SPIDER", "Dwemer Spider" ],
			[ "NPC_DWEMER_SPHERE", "Dwemer Sphere" ],
			[ "NPC_DWEMER_CENTURION", "Dwemer Centurion" ],
			[ "NPC_GARGOYLE", "Gargoyle" ],
			[ "NPC_COAGULANT", "Coagulant" ],
			[ "DAMAGE_NONE", "None" ],
			[ "DAMAGE_PHYSICAL", "Physical" ],
			[ "DAMAGE_DISEASE", "Disease" ],
			[ "DAMAGE_FLAME", "Flame" ],
			[ "DAMAGE_FROST", "Frost" ],
			[ "DAMAGE_POISON", "Poison" ],
			[ "DAMAGE_SHOCK", "Shock" ],
			[ "DAMAGE_SILVER", "Silver" ],
			[ "WEAPON_TWO_HANDED", "Two Handed" ],
			[ "WEAPON_ONE_HANDED_SHIELD", "One Handed and Shield"],
			[ "WEAPON_DUAL_WIELD", "Dual Wield" ],
			[ "WEAPON_BOW", "Bow" ],
			[ "WEAPON_STAFF", "Staff" ],
			[ "WEAPON_UNARMED", "Unarmed" ],
			[ "WEAPON_ONE_HANDED_ONLY", "One Handed Only" ],
			[ "WEAPON_SHIELD_ONLY", "Shield Only" ],
			[ "===== Event System Definitions =====" ],
			[ "DISPLAY_PET", "PLAYER's TEMPLATE", "// TEMPLATE will be the type of summon, like Zombie." ],
			[ "DISPLAY_PET_NAME", "PLAYER's TEMPLATE, NAME,", "// TEMPLATE will be the type of summon, like Zombie." ],
			[ "ROLL_TEXT", "PARTICIPANT rolls ROLLTYPE", "// PARTICIPANT here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "LUCKY", "lucky" ],
			[ "ROLL_TEXT_LUCKY", "PARTICIPANT makes a LUCKY ROLLTYPE roll", "// PARTICIPANT here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "UNLUCKY", "unlucky" ],
			[ "ROLL_TEXT_UNLUCKY", "PARTICIPANT makes an UNLUCKY ROLLTYPE roll", "// PARTICIPANT here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "ROLL_VS", "vs. PARTICIPANT!", "// PARTICIPANT here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "LABEL_ROLL_RESULT", "Result:" ],
			[ "EVENT_ERROR_NO_OUTPUT", "An event was raised with no output (TYPE)" ],
			[ "EVENT_ERROR_UNRECOGNIZED", "An event was raised with an unrecognized type (TYPE)" ],
			[ "EVENT_START", "PLAYER opened this session. (TIMESTAMP)" ],
			[ "EVENT_END", "The session has been ended by PLAYER (TIMESTAMP)" ],
			[ "EVENT_END_THANKS", "Thanks for playing!" ],
			[ "EVENT_CLOSE", "PLAYER has closed this session.", "// Players should be ejected automatically and never see this." ],
			[ "LABEL_GM_POST", "GM Post:" ],
			[ "EVENT_ADD_NPC", "NPC NAME has been added to the session." ],
			[ "EVENT_REMOVE_NPC", "NPC NAME has been removed from the session." ],
			[ "EVENT_ADD_PLAYER", "Player PLAYER has been added to the session." ],
			[ "EVENT_REMOVE_PLAYER", "Player PLAYER has been removed from the session." ],
			[ "EVENT_PLAYER_CONNECT", "PLAYER has connected to the session (TIMESTAMP)." ],
			[ "EVENT_PLAYER_DISCONNECT", "PLAYER has disconnected from the session (TIMESTAMP)." ],
			[ "EVENT_PLAYER_BUSY", "PLAYER is busy." ],
			[ "EVENT_GM_ALLOW", "Your request to ACTION will be allowed." ],
			[ "EVENT_GM_DENY", "Your request to ACTION has been denied." ],
			[ "EVENT_PROMPT_ROLL", "PLAYER is prompted to make a ROLLTYPE roll." ],
			[ "EVENT_ROLL_RESOLUTION_SUCCESS", "The roll succeeds!" ],
			[ "EVENT_ROLL_RESOLUTION_FAILURE", "The roll fails!" ],
			[ "EVENT_ROLL_PLAYER_CONTESTED", "PLAYER1 rolls ROLLTYPE1 against PLAYER2's ROLLTYPE2!" ],
			[ "EVENT_ATTACK", "ATTACKER attacks", "// ATTACKER here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "EVENT_ATTACK_RESOLUTION_HIT", "ATTACKER hits DEFENDER!" ],
			[ "EVENT_ATTACK_RESOLUTION_MISS", "The attack missed!" ],
			[ "EVENT_ATTACK_DEFEND", "DEFENDER defends" ],
			[ "EVENT_ATTACK_DEFEND_VS", "vs. ATTACKER's attack!" ],
			[ "EVENT_COMBAT_TOUGHNESS", "DEFENDER attempts to withstand DAMAGETYPE damage" ],
			[ "RESISTS", "RESISTS" ],
			[ "EVENT_COMBAT_TOUGHNESS_RESIST", "DEFENDER RESISTS DAMAGETYPE damage" ],
			[ "WEAK", "WEAK" ],
			[ "EVENT_COMBAT_TOUGHNESS_WEAK", "DEFENDER is WEAK to DAMAGETYPE damage" ],
			[ "PLAYER_ROLL_LUCKY", "with a LUCKY roll" ],
			[ "PLAYER_ROLL_UNLUCKY", "with an UNLUCKY roll" ],
			[ "SHIELD_BONUS_PENALTY", "shield" ],
			[ "ARMOR_BONUS", "armor" ],
			[ "ROLL_DAMAGE_TEXT", "ATTACKER rolls for damage", "// ATTACKER here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "ROLL_DAMAGE_TEXT_LUCKY", "ATTACKER makes a LUCKY roll for damage", "// ATTACKER here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "ROLL_DAMAGE_TEXT_UNLUCKY", "ATTACKER makes an UNLUCKY roll for damage", "// ATTACKER here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "EVENT_STATUS_PLAYER", "PLAYER is now STATUS.", "// PLAYER here could be a player's name, or one of the DISPLAY_PET items above." ],
			[ "EVENT_STATUS_NPC_APPEAR", "NAME appears!" ],
			[ "EVENT_STATUS_NPC_APPEAR_INJURED", "NAME appears!  It is STATUS." ],
			[ "EVENT_STATUS_NPC", "NAME is now STATUS." ],
			[ "EVENT_STATUS_NPC_DISAPPEAR", "NAME disappears!" ],
			[ "EVENT_PLAYER_EQUIP", "PLAYER has equipped ITEM." ],
			[ "EVENT_SUMMON_ROLL", "to summon a TEMPLATE", "// A ROLL_TEXT item will be immediately before this."],
			[ "EVENT_SUMMON_ROLL_NAME", "(named NAME)", "// Added after the above item if the summon's name is specified."],
			[ "EVENT_SUMMON_SUCCESS", "The summoning succeeds!" ],
			[ "EVENT_SUMMON_FAILURE", "The summoning fails!" ],
			[ "EVENT_SUMMON_DISMISS", "PET is dismissed!", "// PET will be replaced with either DISPLAY_PET or DISPLAY_PET_NAME"],
			[ "EVENT_TRANSFORM_REQUEST_START", "PLAYER wants to transform into a FORM" ],
			[ "EVENT_TRANSFORM_REQUEST_END", "PLAYER wants to end their transformation." ],
			[ "TRANSFORM_REQUEST_START", "turn into a FORM" ],
			[ "TRANSFORM_REQUEST_END", "end your transformation" ],
			[ "EVENT_TRANSFORMATION", "PLAYER transforms into a FORM!" ],
			[ "EVENT_TRANSFORMATION_END", "PLAYER ends their transformation!" ],
		]
	}
];

function localize(key) {
	const curLang = localizationList.find(list => list.language === localizationLanguage) || localizationList[0];

	const curLookup = curLang.strings.find(kvPair => kvPair[0] === key) || localizationList[0].strings.find(kvPair => kvPair[0] === key);

	if (curLookup) {
		return curLookup[1];
	} else {
		return key;
	}
}

async function loadLocalizationFile(language) {
	//let response = await fetch("./assets/localization/" + language + ".json");
	let response = await fetch("https://eso-rollplay.net/assets/localization/" + language + ".json", {
			method: 'GET',
			mode: "cors"
	});

	if (response.ok) {
		let data = await response.json();

		return data;
	} else {
		return null;
	}
}

async function localizePage() {
	const language = localStorage.getItem("ESORP[language]") || "EN-US";

	if (localizationLanguage !== language) {
		if (language != "EN-US") {
			let localizationData = await loadLocalizationFile(language);

			if (localizationData) {
				localizationList.push(localizationData);
			}
		}

		localizationLanguage = language;

		const localizationTargets = $("*[data-localization-key]");

		localizationTargets.each(function() {
			var element = $(this);
			var key = element.attr("data-localization-key");

			checkAttributes.forEach(item => {
				var checkMe = element.attr(item);
				if (checkMe) {
					element.attr(item, localize(checkMe));
				}
			})

			if (key) {
				element.text(localize(key));
			}
		})

		$("#handbook a").attr("href", (language === "EN-US") ? "./handbook.html" : "./handbook_" + language + ".html");
	}
}

localizePage();