// ==UserScript==
// @name        Grey-out USA stock items on Farnell search
// @namespace   https://github.com/marki555
// @description Grey-out USA stock items on Farnell search
// @include     http://*.farnell.com/jsp/search/browse.jsp*
// @version     1
// @license	GPL
// ==/UserScript==

// original: http://en.kioskea.net/faq/2095-personalize-web-pages-with-greasemonkey

(function () { 

// Example: Remove all tables which use the CSS class 'toto':
// removeElement("//table[@class='toto']");
function removeElement(ElementXpath){
  var alltags = document.evaluate(ElementXpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  for (i=0; i<alltags.snapshotLength; i++) {
    element = alltags.snapshotItem(i);
    element.parentNode.removeChild(element); // Remove this element from its parent.
  }
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

// Inject your own CSS in the page.
// Example: Do not underline link:
// injectCSS("a{text-decoration: none;}")
function injectCSS(cssdata){
  head = document.getElementsByTagName("head")[0];
  style = document.createElement("style");
  style.setAttribute("type", 'text/css');
  style.innerHTML = cssdata;
  head.appendChild(style);
}

try {
  // Enlarging the field of the message setAttributeOfElement('rows','40',"//textarea[@name='message']");
  //setAttributeOfElement('cols','120',"//textarea[@name='message']");
  // In the list of discussion, we put in bold the discussion that have not received any reply.
  //setAttributeOfElement('style','font-weight:bold;',"//td[text()='0']/../td[1]/a");

  // sk.farnell.com
  setAttributeOfElement('style','background-color:grey;',"//tr[contains (., ' v USA') and @height='10']/preceding-sibling::tr[1]/*");
  setAttributeOfElement('style','background-color:grey;',"//tr[contains (., ' v USA') and @height='10']");
}


catch (e) { alert("UserScript exception:\n" + e); } 

})();