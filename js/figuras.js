//-------------------------------------------- VARIABLES ---------------------------------------------------//

//Variables del circulo
let circleRadio = document.getElementById("inputRadioCircle");
let buttonDiameterCircle = document.getElementById("btnDiameterCircle");
let buttonPerimeterCircle = document.getElementById("btnPerimeterCircle");
let buttonAreaCircle = document.getElementById("btnAreaCircle");

//Variables del triangulo
let triangleBase = document.getElementById("inputBaseTriangle");
let triangleHeight = document.getElementById("inputHeightTriangle");
let sideATriangle = document.getElementById("inputSideATriangle");
let sideBTriangle = document.getElementById("inputSideBTriangle");
let buttonPerimeterTriangle = document.getElementById("btnPerimeterTriangle");
let buttonAreaTriangle = document.getElementById("btnAreaTriangle");

//variables del cuadraddo
let sideSquare = document.getElementById("inputSideSquare");
let buttonAreaSquare = document.getElementById("btnAreaSquare");
let buttonPerimeterSquare = document.getElementById("btnPerimeterSquare");

//variables para mostrar el resultado
let result = document.getElementById("result");

let error = document.getElementById("activeError");
error.classList.remove("error");

//-------------------------------------------- EVENTOS ---------------------------------------------------//

//eventos del circulo
buttonDiameterCircle.addEventListener("click", showDiameterCircle);
buttonPerimeterCircle.addEventListener("click", showPerimeterCircle);
buttonAreaCircle.addEventListener("click", showAreaCircle);

//eventos del triangulo
buttonPerimeterTriangle.addEventListener("click", showPerimeterTriangle);
buttonAreaTriangle.addEventListener("click", showAreaTriangle);

//eventos del cuadrado
buttonPerimeterSquare.addEventListener("click", showPerimeterSquare);
buttonAreaSquare.addEventListener("click", showAreaSquare);

//-------------------------------------------- CALCULOS ---------------------------------------------------//

//calculos del circulo

function circleDiameter(rd){
    return rd * 2;
}

const PI = Math.PI;

function circlePerimeter(rd){
    const diameter =  circleDiameter(rd);
    return diameter * PI;
}

function circleArea(rd){
    return (rd ** 2) * PI;
}

//calculos del triangulo

function trianglePerimeter(trnglSd1, trnglSd2, trnglBs){
    return trnglSd1 + trnglSd2 + trnglBs;
}

function triangleArea(trnglBs, trnglHght){
    return (trnglBs * trnglHght) / 2;
}

//calculos del cuadrado

function perimeterSquare(sdSqr){
    return sdSqr * 4;
}

function areaSquare(sdSqr){
    return sdSqr ** 2;
}

//-------------------------------------------- MOSTRAR RESULTADO -------------------------------------------//

//resultados del circulo

function showDiameterCircle(){
    let radio = parseInt(circleRadio.value)
    let value = circleDiameter(radio);
    result.innerHTML = "Su diametro es de: " + value + " cm";
    warning.innerHTML = "";
    error.classList.remove("error");
}

function showPerimeterCircle(){
    let radio = parseInt(circleRadio.value);
    let value = circlePerimeter(radio);
    result.innerHTML = "Su perimetro es de: " + value.toFixed(2) + " cm";
    warning.innerHTML = "";
    error.classList.remove("error");
}

function showAreaCircle(){
    let radio = parseInt(circleRadio.value);
    let value = circleArea(radio);
    result.innerHTML = "Su area es de: " + value.toFixed(2) + " cm<sup>2</sup>";
    warning.innerHTML = "";
    error.classList.remove("error");
}

//resultados del triangulo

function showPerimeterTriangle(){
    let triangelSide1 = parseInt(sideATriangle.value);
    let triangleSide2 = parseInt(sideBTriangle.value);
    let base = parseInt(triangleBase.value)
    let value = trianglePerimeter(triangelSide1, triangleSide2, base);
    result.innerHTML = "Su perimetro es de: " + value + " cm";
    warning.innerHTML = "";
    error.classList.remove("error");
}

function showAreaTriangle(){
    let base = parseInt(triangleBase.value);
    let height = parseInt(triangleHeight.value);
    let value = triangleArea(base, height);
    result.innerHTML = "Su area es de: " + value + " cm<sup>2</sup>";
    warning.innerHTML = "";
    error.classList.remove("error");
}

//resultados del cuadrado

function showPerimeterSquare(){
    let sides = parseInt(sideSquare.value);
    let value = perimeterSquare(sides);
    result.innerHTML = "Su perimetro es de: " + value + " cm";
    warning.innerHTML = "";
    error.classList.remove("error");
}

function showAreaSquare(){
    let sides = parseInt(sideSquare.value);
    let value = areaSquare(sides);
    result.innerHTML = "Su area es de: " + value + " cm<sup>2</sup>";
    warning.innerHTML = "";
    error.classList.remove("error");
}

