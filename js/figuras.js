//-------------------------------------------- VARIABLES ---------------------------------------------------//
//Variables del circulo
let circleRadio = document.getElementById("inputRadioCircle");
let buttonDiameterCircle = document.getElementById("btnDiameterCircle");
let buttonPerimeterCircle = document.getElementById("btnPerimeterCircle");
let buttonAreaCircle = document.getElementById("btnAreaCircle");

//variables del cuadraddo
let sideSquare = document.getElementById("inputSideSquare");
let buttonAreaSquare = document.getElementById("btnAreaSquare");
let buttonPerimeterSquare = document.getElementById("btnPerimeterSquare");

//Variables del triangulo
let triangleBase = document.getElementById("inputBaseTriangle");
let triangleHeight = document.getElementById("inputHeightTriangle");
let sideATriangle = document.getElementById("inputSideATriangle");
let sideBTriangle = document.getElementById("inputSideBTriangle");
let buttonPerimeterTriangle = document.getElementById("btnPerimeterTriangle");
let buttonAreaTriangle = document.getElementById("btnAreaTriangle");

//variables para mostrar el resultado
let resultP = document.getElementById("resultPerimeter");
let resultA = document.getElementById("resultArea");
let resultD = document.getElementById("resultDiameter");

//-------------------------------------------- EVENTOS ---------------------------------------------------//

//eventos del circulo
buttonDiameterCircle.addEventListener("click", showDiameterCircle)
buttonPerimeterCircle.addEventListener("click", showPerimeterCircle);
buttonAreaCircle.addEventListener("click", showAreaCircle);

//eventos del cuadrado
buttonPerimeterSquare.addEventListener("click", showPerimeterSquare);
buttonAreaSquare.addEventListener("click", showAreaSquare);

//eventos del triangulo
buttonPerimeterTriangle.addEventListener("click", showPerimeterTriangle);
buttonAreaTriangle.addEventListener("click", showAreaTriangle);

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

//calculos del cuadrado

function perimeterSquare(sdSqr){
    return sdSqr * 4;
}

function areaSquare(sdSqr){
    return sdSqr ** 2;
}

//calculos del triangulo

function trianglePerimeter(trnglSd1, trnglSd2, trnglBs){
    return trnglSd1 + trnglSd2 + trnglBs;
}

function triangleArea(trnglBs, trnglHght){
    return (trnglBs * trnglHght) / 2;
}

//-------------------------------------------- RESULTADO ---------------------------------------------------//

//resultados del circulo

function showDiameterCircle(){
    let radio = parseInt(circleRadio.value)
    let value = circleDiameter(radio);
    resultD.innerHTML = value;
}

function showPerimeterCircle(){
    let radio = parseInt(circleRadio.value);
    let value = circlePerimeter(radio);
    resultP.innerHTML = value;
}

function showAreaCircle(){
    let radio = parseInt(circleRadio.value);
    let value = circleArea(radio);
    resultA.innerHTML = value;
}

//resultados del cuadrado

function showPerimeterSquare(){
    let sides = parseInt(sideSquare.value);
    let value = perimeterSquare(sides);
    resultP.innerHTML = value + " cm";
}

function showAreaSquare(){
    let sides = parseInt(sideSquare.value);
    let value = areaSquare(sides);
    resultA.innerHTML = value + " cm";
}

//resultados del triangulo

function showPerimeterTriangle(){
    let triangelSide1 = parseInt(sideATriangle.value);
    let triangleSide2 = parseInt(sideBTriangle.value);
    let base = parseInt(triangleBase.value)
    let value = trianglePerimeter(triangelSide1, triangleSide2, base);
    resultP.innerHTML = value;
}

function showAreaTriangle(){
    let base = parseInt(triangleBase.value);
    let height = parseInt(triangleHeight.value);
    let value = triangleArea(base, height);
    resultA.innerHTML = value;
}