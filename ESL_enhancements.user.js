// ==UserScript==
// @name        ESL enhancements
// @namespace   https://github.com/marki555
// @description	ESL enhancements (full width) by hpepodma
// @include     https://eu-i.svcs.hp.com/pls/*
// @include	http://eslweb.gre.omc.hp.com/pls/*
// @include	http://esl.corp.hp.com/pls/*
// @version     0.1
// @grant       GM_log
// ==/UserScript==

(function () { 

// Set an attribute from all occurences of elements to a specified value.
// The previous value of this attribute is discarded.
// (All occurences of this elements are processed.)
//
// Example: Set with to 80 columns on all texteareas:
// setAttributeOfElement('cols',80,"//textarea")
function setAttributeOfElement(attributeName,attributeValue,ElementXpath) {
  var alltags = document.evaluate(ElementXpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  for (i=0; i<alltags.snapshotLength; i++) alltags.snapshotItem(i).setAttribute(attributeName, attributeValue)
}


// Removes an attribute from all occurences of elements whose XPath is provided.
// (All occurences of this elements are processed.)
//
// Example: Remove the bgcolor of all <table>:
// removeAttributeOfElement('bgcolor',"//table[@bgcolor]")
// Remove the fixed with of all tables or cells::
// removeAttributeOfElement('width',"//table[@width]|//td[@width]")
function removeAttributeOfElement(attributeName,ElementXpath) {
  var alltags = document.evaluate(ElementXpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  for (i=0; i<alltags.snapshotLength; i++) alltags.snapshotItem(i).removeAttribute(attributeName);
}

try {
  // ESL search
  setAttributeOfElement('style','width:100%;',"//div[@class='search_result_div']");
  setAttributeOfElement('width','100%;',"//table[@width]");
}


catch (e) { alert("UserScript exception:\n" + e); } 

})();
