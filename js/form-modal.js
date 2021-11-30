
window.addEventListener(`load`, ()=>{
  // Get the modalLogin
  var idLogin = document.getElementById(`id_login`);
  // Get the modalSingUp
  var idSingUp = document.getElementById(`id_sign_up`);

  idLogin.addEventListener(`click`, ()=>{
    displayNone(this);
  });

  idSingUp.addEventListener(`click`, ()=>{
    displayNone(this);
  });

  document.getElementById(`btn_login`).addEventListener(`click`, ()=>{
    displayBlock(idLogin);
  });

  document.getElementById(`btn_sign_up`).addEventListener(`click`, ()=>{
    displayBlock(idSingUp);
  });

  document.getElementById(`close_modal`).addEventListener(`click`, ()=>{
    displayNone(idLogin); 
  });
    
});


function login(event, modalLogin) {
  //Cuando el usuario haga click en algun lugar fuera del modalLogin, se cierra
  if (event.target == modalLogin) {
    modalLogin.style.display = `none`;
  }
}

function signUp(event, modalSingUp) {
  //Cuando el usuario haga click en algun lugar fuera del modalSingUp, se cierra
  if (event.target == modalSingUp) {
    modalSingUp.style.display = `none`;
  }
}

function displayBlock(params) {
  params.style.display=`block`;
}

function displayNone(params) {
  params.style.display=`none`;
}