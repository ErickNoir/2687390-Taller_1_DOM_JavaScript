let form1Validation = document.getElementById("formValidation");
let warningAccesIDNumber = document.querySelector("#numberID .warning");

const $number = /^[0-9]{5,15}/;
const $textos = /^[A-Za-zñÑáÁ]{4,50}/;
const $email = /^([a-z0-9_\.-]+)@(misena.edu.co)$/;
const $password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{10,50}$/

//---------------------------------------------------------------------


//---------------------------------------------------------------------

form1Validation.fieldNumberID.addEventListener('input',(e)=>{
  e.preventDefault();

  if ($number.test(e.target.value)){
    form1Validation.fieldNumberID.setAttribute("class", "success");
    warningAccesIDNumber.style.setProperty("visibility","hidden");
    warningAccesIDNumber.style.setProperty("opacity","0");
  }
  else {
    form1Validation.fieldNumberID.setAttribute("class", "error");
    warningAccesIDNumber.textContent="Solo se pueden dijitar números, con una longitud de mínimo 5.";
    warningAccesIDNumber.style.setProperty("visibility","visible");
    warningAccesIDNumber.style.setProperty("opacity","1");
  }
})

//---------------------------------------------------------------------

let warningAccesName = document.querySelector("#namme .warning");

form1Validation.fieldNamme.addEventListener('input',(e)=>{
    e.preventDefault();
  
    if ($textos.test(e.target.value)){
      form1Validation.fieldNamme.setAttribute("class", "success");
      warningAccesName.style.setProperty("visibility","hidden");
      warningAccesName.style.setProperty("opacity","0");
    }
    else {
      form1Validation.fieldNamme.setAttribute("class", "error");
      warningAccesName.textContent="Solo se pueden dijitar letras, con una longitud de 5 a 50 caracteres.";
      warningAccesName.style.setProperty("visibility","visible");
      warningAccesName.style.setProperty("opacity","1");
    }
  })

//---------------------------------------------------------------------

let warningAccesLastName = document.querySelector("#lastName .warning")

form1Validation.fieldLastName.addEventListener('input',(e)=>{
    e.preventDefault();
  
    if ($textos.test(e.target.value)){
      form1Validation.fieldLastName.setAttribute("class", "success")
      warningAccesLastName.style.setProperty("visibility","hidden")
      warningAccesLastName.style.setProperty("opacity","0")
    }
    else {
      form1Validation.fieldLastName.setAttribute("class", "error")
      warningAccesLastName.textContent="Solo se pueden dijitar letras, con una longitud de 5 a 50 caracteres."
      warningAccesLastName.style.setProperty("visibility","visible")
      warningAccesLastName.style.setProperty("opacity","1")
    }
  })

//---------------------------------------------------------------------
/*
let warningAccesBirth = document.querySelector("#birth .warning")
let getBirth = document.getElementById("birthDate").value
let validateBirth = new Date(2005, 01, 01)

form1Validation.birth.addEventListener('input',(e)=>{
  e.preventDefault();
  
if(getBirth < validateBirth){

  alert("fegr")
  form1Validation.birth.setAttribute("class", "error")
  warningAccesBirth.textContent="Debes ser mayor de 18 años."
  warningAccesBirth.style.setProperty("visibility","visible")
  warningAccesBirth.style.setProperty("opacity","1")
}

else {
  alert("fegr")
  form1Validation.birth.setAttribute("class", "success")
  warningAccesBirth.style.setProperty("visibility","hidden")
  warningAccesBirth.style.setProperty("opacity","0")
}
})


let warningAccesBirth = document.querySelector("#birth .warning")
let validateDate = new Date (2002, 01, 01)

const date = '2002-01-01'

form1Validation.birth.addEventListener('input',(e)=>{
    e.preventDefault();
  
    if ($date.test(e.target.value)){
      form1Validation.birth.setAttribute("class", "success")
      warningAccesBirth.style.setProperty("visibility","hidden")
      warningAccesBirth.style.setProperty("opacity","0")
    }
    else {
      form1Validation.birth.setAttribute("class", "error")
      warningAccesBirth.textContent="Solo se pueden dijitar letras, con una longitud de 10 a 50 caracteres."
      warningAccesBirth.style.setProperty("visibility","visible")
      warningAccesBirth.style.setProperty("opacity","1")
    }
  })

*/

const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const CURRENT_YEAR = new Date().getFullYear()

const validateDate = (birthDate) => {
  if (!birthDate.match(DATE_REGEX)) {
    return false
  }

  const day = parseInt(birthDate.split('/')[0])
  const month = parseInt(birthDate.split('/')[1])
  const year = parseInt(birthDate.split('/')[2])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    return false
  }

  if (year > CURRENT_YEAR) {
    return false
  }
  return true

}

const validateForm = event => {
  event.preventDefault();
  const date = document.querySelector('.input').value;
  const validationMessage = document.querySelector('.validation-message');
  if(validateDate(date)) {
    validationMessage.classList.add("success");
    validationMessage.innerHTML='¡Fecha válida!';
  } else {
    validationMessage.classList.add("error");
    validationMessage.innerHTML='¡Fecha  no válida!';
  }
}

document.querySelector(".form").addEventListener('submit', validateForm);



//---------------------------------------------------------------------

let warningAccesEmail = document.querySelector("#email .warning")

