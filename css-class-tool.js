
// css-class-tool @ npm, css-class-tool.

var addClass = function (elList, classList, framePrefix) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		if (framePrefix) el.classList.add(framePrefix);
		//el.classList.add.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.add(classList[j]);
	}
}

var removeClass = function (elList, classList) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		//el.classList.remove.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.remove(classList[j]);
	}
}

var toggleClass = function (elList, classList, framePrefix) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		if (framePrefix) el.classList.add(framePrefix);
		//el.classList.toggle.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.toggle(classList[j]);
	}
}

//combine
var setClass = function (elList, addClassList, removeClassList, toggleClassList, framePrefix) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	var i, imax = elList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") elList[i] = document.getElementById(el);
	}

	//combine call
	if (addClassList) addClass(elList, addClassList, framePrefix);
	if (removeClassList) removeClass(elList, removeClassList);
	if (toggleClassList) toggleClass(elList, toggleClassList, framePrefix);
}

//combine by element
var setClassByElement = function (classList, addElList, removeElList, toggleElList, framePrefix) {
	//arguments
	if (!(classList instanceof Array)) classList = [classList];

	//combine call
	if (addElList) addClass(addElList, classList, framePrefix);
	if (removeElList) removeClass(removeElList, classList);
	if (toggleElList) toggleClass(toggleElList, classList, framePrefix);
}

//bind framePrefix

var mapFramePrefix = {};	//map framePrefix to the binding object

var bindFramePrefix = function (defaultFramePrefix) {
	if (typeof defaultFramePrefix !== "string") return null;

	if (defaultFramePrefix in mapFramePrefix) return mapFramePrefix[defaultFramePrefix];

	//binding
	//console.log("new framePrefix binding")
	var entry = function (elList, addClassList, removeClassList, toggleClassList, framePrefix) {
		return setClass(elList, addClassList, removeClassList, toggleClassList, framePrefix || defaultFramePrefix);
	}

	entry.set = entry;

	entry.setElement = entry.setEl = function (classList, addElList, removeElList, toggleElList, framePrefix) {
		return setClassByElement(classList, addElList, removeElList, toggleElList, framePrefix || defaultFramePrefix);
	}
	entry.add = function (elList, classList, framePrefix) {
		return addClass(elList, classList, framePrefix || defaultFramePrefix);
	};
	entry.toggle = function (elList, classList, framePrefix) {
		return toggleClass(elList, classList, framePrefix || defaultFramePrefix);
	};

	entry.remove = removeClass;
	entry.bind = bindFramePrefix;

	return mapFramePrefix[defaultFramePrefix] = entry;		//cache
}

//module

module.exports = bindFramePrefix("");
