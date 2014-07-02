// ==UserScript==
// @name        ZltyMelon auto-kody
// @namespace   https://github.com/marki555
// @description Automaticky vyplni validacne kody na Zltom Melone
// @include     https://www.zltymelon.sk/aukcie/*
// @icon	https://www.zltymelon.sk/favicon.ico
// @version     0.1
// ==/UserScript==

// codes
var codes=new Array();
// tr " " "\n" <zm >zm2
// awk '{ if ($1 ~ /^[0-9]+$/) { i=$1 } else { print "codes["i"]=\""$1"\";" } }' zm2

codes[1]="xxxxxx";
// ...
codes[100]="xxxxxx";

// search for code number
var c;
var code = document.getElementById('frm-formAuctionBid-validCode');
var srch=/>Valida.ný kód pozícia ([0-9]+)</;
if (srch.test(document.body.innerHTML)) {
  var res=srch.exec(document.body.innerHTML);
  c=codes[res[1]];
  //alert(res[1]);
  //alert(codes[res[1]]);
  //if (!code.value.length) code.value=codes[res[1]];
  window.setTimeout(function(){
    code.value=c;
    //alert(code.value);
  }, 1000);
}
