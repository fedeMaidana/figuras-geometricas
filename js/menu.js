//----------------------- MOSTRAR EL CONTENIDO SELECIONADO A TRAVES DEL MENU -------------------------------//

let circle = document.getElementsByClassName("circle");
let triangle = document.getElementsByClassName("triangle");
let square = document.getElementsByClassName("square");

let menuCircle = document.getElementById("menuCircle");
let menuTriangle = document.getElementById("menuTriangle");
let menuSquare = document.getElementById("menuSquare");

menuCircle.addEventListener("click", displayOnCircle);
menuTriangle.addEventListener("click", displayOnTriangle);
menuSquare.addEventListener("click", displayOnSquare);

function displayOnCircle(){
    circle[0].setAttribute("style", "display: grid;");
    triangle[0].setAttribute("style", "display: none;");
    square[0].setAttribute("style", "display: none;");
    result.innerHTML = "";
    warning.innerHTML = "";
    circleRadio.value = "";
}

function displayOnTriangle(){
    circle[0].setAttribute("style", "display: none;");
    triangle[0].setAttribute("style", "display: grid;");
    square[0].setAttribute("style", "display: none;");
    result.innerHTML = "";
    warning.innerHTML = "";
    triangleBase.value = "";
    triangleHeight.value = "";
    sideATriangle.value = "";
    sideBTriangle.value = "";
}

function displayOnSquare(){
    circle[0].setAttribute("style", "display: none;");
    triangle[0].setAttribute("style", "display: none;");
    square[0].setAttribute("style", "display: grid;");
    result.innerHTML = "";
    warning.innerHTML = "";
    sideSquare.value = "";
}

//------------------------------- INDICAR LA POSICION ACTUAL DEL MENU --------------------------------------//

const list = document.querySelectorAll(".list");

list.forEach(function(item){
    item.addEventListener("click", activeLink);
});

function activeLink(){
    list.forEach(function(item){
        item.classList.remove("active");
    })
    this.classList.add("active");
    error.classList.remove("error");
}