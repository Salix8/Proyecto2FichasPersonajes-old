<nav>
    <ul>
        <li><i class="fas fa-home"></i><a href="https://docs.google.com/document/d/1ErwHbixwTGKCv8_zN-a0mIzYOPpY2IuX1za58MlD2FA/edit?usp=sharing" target="_blank">Personajes</a></li>
        <li><i class="fas fa-hat-wizard"></i><a href="https://5e.tools/classes.html" target="_blank">Clases</a></li>
        <li><i class="fas fa-magic"></i><a href="https://5e.tools/spells.html" target="_blank">Conjuros</a></li>
        <li><i class="fas fa-broom"></i><a href="https://5e.tools/items.html" target="_blank">Items</a></li>
        <li><i class="fab fa-d-and-d"></i><a href="https://5e.tools/index.html" target="_blank">5etools</a></li>
        <li><button id="btn_login">Login</button></li>
        <li><button id="btn_sign_up">Sign Up</button></li>
    </ul>		

    <div id="progress_bar_container">
        <div id="progress_bar"></div>
    </div>  
</nav>

<!-- Falta Cambiar las funciones de js -->

<div id="id_login" class="modal">
    <form class="modal__content animate" action="#" method="post">
        <div class="img__container">
            <span id="close_modal" class="close close__login" title="Close Modal">&times;</span>
            <img src="./img/dado20.PNG" alt="Avatar" class="avatar">
        </div>
    
        <div class="container__login">
            <label for="uname"><b>Username</b></label>
            <input type="text" class="entrada entrada__text__login" placeholder="Enter Username" name="uname" required>
    
            <label for="psw"><b>Password</b></label>
            <input type="password" class="entrada entrada__psw__login" placeholder="Enter Password" name="psw" required>
            
            <button class="btn btn__login" type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>
    
        <div class="container__send clearfix">
        <button type="button" onclick="document.getElementById('id_login').style.display='none'" class="btn btn__cancel__login">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>
</div>
<div id="id_sign_up" class="modal">
    
    <form class="modal__content animate" action="#">
        
        <div class="container__sing__up">
            <div class="">
                <div class="">
                    <h1>Sign Up</h1><br>
                <p>Please fill in this form to create an account.</p><br>
                </div>
                <span onclick="document.getElementById('id_sign_up').style.display='none'" style="display: block;" class="close close__login" title="Close Modal">&times;</span>
            </div>
            
            <hr>
            <label for="email"><b>Email</b></label>
            <input type="text" class="entrada entrada__email__sign_up" placeholder="Enter Email" name="email" required>
    
            <label for="psw"><b>Password</b></label>
            <input type="password" class="entrada entrada__psw__sign_up" placeholder="Enter Password" name="psw" required>
    
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" class="entrada entrada__psw__repeat__sign_up" placeholder="Repeat Password" name="psw-repeat" required>
            
            <label>
                <input type="checkbox" checked="checked" class="checkbox__sign__up" name="remember"> Remember me
            </label>
    
            <p>By creating an account you agree to our <a href="#" class="blue__sing__up">Terms & Privacy</a>.</p>
        </div>

        <div class="container__send clearfix">
            <button type="button" onclick="document.getElementById('id_sign_up').style.display='none'" class="btn cancel__sign__up">Cancel</button>
            <button type="submit" class="btn btn__sign__up">Sign Up</button>
        </div>
    </form>
</div>

<div class="clearfix"></div>