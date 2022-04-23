/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Magic Item

	Effect:		This is the syntax for adding a new magic item to the sheet.

	Remarks:	You will also need the syntax for common attributes if you want the magic item
				to do anything besides populating its description field.
				You will also need the syntax for adding a source if you want the magic item
				to have a source that doesn't yet exist in the sheet.

	Sheet:		v13.0.9 and newer

*/

var iFileName = "Homebrew Syntax - MagicItemsList.js";


RequiredSheetVersion("10.0.6");


MagicItemsList["Crossbow of Sapping Sting"] = {
	name : "Crossbow of Sapping Sting (light)",
	source : ["Nick", 5],
	type : "weapon (dagger)",
	rarity : "rare",
	notLegalAL : true,
	description : "This dagger adds +3 to hit and damage. As a bonus action while holding it, I can have it shed bright light in a 20-ft radius and dim light for another 20 ft, go dark, act as a compass, cast Dimension Door once per dawn, or cast Compulsion once per dawn, which effects only spiders of the beast type within 90 ft.",
	descriptionFull : "This +3 dagger belongs to Artus Cimber. While you have the dagger drawn, you can use a bonus action to activate one of the following properties:\n \u2022 Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.\n \u2022 Turn the dagger into a compass that, while resting on your palm, points north.\n \u2022 Cast Dimension Door from the dagger. Once this property is used, it can't be used again until the next dawn.\n \u2022 Cast Compulsion (save DC 15) from the dagger. The range of the spell increases to 90 feet but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.",
	attunement : true,
	weight : 1,
	action : [["action", ""]],
	weaponsAdd : ["Crossbow of Sapping Sting"],
	weaponOptions : {
		baseWeapon : "crossbow",
		regExpSearch : /Crossbow of Sapping Sting/i,
		name : "Crossbow of Sapping Sting",
		source : ["Nick", 5]
	},
	spellcastingExtra : ["Sapping Sting"]
}