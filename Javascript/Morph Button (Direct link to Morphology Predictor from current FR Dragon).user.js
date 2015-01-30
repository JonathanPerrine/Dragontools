// ==UserScript==
// @name         Morph Button (Direct link to Morphology Predictor from current FR Dragon)
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://flightrising.com/main.php?p=lair&id=*&tab=dragon&did=*
// @Match		 http://flightrising.com/main.php?p=lair&tab=dragon&id=*&did=*
// @grant        none
// ==/UserScript==



function morphRedirect() {
    var DragonId;
	DragonId = $.trim($('#super-container').find('div')[2].innerHTML).substring(1);
	if (!DragonId) {
    	DragonId = $.trim($('#super-container').find('div')[3].innerHTML).substring(1);
	}
    localStorage["FromMorphButton"] = true;
    localStorage["DragonId"] = DragonId;
    window.location.href = "http://flightrising.com/main.php?p=scrying&view=morphintime";
}

$('body').append('<div id="utilities"><input type="button" id="predict" value="Predict Morphology" class="biegebutton buttonthingie"></div>');
$("#utilities").css("position", "fixed").css("top", 10).css("right", 10).css("color","white");
$('#utilities').css("font-size","25px");

$("#predict").click (morphRedirect);

