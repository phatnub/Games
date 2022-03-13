'use strict'
import {createHeader} from './navbar.js';
// import * as model from './../../bin/models.js'

function init(){
    createHeader();
    let container = document.getElementById("json");
    container.addEventListener('click', function (event) {
     model.putPlayer("René", 3, 34);
    //  let result = model.getPlayers();

      });
}

window.addEventListener("load", init);
