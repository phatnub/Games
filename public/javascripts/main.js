'use strict'
// import {doEvent} from './gaetettal.js';
import {createHeader} from './navbar.js';

function init(){
    createHeader();
    // doEvent();
}

window.addEventListener("load", init);
