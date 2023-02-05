let entrer = document.querySelector("#box_entrer")
let charge = document.querySelector("cercle")
let contenu = document.querySelector("#tout")
let bienv = document.querySelector("#WELCOME")

entrer.addEventListener('click', actionB);

function actionB() 
{
  bienv.style.display = 'none';
  console.log("BONJOUR")
  contenu.style.display = 'block';
}