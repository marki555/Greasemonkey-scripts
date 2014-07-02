// ==UserScript==
// @name        ZltyMelon auto-login
// @namespace   https://github.com/marki555
// @descritpion	Automaticke prihlasenie na Zlty Melon (heslo musi byt zapamatane v prehliadaci, skript iba automaticky odosle vyplneny formular)
// @include     https://www.zltymelon.sk/*
// @version     0.1
// ==/UserScript==


// form data
var form = document.getElementById('frm-signInForm');
var name = document.getElementById('frm-signInForm-name');
var pass = document.getElementById('frm-signInForm-password');

// redirect to login if form not found
if (!form) {
  if (/>Prihlási. sa</i.test (document.body.innerHTML)) {
    GM_log("ZM: Redirecting to login page");
    var login=/\/login\?backlink=[a-z0-9]+/.exec(document.body.innerHTML);
    window.location.assign("https://www.zltymelon.sk"+login);
  }
  // form not found && login link not found => already logged in, don't do anything
}

var timer = 1000;            // Milliseconds to wait for form to autofill (necessary in Fx 1.5 - slower computers may need longer wait)
var timo, maySubmit = true;  // Not currently typing (so we can submit it)
var tries=0;                 // how many times did we try to set the timeout

if (form) {
  // Don't submit form as we are typing into it
  pass.addEventListener('keydown', function(e) {
	maySubmit = false;
	clearTimeout(timo);
	timo = setTimeout(function() {
		maySubmit = true;
		doSignIn();
	}, 2000);
  }, true);

  function doSignIn() {
	tries++;
	GM_log("ZM: doSignIn "+tries+" tries...");
	if(name.value.length && pass.value.length && maySubmit) { GM_log("ZM: submit"); form.submit(); } // Form must be non-empty and not being typed into
	else {
	  if (tries < 5) window.setTimeout(doSignIn, timer); // let's wait more
	  else { GM_log("ZM: reload "+tries); location.reload(); }                           // or reload
	}
  }
  doSignIn(); // Attempt to sign in
}
