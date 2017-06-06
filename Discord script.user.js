// ==UserScript==
// @name         Discord script
// @namespace    ://tampermonkey.net/
// @version      0.1
// @description  Automatically shows script
// @author       You
// @match        https://discordapp.com/token
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert(localStorage.token);// Your code here...
})();