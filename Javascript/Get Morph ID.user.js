// ==UserScript==
// @name         Get Morph ID
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://flightrising.com/main.php?p=scrying&view=morphintime
// @grant        none
// ==/UserScript==

console.log(localStorage["FromMorphButton"]);
console.log(localStorage["DragonId"]);

var DragonId;


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


if (localStorage["FromMorphButton"]) {
    localStorage["FromMorphButton"] = ""; //false
    DragonId = getLocalInt("DragonId");
    $('#greenranger')[0].value=DragonId;
    AEGBAGA();
}


	