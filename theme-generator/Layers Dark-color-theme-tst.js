const fs = require('fs')
const Color = require('color');
const path = require("path");

// 
//   Colors
// 
//   color.whiten(0.5)
//   color.blacken(0.5)
// 
//   color.lighten(0.5)
//   color.darken(0.5)
// increase white
//   color.lightness(50)
// saturation
//   color.saturate(0.5)
//   color.desaturate(0.5)




const aquaDark   = Color("#00a69c")
const aqua       = Color("#00b8ad")
const color03    = Color("#000000")
const link       = Color("#2f8af5")
const color05    = Color("#4B83CD")
const color06    = Color("#7A3E9D")
const green      = Color("#30b565")
const color08    = Color("#232b34")
const leadLight  = Color("#434e5b")
const color10    = Color("#448C27")
const purple     = Color("#5451d6")
const color12    = Color("#434343")
const color13    = Color("#660000")
const color14    = Color("#777777")
const color15    = Color("#A3B1BF")
const color16    = Color("#AA3731")
const color17    = Color("#AAAAAA")
const color18    = Color("#AB6526")
const color19    = Color("#C8D0D8")
const color20    = Color("#D7DEE3")
const color21    = Color("#E8ECEF")
const salmonDark = Color("#e86161")
const danger     = Color("#ed6b4f")
const color24    = Color("#EEF1F5")
const warning    = Color("#f0af09")
const color26    = Color("#F4F6F8")
const color27    = Color("#ff0000")
const yellow     = Color("#ffca65")
const white      = Color("#ffffff")
const color30    = Color("#ff0000")


