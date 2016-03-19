// ==UserScript==
// @name          	Spiceworks Dark
// @description     Dark userscript for Spiceworks
// @author			 
// @match			https://*.spiceworks.com/*
// @grant			GM_addStyle
// @version         0.1
// @updateURL		https://github.com/Smokex365/userscripts/raw/master/Spiceworks%20Dark.user.js
// @supportURL 		https://github.com/Smokex365/userscripts/issues
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//ayout
addGlobalStyle('.base .sui-fluid-container body.sui- .sui-body {background-color: #292D30 !important;}');
addGlobalStyle('container {background-color: #292D30 !important;}');
addGlobalStyle('body.sui-* {background-color: #292D30 !important;}');
addGlobalStyle('.sui-body {background-color: #292D30 !important;}');
addGlobalStyle('body, body.sui-opt-in {background-color: #292D30 !important;}');
addGlobalStyle('nav {background-color: #292D30 !important;}');
addGlobalStyle('.domestic-menus_entry > a {background-color: #292D30 !important;}');
addGlobalStyle('.sui-opt-in .domestic-menus_submenu {background-color: #292D30 !important;}');


//Text
addGlobalStyle('.nb_sidebar h2 {color: #DC5B23 !important;}');
addGlobalStyle('.sui-feed-head a, .sui-head a {color: #DC5B23 !important;}');
addGlobalStyle('.sui-body-text {color: #DC5B23 !important;}');
addGlobalStyle('h1, h2, h3, h4, h5 {color: #DC5B23 !important;}');
addGlobalStyle('body {color: #DC5B23 !important;}');
addGlobalStyle('body.no-body-shadow .sui-body header h1 a {color: #DC5B23 !important;}');
addGlobalStyle('p {color: #AF5026 !important;}');


// addGlobalStyle(' {color: #DC5B23 !important;}');
