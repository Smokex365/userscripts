// ==UserScript==
// @name          	Spiceworks Dark
// @description     Dark userscript for Spiceworks
// @author			 
// @match			https://*.spiceworks.com/*
// @grant			GM_addStyle
// @version         0.1
// @updateURL		
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

//Layout
addGlobalStyle('.base .sui-fluid-container body.sui- .sui-body {background-color: #292D30 !important;}');
addGlobalStyle('container.sui-fluid-container {background-color: #292D30 !important;}');
addGlobalStyle('body.sui-* {background-color: #292D30 !important;}');
addGlobalStyle('.sui-body {background-color: #292D30 !important;}');

//Text
addGlobalStyle('.nb_sidebar h2 {color: #DC5B23 !important;}');
addGlobalStyle('.sui-feed-head a, .sui-head a {color: #DC5B23 !important;}');
addGlobalStyle('.sui-body-text {color: #DC5B23 !important;}');
