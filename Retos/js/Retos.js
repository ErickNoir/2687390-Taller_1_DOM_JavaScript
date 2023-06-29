let viewEvent = document.getElementById("viewEvent")


// Reto 1 --------------------------------------------------------------------------------------------------

let valorCampo1 = document.getElementById("campoReto1").value

function updated(){
    valorCampo1 = document.getElementById("campoReto1").value
}

function countingCharacters(){
  viewEvent.innerHTML = `<p> La palabra tiene ` + valorCampo1.length + ` carácteres de largo.</p>`
}

function convertToUppercase(){
  viewEvent.innerHTML = `<p> La palabra en mayúsculas se ve de la siguiente manera:  </p> ` + valorCampo1.toUpperCase()
}

function convertToLowcase(){
    viewEvent.innerHTML = `<p> La palabra en minusculas se ve de la siguiente manera:  </p>` + valorCampo1.toLowerCase()
}

function takeFirstCharacter(){
    viewEvent.innerHTML = `<p>El primer caracter de la palabra es: </p>` + valorCampo1.charAt(0)
}


// Reto 2 --------------------------------------------------------------------------------------------------


// Reto 3 --------------------------------------------------------------------------------------------------

function convertTemperature(){
  let temperature = document.getElementById("campoReto3").value
  let fromTemp1 = document.getElementById("from").value
  let toTemp2 = document.getElementById("to").value
  
  let finalTemperature

  if (fromTemp1 == "fromTemp1" && toTemp2 == "toTemp2"){
    finalTemperature = (temperature * 1.8) + 32
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°F</p>`
  }

  else if (fromTemp1 == "fromTemp1" && toTemp2 == "toTemp3"){
    finalTemperature = temperature - 273.15
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°K</p>`
  }


  else if (fromTemp1 == "fromTemp2" && toTemp2 == "toTemp1"){
    finalTemperature = (temperature - 32) * 1.8
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°C</p>`
  }

  else if (fromTemp1 == "fromTemp2" && toTemp2 == "toTemp3"){
    finalTemperature = ((5 * (temperature - 32)) / 9) + 273.15
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°K</p>`
  }

  else if (fromTemp1 == "fromTemp3" && toTemp2 == "toTemp1"){
    finalTemperature = temperature + 273.15
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°C</p>`
  }

  else if (fromTemp1 == "fromTemp3" && toTemp2 == "toTemp2"){
    finalTemperature = ((9 * (temperature - 273.15)) / 5) + 32
    document.getElementById("resultField").innerHTML = `<p>La conversión de final es de: ` + finalTemperature + `°F</p>`
  }
}

// Reto 4 --------------------------------------------------------------------------------------------------

function guessTriangle(){
  let firstSide = document.getElementById("firstSide").value
  let secondSide = document.getElementById("secondSide").value
  let thirdSide = document.getElementById("thirdSide").value


  if (firstSide == secondSide && firstSide == thirdSide){
    document.getElementById("resultField4").innerHTML = `<p>Es un triangulo equilatero.</p>`
  }

  else if(firstSide == secondSide && firstSide !== thirdSide){
    document.getElementById("resultField4").innerHTML = `<p>Es un triangulo isóseles.</p>`
  }

  else if(firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide){
    document.getElementById("resultField4").innerHTML = `<p>Es un triangulo escaleno.</p>`
  }
}

function updated4(){
  firstSide = document.getElementById("firstSide").value
  secondSide = document.getElementById("secondSide").value
  thirdSide = document.getElementById("thirdSide").value
}


// Reto 5 --------------------------------------------------------------------------------------------------

function verify(){
  let instructorName = document.getElementById("name").value
  let instructorLastName = document.getElementById("lastName").value
  let instructorSubject = document.getElementById("subject").value

  if (instructorName == instructorLastName && instructorName == instructorSubject){
    document.getElementById("resultField5").innerHTML = `<p>Correcto.</p>`
  }

  else {
    document.getElementById("resultField5").innerHTML = `<p>Incorreto.</p>`
  }


}

function updated4(){
  instructorName = document.getElementById("name").value
  instructorLastName = document.getElementById("lastName").value
  instructorSubject = document.getElementById("subject").value
}


// Reto 6 --------------------------------------------------------------------------------------------------

// Modal Circulo ------------------------------------
//Area

function openCircleAreaModal(){
  document.querySelector(".modalWindowCircleArea").style.display="block"
}
function closeCircleArea(){
  document.querySelector(".modalWindowCircleArea").style.display="none"
}

function calculateCircleArea(){
  let radius = document.getElementById("radiusArea").value

  let areaCircle = radius * (3.1416 * 2)

  document.getElementById("resultField5CirleArea").innerHTML = `<p>` + areaCircle +`</p>`
}

// Perimetro

function openCirclePerimeterModal(){
  document.querySelector(".modalWindowCirclePerimeter").style.display="block"
}
function closeCirclePerimeter(){
  document.querySelector(".modalWindowCirclePerimeter").style.display="none"
}

function calculateCirclePerimeter(){
  let radius = document.getElementById("radiusPerimeter").value

  let perimeterCircle = (radius * 2) * 3.1416

  document.getElementById("resultField5CirclePerimeter").innerHTML = `<p>` + perimeterCircle +`</p>`
}

// Modal Triangulo ------------------------------------
//Area

function openTriangleAreaModal(){
  document.querySelector(".modalWindowTriangleArea").style.display="block"
}
function closeTriangleArea(){
  document.querySelector(".modalWindowTriangleArea").style.display="none"
}

function calculateTriangleArea(){
  let height = document.getElementById("heightArea").value
  let base = document.getElementById("baseArea").value

  let areaTriangle = (base * height) / 2

  document.getElementById("resultField5TriangleArea").innerHTML = `<p>` + areaTriangle +`</p>`
}

// Perimetro

function openTrianglePerimeterModal(){
  document.querySelector(".modalWindowTrianglePerimeter").style.display="block"
}
function closeTrianglePerimeter(){
  document.querySelector(".modalWindowTrianglePerimeter").style.display="none"
}

function calculateTrianglePerimeter(){
  let triangleSide1 = document.getElementById("side1Triangle").value
  let triangleSide2 = document.getElementById("side2Triangle").value
  let triangleSide3 = document.getElementById("side3Triangle").value

  let perimeterTriangle = (triangleSide1 *1) + (triangleSide2 * 1) + (triangleSide3 * 1)

  document.getElementById("resultField5TrianglePerimeter").innerHTML = `<p>` + perimeterTriangle +`</p>`
}


// Modal Rectangulo ------------------------------------
//Area

function openRectangleAreaModal(){
  document.querySelector(".modalWindowRectangleArea").style.display="block"
}
function closeRectangleArea(){
  document.querySelector(".modalWindowRectangleArea").style.display="none"
}

function calculateRectangleArea(){
  let rectangleAreaSide1 = document.getElementById("side1RectangleArea").value
  let rectangleAreaSide2 = document.getElementById("side2RectangleArea").value

  let areaRectangle = rectangleAreaSide1 * rectangleAreaSide2

  document.getElementById("resultField5RectangleArea").innerHTML = `<p>` + areaRectangle +`</p>`
}

// Perimetro

function openRectanglePerimeterModal(){
  document.querySelector(".modalWindowRectanglePerimeter").style.display="block"
}
function closeRectanglePerimeter(){
  document.querySelector(".modalWindowRectanglePerimeter").style.display="none"
}

function calculateRectanglePerimeter(){
  let rectanglePerimeterSide1 = document.getElementById("side1RectanglePerimeter").value
  let rectanglePerimeterSide2 = document.getElementById("side2RectanglePerimeter").value

  let perimeterRectangle = (rectanglePerimeterSide1 * 2) + (rectanglePerimeterSide2 * 2)

  document.getElementById("resultField5RectanglePerimeter").innerHTML = `<p>` + perimeterRectangle +`</p>`
}


// Modal Cuadrados ------------------------------------
//Area

function openSquareAreaModal(){
  document.querySelector(".modalWindowSquareArea").style.display="block"
}
function closeSquareArea(){
  document.querySelector(".modalWindowSquareArea").style.display="none"
}

function calculateSquareArea(){
  let sideSquareArea = document.getElementById("side1SquareArea").value

  let areaSquare = sideSquareArea * 2

  document.getElementById("resultField5SquareArea").innerHTML = `<p>` + areaSquare +`</p>`
}

// Perimetro

function openSquarePerimeterModal(){
  document.querySelector(".modalWindowSquarePerimeter").style.display="block"
}
function closeSquareePerimeter(){
  document.querySelector(".modalWindowSquarePerimeter").style.display="none"
}

function calculateSquarePerimeter(){
  let sideSquarePerimeter = document.getElementById("side1SquarePerimeter").value

  let PerimeterSquare = sideSquarePerimeter * 4

  document.getElementById("resultField5SquarePerimeter").innerHTML = `<p>` + PerimeterSquare +`</p>`
}



// Reto 7 --------------------------------------------------------------------------------------------------
