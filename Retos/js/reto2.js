function pressKey(){
    document.getElementById("showActions").innerHTML = `<p> Estás escribiendo en el campo del evento 1 </p>`
  }
  
  
  function displayDate() {
      document.getElementById("showActions").innerHTML = Date();
    }
  
  
  function upperCase() {
      const x = document.getElementById("fname");
      x.value = x.value.toUpperCase();
    }
  
  
  button.onclick = function(event) {
      if (event.altKey && event.shiftKey) {
        document.getElementById("showActions").innerHTML = `<p> ¡Hola! </p>`
      }
    };
  
  
  function mOver(obj) {
      obj.innerHTML = "Cambio!"
    }
    
  function mOut(obj) {
      obj.innerHTML = "Si pones el mouse sobre mí..."
    }
  
  
  addEventListener('load',inicio,false);
   
  function inicio(){
      document.getElementById('dobleClick').addEventListener('dblclick',presion2,false);
    }
  
  function presion2(){
      document.getElementById("showActions").innerHTML = `<img src="img/double.jpg">`
    }
  
  
  
  
  window.onresize = resize;
  
  function resize(){
      document.getElementById("showActions").innerHTML = `<p> Has modificado el tamaño de la pagina </p>`
    }
  
  
  
  function mouseUp(){
    document.getElementById("showActions").innerHTML = `<p> Dejaste de hacer click </p>`
  }
  function mouseDown(){
    document.getElementById("showActions").innerHTML = `<p> Estas haciendo click </p>`
  }
  
  
  function mouseUp(){
    document.getElementById("showActions").innerHTML = `<p> Dejaste de hacer click </p>`
  }
  function mouseDown(){
    document.getElementById("showActions").innerHTML = `<p> Estas haciendo click </p>`
  }
  
  
  let campo1 = document.getElementById("campo1").value

  function updateDoom(){
    campo1 = document.getElementById("campo1").value

    console.log(`${campo1.includes("DOOM") ? document.getElementById("showActions").innerHTML = `<p> ${campo1}  IS ETERNAL! </p>` : ' '}`)
  }
  
  


  
  function onLoad(){
    document.getElementById("showActions").innerHTML = `<p>La página ha cargado completamente, ya puedes ver las funciones de los eventos :) </p>`
  }
  
  function moveCursor(){
    document.getElementById("showActions").innerHTML = `<p>Has pasado el cursor sobre el evento 9 </p>`
  }
  
  
  
  
  document.addEventListener('keydown', colorBlack);
           function colorBlack(e){
              if(e.keyCode == '37'){
                document.getElementById("showActions").innerHTML = `<p>Derecha...</p>`
              }
           }
           window.addEventListener('keydown', colorGreen);
           function colorGreen(e){
              if(e.keyCode == '39'){
                document.getElementById("showActions").innerHTML = `<p>Izquierda...</p>`
              }
           }