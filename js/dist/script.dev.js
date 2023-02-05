"use strict";

var entrer = document.querySelector("#box_entrer");
var charge = document.querySelector("cercle");
var contenu = document.querySelector("#tout");
var bienv = document.querySelector("#WELCOME");
entrer.addEventListener('click', actionB);

function actionB() {
  bienv.style.display = 'none';
  console.log("BONJOUR");
  contenu.style.display = 'block';
}