form1Validation.fieldEmail.addEventListener('input',(e)=>{
    e.preventDefault();
  
    if ($email.test(e.target.value)){
      form1Validation.fieldEmail.setAttribute("class", "success")
      warningAccesEmail.style.setProperty("visibility","hidden")
      warningAccesEmail.style.setProperty("opacity","0")
    }
    else {
      form1Validation.fieldEmail.setAttribute("class", "error")
      warningAccesEmail.textContent="Asegurese de que el email contenga @misena.edu.co"
      warningAccesEmail.style.setProperty("visibility","visible")
      warningAccesEmail.style.setProperty("opacity","1")
    }
  })

//---------------------------------------------------------------------

let warningAccesPassword = document.querySelector("#password .warning")

form1Validation.fieldPassword.addEventListener('input',(e)=>{
    e.preventDefault();
  
    if ($password.test(e.target.value)){
      form1Validation.fieldPassword.setAttribute("class", "success")
      warningAccesPassword.style.setProperty("visibility","hidden")
      warningAccesPassword.style.setProperty("opacity","0")
    }
    else {
      form1Validation.fieldPassword.setAttribute("class", "error")
      warningAccesPassword.textContent="la contraseña debe incluir al menos un número, una letra minúscula, una letra mayúscula y al menos un carácter especial. Debe ser de 10 caracteres de largo."
      warningAccesPassword.style.setProperty("visibility","visible")
      warningAccesPassword.style.setProperty("opacity","1")
    }
  })

//---------------------------------------------------------------------------------------------

let warningAccesConfirmPassword = document.querySelector("#confirmPassword .warning")

let password1 = document.getElementById("fieldPassword").value
let confirmPassword1 = document.getElementById("fieldConfirmPassword").value

form1Validation.fieldConfirmPassword.addEventListener('input',(e)=>{
    e.preventDefault();

    alert(password1)
    alert(confirmPassword1)
  
    if (password1 !== confirmPassword1){
      form1Validation.fieldConfirmPassword.setAttribute("class", "error")
      warningAccesConfirmPassword.textContent="Las contraseñas no coinciden."
      warningAccesConfirmPassword.style.setProperty("visibility","visible")
      warningAccesConfirmPassword.style.setProperty("opacity","1")

      let passwordValid = false
    }

    else {
      form1Validation.fieldConfirmPassword.setAttribute("class", "success")
      warningAccesConfirmPassword.style.setProperty("visibility","hidden")
      warningAccesConfirmPassword.style.setProperty("opacity","0")

      let passwordValid = true
    }
  })

//---------------------------------------------------------------------------------------------
let warningChechTerms = document.querySelector("#checkTerms .warning")

if(document.getElementById('checkboxTerms').checked == false){
  form1Validation.checkboxTerms.setAttribute("class", "error")
  warningChechTerms.textContent="Debes aceptar los terminos y condiciones."
  warningChechTerms.style.setProperty("visibility","visible")
  warningChechTerms.style.setProperty("opacity","1")

  let checkboxTerms = false
}

else {
  form1Validation.checkboxTerms.setAttribute("class", "success")
  warningChechTerms.style.setProperty("visibility","hidden")
  warningChechTerms.style.setProperty("opacity","0")

  let checkboxTerms = true
}

//---------------------------------------------------------------------------------------------

function openUseTerms(){
  document.querySelector(".modalWindowUseTerms").style.display="block"
}

function closeUseTerms(){
  document.querySelector(".modalWindowUseTerms").style.display="none"
}

//---------------------------------------------------------------------------------------------

function enviarFormulario(){
  
    e.preventDefault();

    const numberIDEmpty = numberID.fieldNumberID.value
    const nameEmpty = namme.fieldNamme.value
    const lastNameEmpty = lastName.fieldLastName.value
    const birthEmpty = birth.birthDate.value
    const emailEmpty = email.fieldEmail.value
    const passwordEmpty = password.fieldPassword.value
    const confirmPasswordEmpty = confirmPassword.fieldConfirmPassword.value

    if(numberIDEmpty == null){
      if(numberIDEmpty == 0){
        numberID.fieldNumberID.focus()
        numberID.fieldNumberID.setAttribute("class", "error")
      }
    }

    else if (nameEmpty == null || nameEmpty == 0){
        namme.fieldNamme.focus()
        namme.fieldNamme.setAttribute("class", "error")
    }

    else if (lastNameEmpty == null || lastNameEmpty == 0){
        lastName.fieldLastName.focus()
        lastName.fieldLastName.setAttribute("class", "error")
    }

    else if (birthEmpty == null || birthEmpty == 0 || birthEmpty < Date('2002 01 01')){
        birth.birthDate.focus()
        birth.birthDate.setAttribute("class", "error")
    }

    else if (emailEmpty == null || emailEmpty == 0){
        email.fieldEmail.focus()
        email.fieldEmail.setAttribute("class", "error")
    }

    else if (passwordEmpty == null || passwordEmpty == 0){
      password.fieldPassword.focus()
      password.fieldPassword.setAttribute("class", "error")
    }

    else if (confirmPasswordEmpty == null || confirmPasswordEmpty == 0){
      confirmPassword.fieldConfirmPassword.focus()
      confirmPassword.fieldConfirmPassword.setAttribute("class", "error")
    }

    else if (passwordValid == false){
      alert("Las contraseñas no coinciden.")
    }

    else if (checkboxTerms == false){
      alert("Debes aceptar los terminos y condiciones")
    }

    else{
        form1Validation.onsubmit()
        alert("datos enviados")
    }
}