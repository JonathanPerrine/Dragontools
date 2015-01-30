// ==UserScript==
// @name         Reload Hilo
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://flightrising.com/main.php?p=hilo&choice=*
// @grant        none
// ==/UserScript==



var Win;
var HiLoLost;
var HiLoWon;

// Returns 0 if value is not yet insantiated.
function getLocalInt(varName) {
    var localVar = localStorage[varName];
    if (localVar !== null && localVar !== undefined) {
        if (parseInt(localVar) !== NaN) {
            return parseInt(localVar);
        }
    }
    return 0;
}

HiLoLost = getLocalInt("HiLoLost");
HiLoWon = getLocalInt("HiLoWon");

Win = $('.mb_button').parent().parent()[0].innerHTML.indexOf("won")>0;

if (Win) {
    HiLoWon++;
	localStorage["HiLoWon"] = HiLoWon;
}
else {
    HiLoLost++;
	localStorage["HiLoLost"] = HiLoLost;
}

localStorage["LastGame"] = Win;
    
replayHilo()


