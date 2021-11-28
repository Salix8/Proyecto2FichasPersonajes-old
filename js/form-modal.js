
window.addEventListener(`load`, ()=>{
  // Get the modalLogin
  var idLogin = document.getElementById(`id_login`);
  // Get the modalSingUp
  var idSingUp = document.getElementById(`id_sign_up`);

  idLogin.addEventListener(`click`, ()=> {
    login(this);
  });

  idSingUp.addEventListener(`click`, ()=>{
    signUp(this);
  });

  document.getElementById(`btn_login`).addEventListener(`click`, ()=>{
    displayBlock(idLogin);
  });

  document.getElementById(`btn_sign_up`).addEventListener(`click`, ()=>{
    displayBlock(idSingUp);
  });



  /*###############################################################################*/
  /*###############################################################################*/
  /*###############################################################################*/
  
  document.getElementsByClassName(`close__login`).addEventListener(`click`, ()=>{
    displayNone(idLogin);
  });

  document.getElementsByClassName(`close__login`).onclick = function() {
    document.getElementById('id_login').style.display = `none`;
  };

  /*###############################################################################*/
  /*###############################################################################*/
  /*###############################################################################*/
    
});


function login(modalLogin) {
  //Cuando el usuario haga click en algun lugar fuera del modalLogin, se cierra
  if (target == modalLogin) {
    modalLogin.style.display = `none`;
  }
}

function signUp(modalSingUp) {
  //Cuando el usuario haga click en algun lugar fuera del modalSingUp, se cierra
  if (target == modalSingUp) {
    modalSingUp.style.display = `none`;
  }
}

function displayBlock(params) {
  params.style.display=`block`;
}

function displayNone(params) {
  params.style.display=`none`;
}