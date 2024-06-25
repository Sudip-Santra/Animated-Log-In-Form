function toggleIcon(inputId,iconId,event) {
  var inputId = document.getElementById(inputId);
  var iconId = document.getElementById(iconId);
  
  if (inputId.value === "" && event.key == "Backspace"){
    iconId.style.display = "block";
  } else {
    iconId.style.display = "none";
  }
}

const password = document.getElementById('inputField2');
const toggle = document.getElementById('LoginShowPassword');
function LoginShowHide(){
  if(password.type=== 'password'){
      password.setAttribute( 'type', 'text' );
      toggle.classList.add('hide');
  }
  else{
    password.setAttribute( 'type', 'password' );
    toggle.classList.remove('hide');
  }
}

const setPassword = document.getElementById('inputField5');
const Toggle = document.getElementById('RegisterShowPassword');
function RegisterShowHide(){
  if(setPassword.type=== 'password'){
      setPassword.setAttribute( 'type', 'text' );
      Toggle.classList.add('hide');
  }
  else{
    setPassword.setAttribute( 'type', 'password' );
    Toggle.classList.remove('hide');
  }
}
