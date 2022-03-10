'use strict'

function generateRandomNumber(){
    return Math.floor(Math.random() * 1000 + 1);
}
function $(bar) { return document.getElementById(bar); };

export{$,generateRandomNumber};

