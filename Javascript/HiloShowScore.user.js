// ==UserScript==
// @name         HiloShowScore
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://flightrising.com/main.php?p=hilo
// @grant        none
// ==/UserScript==

var Win;
var HiLoLost;
var HiLoWon;
var HiLoRatio;
var lastGame;

// Returns 0 if value is not yet insantiated.
function getLocalInt(varName) {
    var localVar = localStorage[varName];
    if (localVar !== null && localVar !== undefined) {
        if ( !isNaN((parseInt(localVar))) ) {
            return parseInt(localVar);
        }
    }
    return 0;
}

HiLoLost = getLocalInt("HiLoLost");
HiLoWon = getLocalInt("HiLoWon");

HiLoRatio = (HiLoWon/(HiLoWon+HiLoLost)*100).toFixed(2);

if (localStorage["LastGame"] == "true"){
   		lastGame = '<span style="color:Green">Last Game Won</span>';
    }
    else {
    	lastGame = '<span style="color:Red">Last Game Lost</span>';
    }

$('body').append('<div id="score"></div>');
$("#score").css("position", "fixed").css("top", 10).css("left", 10).css("color","white");
$('#score').css("font-size","25px");

$('#score')[0].innerHTML = 'HiLo Stats:<br> Games Won: ' + HiLoWon + '<br> Games Lost: ' + HiLoLost + "<br>Wins: " + HiLoRatio + "<br>" + lastGame;