let start = documentquerySelector(".box_enter")
let charge = documentquerySelector("#cercle")
let contenu = documentquerySelector("#tout")
let bienv = documentquerySelector("#WELCOME")
let fincharge = charge.style.stroke-dashoffset
start.addEventListener("click", () => {
    //bienv.style.stroke-dashoffset =
    bienv.style.display = "none"
    contenu.style.display = "block"

})