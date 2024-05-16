//Esto corresponde al Header
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}



//Esto corresponde al login y registro
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnPopup2 = document.querySelector(".btnLogin-popup2");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

btnPopup2.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});



//Esto corresponde al formulario de contacto
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//Esto corresponde a la Validación para campos obligatorios del form
function validarFormulario() {
  // Obtener los valores de los campos
  var nombre = document.getElementById("usernameInput").value;
  var email = document.getElementById("emailInput").value;
  var telefono = document.getElementById("phoneInput").value;
  var mensaje = document.getElementById("messageInput").value;

  // Validar que los campos obligatorios no estén vacíos
  if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || mensaje.trim() === '') {
    alert("Por favor, completa todos los campos obligatorios.");
    return false; // Evitar que se envíe el formulario
  }

  // Validar el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false; // Evitar que se envíe el formulario
  }

  // Validar el formato del número de teléfono
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(telefono)) {
    alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
    return false; // Evitar que se envíe el formulario
  }

  // Si todas las validaciones pasan, permitir el envío del formulario
  return true;
}

