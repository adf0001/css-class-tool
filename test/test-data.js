
//global variable, for html page, refer tpsvr @ npm.
css_class_tool = require("../css-class-tool.js");

//test tool
function _addCssText(cssText) {
	var style = document.createElement("style");
	style.type = "text/css";

	try {
		style.appendChild(document.createTextNode(cssText));
	}
	catch (ex) {
		style.styleSheet.cssText = cssText;
	}
	document.getElementsByTagName("head")[0].appendChild(style);
};

_addCssText("\
.ht.selected{background:lavender;}\
");

module.exports = {

	"set/setEl()": function (done) {

		return "<span class='ht selected'>css .ht.selected style sample</span>" +
			"<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;css_class_tool([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected',null,'ht'); css_class_tool([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'',null,'ht');\"" +
			"></input>toggle by set()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;css_class_tool.setEl('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],this.checked?[chs[1],chs[3]]:[chs[0],chs[2]],null,'ht');\"" +
			"></input>toggle by setEl()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;css_class_tool.setEl('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);\"" +
			"></input>setEl() toggle	//may fail at firstly click</label><br>" +
			"</div>";
	},

	".bind()": function (done) {
		ht_class_tool = css_class_tool.bind("ht");
		
		return "<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_class_tool([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected'); ht_class_tool([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'');\"" +
			"></input>toggle by set()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_class_tool.setEl('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],this.checked?[chs[1],chs[3]]:[chs[0],chs[2]]);\"" +
			"></input>toggle by setEl()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_class_tool.setEl('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);\"" +
			"></input>setEl() toggle</label><br>" +
			"</div>";
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('css_class_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