// theme
let theme = {
	"name": "Layers Theme Light",
	"type": "light",
	"colors": {
		"activityBar.background": aquaDark.hex(),
		"activityBar.activeBackground": aqua.hex(),
		"activityBar.foreground": white.hex(),
		"activityBar.inactiveForeground": white.hex(),
		
		"badge.background": link.hex(),
		"badge.foreground": white.hex(),
		
		"list.activeSelectionBackground": white.hex(),
		"list.activeSelectionForeground": color08.hex(),
		"list.focusOutline": aqua.hex(),
		"list.inactiveSelectionBackground": color20.hex(),
		"list.inactiveFocusBackground": color20.hex(),
		"list.dropBackground":color19.hex(),

		"sideBar.background": color21.hex(),
		"sideBarSectionHeader.background": color20.hex(),

		"scrollbarSlider.background": color19.hex()+'bb',

		"editorCursor.background": aquaDark.hex(),
		"editorCursor.foreground": aquaDark.hex(),
		"editor.selectionBackground": link.hex()+'33',
		"editor.selectionForeground": link.hex(),
		"editor.wordHighlightBackground": link.hex()+'77',
		"editor.findMatchBackground": yellow.hex(),
		"editor.findMatchHighlightBackground": yellow.hex()+'55',

		"editorLineNumber.activeForeground": green.hex(),

		"terminalCursor.background": aquaDark.hex(),
		"terminalCursor.foreground": aquaDark.hex(),
		"terminal.foreground": leadLight.hex(),
		"minimap.background": color24.hex(),

		"diffEditor.insertedTextBackground": green.hex()+'15',
		"diffEditor.removedTextBackground": danger.hex()+'30',
		"diffEditor.diagonalFill": danger.hex()+'77',

		"activityBarBadge.background": link.hex(),
		"activityBarBadge.foreground": white.hex(),
		"editor.background": color26.hex(),
		"editor.foreground": aquaDark.hex(),
		"list.activeSelectionIconForeground": white.hex(),
		"focusBorder":aquaDark.hex(),
		"foreground":leadLight.hex(),
		"widget.shadow": leadLight.hex()+'22',
		"selection.background":link.hex()+'55',
		"icon.foreground":leadLight.hex(),

		"gitDecoration.modifiedResourceForeground":warning.hex(),
		"gitDecoration.deletedResourceForeground": danger.hex(),
		"gitDecoration.untrackedResourceForeground": green.hex(),
		"list.errorForeground": danger.hex(),
		"errorForeground": danger.hex(),

		"statusBarItem.errorForeground":color27.hex(),
		"statusBarItem.warningForeground":color27.hex(),
		"titleBar.activeBackground":color20.hex(),
		"titleBar.activeForeground":leadLight.hex(),

		"editorWidget.background":color26.hex()
	},
	"tokenColors": [
		{
			"name": "Comments",
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": color15.hex()
			}
		},
		{
			"name": "Comments: Preprocessor",
			"scope": "comment.block.preprocessor",
			"settings": {
				"fontStyle": "",
				"foreground": color17.hex()
			}
		},
		{
			"name": "Comments: Documentation",
			"scope": [
				"comment.documentation",
				"comment.block.documentation"
			],
			"settings": {
				"foreground": color10.hex()
			}
		},
		{
			"name": "Invalid - Illegal",
			"scope": "invalid.illegal",
			"settings": {
				"foreground": color13.hex()
			}
		},
		{
			"name": "Operators",
			"scope": "keyword.operator",
			"settings": {
				"foreground": color14.hex()
			}
		},
		{
			"name": "Keywords",
			"scope": [
				"keyword",
				"storage"
			],
			"settings": {
				"fontStyle": "italic bold",
				"foreground": danger.hex()
			}
		},
		{
			"name": "Types",
			"scope": [
				"storage.type",
				"support.type",
				"constant.language",
				"support.constant",
				"variable.language"
			],
			"settings": {
				"fontStyle": "italic bold",
				"foreground": aqua.hex()
			}
		},
		{
			"name": "New Operator",
			"scope": [
				"keyword.operator.new",
			],
			"settings": {
				"foreground": danger.hex()
			}
		},
		{
			"name": "Variables",
			"scope": [
				"variable",
				"support.variable"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": leadLight.hex()
			}
		},
		{
			"name": "Variables",
			"scope": [
				"variable.parameter"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": salmonDark.hex()
			}
		},
		{
			"name": "Functions",
			"scope": [
				"entity.name.function",
				"support.function"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": purple.hex()
			}
		},
		{
			"name": "Classes",
			"scope": [
				"entity.other.inherited-class",
				"support.class"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": aqua.hex()
			}
		},
		{
			"name": "TS: typing",
			"scope": [
				"entity.name.type",
			],
			"settings": {
				"fontStyle": "bold underline",
				"foreground": purple.hex()
			}
		},
		{
			"name": "Exceptions",
			"scope": "entity.name.exception",
			"settings": {
				"foreground": color13.hex()
			}
		},
		{
			"name": "Sections",
			"scope": "entity.name.section",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"name": "Numbers, Characters",
			"scope": [
				"constant.numeric",
				"constant.character",
				"constant"
			],
			"settings": {
				"fontStyle": "",
				"foreground": link.hex()
			}
		},
		{
			"name": "Strings",
			"scope": "string",
			"settings": {
				"foreground": green.hex()
			}
		},
		{
			"name": "Strings: Escape Sequences",
			"scope": "constant.character.escape",
			"settings": {
				"fontStyle": "bold",
				"foreground": yellow.hex()
			}
		},
		{
			"name": "Strings: Regular Expressions",
			"scope": "string.regexp",
			"settings": {
				"foreground": color05.hex()
			}
		},
		{
			"name": "Strings: Symbols",
			"scope": "constant.other.symbol",
			"settings": {
				"foreground": color30.hex()
			}
		},
		{
			"name": "Punctuation",
			"scope": "punctuation",
			"settings": {
				"foreground": aqua.hex()
			}
		},
		{
			"name": "Operators",
			"scope": "keyword.operator",
			"settings": {
				"foreground": aqua.hex()
			}
		},
		{
			"name": "HTML: Doctype Declaration",
			"scope": [
				"meta.tag.sgml.doctype",
				"meta.tag.sgml.doctype string",
				"meta.tag.sgml.doctype entity.name.tag",
				"meta.tag.sgml punctuation.definition.tag.html"
			],
			"settings": {
				"foreground": color30.hex()
			}
		},
		{
			"name": "HTML: Tags",
			"scope": [
				"meta.tag",
				"punctuation.definition.tag.html",
				"punctuation.definition.tag.begin.html",
				"punctuation.definition.tag.end.html"
			],
			"settings": {
				"foreground": aqua.hex()
			}
		},
		{
			"name": "HTML: Tag Names",
			"scope": "entity.name.tag",
			"settings": {
				"fontStyle": "bold",
				"foreground": aquaDark.hex()
			}
		},
		{
			"name": "HTML: Attribute Names",
			"scope": [
				"meta.tag entity.other.attribute-name",
				"entity.other.attribute-name.html"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": purple.hex()
			}
		},
		{
			"name": "CSS: Selectors",
			"scope": [
				"constant.character.entity",
				"punctuation.definition.entity",
				"meta.selector",
				"meta.selector entity",
				"meta.selector entity punctuation",
				"entity.name.tag.css"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": leadLight.hex()
			}
		},
		{
			"name": "CSS: Property Names",
			"scope": [
				"meta.property-name",
				"support.type.property-name"
			],
			"settings": {
				"fontStyle": "",
				"foreground": leadLight.hex()
			}
		},
		{
			"name": "CSS: Property Values",
			"scope": [
				"meta.property-value",
				"meta.property-value constant.other",
				"support.constant.property-value"
			],
			"settings": {
				"fontStyle": "",
				"foreground": leadLight.hex()
			}
		},
		{
			"name": "CSS: Important Keyword",
			"scope": "keyword.other.important",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"name": "Markup: Changed",
			"scope": "markup.changed",
			"settings": {
				"foreground": color03.hex()
			}
		},
		{
			"name": "Markup: Deletion",
			"scope": "markup.deleted",
			"settings": {
				"foreground": color03.hex()
			}
		},
		{
			"name": "Markup: Emphasis",
			"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"name": "Markup: Error",
			"scope": "markup.error",
			"settings": {
				"foreground": color13.hex()
			}
		},
		{
			"name": "Markup: Insertion",
			"scope": "markup.inserted",
			"settings": {
				"foreground": color03.hex()
			}
		},
		{
			"name": "Markup: Link",
			"scope": "meta.link",
			"settings": {
				"foreground": color05.hex()
			}
		},
		{
			"name": "Markup: Output",
			"scope": [
				"markup.output",
				"markup.raw"
			],
			"settings": {
				"foreground": color14.hex()
			}
		},
		{
			"name": "Markup: Prompt",
			"scope": "markup.prompt",
			"settings": {
				"foreground": color14.hex()
			}
		},
		{
			"name": "Markup: Heading",
			"scope": "markup.heading",
			"settings": {
				"foreground": color16.hex()
			}
		},
		{
			"name": "Markup: Strong",
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"name": "Markup: Traceback",
			"scope": "markup.traceback",
			"settings": {
				"foreground": color13.hex()
			}
		},
		{
			"name": "Markup: Underline",
			"scope": "markup.underline",
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"name": "Markup Quote",
			"scope": "markup.quote",
			"settings": {
				"foreground": color06.hex()
			}
		},
		{
			"name": "Markup Lists",
			"scope": "markup.list",
			"settings": {
				"foreground": color05.hex()
			}
		},
		{
			"name": "Markup Styling",
			"scope": [
				"markup.bold",
				"markup.italic"
			],
			"settings": {
				"foreground": color10.hex()
			}
		},
		{
			"name": "Markup Inline",
			"scope": "markup.inline.raw",
			"settings": {
				"fontStyle": "",
				"foreground": color18.hex()
			}
		},
		{
			"name": "Extra: Diff Range",
			"scope": [
				"meta.diff.range",
				"meta.diff.index",
				"meta.separator"
			],
			"settings": {
				"foreground": color12.hex()
			}
		},
		{
			"name": "Extra: Diff From",
			"scope": "meta.diff.header.from-file",
			"settings": {
				"foreground": color12.hex()
			}
		},
		{
			"name": "Extra: Diff To",
			"scope": "meta.diff.header.to-file",
			"settings": {
				"foreground": color12.hex()
			}
		}
	]
}

const archiveName = '../themes/' + path.basename(__filename.replace(/.js$/g, '')) + '.json'
const content = JSON.stringify(theme, null, '\t')

console.log(archiveName)

fs.writeFile(archiveName, content, (e)=>null)
