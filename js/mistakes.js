let warning = document.getElementById("warning");

buttonDiameterCircle.addEventListener("click", checkErrorCircle);
buttonPerimeterCircle.addEventListener("click", checkErrorCircle);
buttonAreaCircle.addEventListener("click", checkErrorCircle);

buttonPerimeterTriangle.addEventListener("click", checkErrorPerimeterTriangle);
buttonAreaTriangle.addEventListener("click", checkErrorAreaTriangle);

buttonPerimeterSquare.addEventListener("click", checkErrorSquare);
buttonAreaSquare.addEventListener("click", checkErrorSquare);

function checkErrorCircle(){
    if(circleRadio.value.length == 0){
            result.innerHTML = "";
            error.classList.add("error");
            warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }
}

function checkErrorPerimeterTriangle(){
    if(triangleBase.value.length == 0 && triangleHeight.value.length == 0 && sideATriangle.value.length == 0 && sideBTriangle.value.length == 0){
        result.innerHTML = "";
        error.classList.add("error");
        warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }else if(triangleBase.value.length == 0 || sideATriangle.value.length == 0 || sideBTriangle.value.length == 0){
        result.innerHTML = "";
        error.classList.add("error");
        warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }
}

function checkErrorAreaTriangle(){
    if(triangleBase.value.length == 0 && triangleHeight.value.length == 0 && sideATriangle.value.length == 0 && sideBTriangle.value.length == 0){
        result.innerHTML = "";
        error.classList.add("error");
        warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }else if(triangleBase.value.length == 0 || triangleHeight.value.length == 0){
        result.innerHTML = "";
        error.classList.add("error");
        warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }
}

function checkErrorSquare(){
    if(sideSquare.value.length == 0){
        result.innerHTML = "";
        error.classList.add("error");
        warning.innerHTML = "Debes ingresar un valor para realizar este calculo";
    }
}