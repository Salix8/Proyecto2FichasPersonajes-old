<?php
  include __DIR__ . "/partials/inicio-doc.part.php";
  include __DIR__ . "/partials/nav.part.php";
?>

		

		<!-- Falta Cambiar las funciones de js -->

		<div id="id_login" class="modal">
			<form class="modal__content animate" action="#" method="post">
				<div class="img__container">
					<span onclick="document.getElementById('id_login').style.display='none'" class="close close__login" title="Close Modal">&times;</span>
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
			<span onclick="document.getElementById('id_sign_up').style.display='none'" class="close close__sign__up" title="Close Modal">&times;</span>
			<form class="modal__content animate" action="#">
				<div class="container__sing__up">
					<h1>Sign Up</h1><br>
					<p>Please fill in this form to create an account.</p><br>
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

		<div class="container">

			<div class="card">
				<div class="card__title"><a href="https://docs.google.com/document/d/13GkyAqg6Wc6tse7WXPV6Tzzg3n8UQT8IF-K-zfKH4ao/edit?usp=sharing" target="_blank">Neo</a></div>
                <div class="card__center">
                    <div class="card__img">
                    	<div class="slideshow-container">
						  <div class="mySlides fade">
						    <div class="numbertext">1 / 3</div>
						    <img src="./img/NeoCambiante.png" style="max-width:200px">
						    <div class="text">Neo cambiante</div>
						  </div>
						  <div class="mySlides fade">
						    <div class="numbertext">2 / 3</div>
						    <img src="./img/NeoHabitual.jpg" style="max-width:200px">
						    <div class="text">Neo habitual</div>
						  </div>
						  <div class="mySlides fade">
						    <div class="numbertext">3 / 3</div>
						    <img src="./img/NeoCuervo.jpg" style="max-width:200px">
						    <div class="text">Neo con cuervo</div>
						  </div>
						  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
						  <a class="next" onclick="plusSlides(1)">&#10095;</a>
						</div>
						<br>
						<div style="text-align:center">
						  <span class="dot" onclick="currentSlide(1)"></span> 
						  <span class="dot" onclick="currentSlide(2)"></span> 
						  <span class="dot" onclick="currentSlide(3)"></span> 
						</div>
                    </div>
                    <div class="card__stats grid__container__neo">
						
					</div>
                </div>
                <div class="caracteristicas__neo"></div>
                <div class="card__text__neo"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>

			<div class="card">
				<div class="card__title"><a href="https://docs.google.com/document/d/1GAYorUbVvZCwKEwInKxms-s-kzE4TzBzR1BZtwiZN1A/edit#heading=h.y0sp2hoi9gj8" target="_blank">Noah</a></div>
                <div class="card__center">
                    <div class="card__img"><a href="https://docs.google.com/document/d/1GAYorUbVvZCwKEwInKxms-s-kzE4TzBzR1BZtwiZN1A/edit#heading=h.y0sp2hoi9gj8" target="_blank"><img src="./img/NoahCambiante.png" title="Noah" alt="Noah" width= "240"/></a></div>
                    <div class="card__stats grid__container__noah"></div>
                </div>
                <div class="card__text__noah"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>
		</div>
		
		<div class="container">

			<div class="card">
				<div class="card__title"><a href="" target="_blank">Azrael</a></div>
                <div class="card__center">
                    <div class="card__img"><a href="" target="_blank"><img src="./img/NeoCambiante.png" title="Azrael" alt="Azrael" width= "240"/></a></div>
                    <div class="card__stats grid__container__azrael"></div>
                </div>
                <div class="card__text__azrael"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>

			<div class="card">
				<div class="card__title"><a href="" target="_blank">Can-Ek</a></div>
                <div class="card__center">
                    <div class="card__img"><a href="" target="_blank"><img src="./img/NeoCambiante.png" title="Can-Ek" alt="Can-Ek" width= "240"/></a></div>
                    <div class="card__stats grid__container__canek"></div>
                </div>
                <div class="card__text__canek"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>

		</div>

		<div class="container">

			<div class="card">
				<div class="card__title"><a href="" target="_blank">Torinn</a></div>
                <div class="card__center">
                    <div class="card__img"><a href="" target="_blank"><img src="./img/NeoCambiante.png" title="Torinn" alt="Torinn" width= "240"/></a></div>
                    <div class="card__stats grid__container__torinn"></div>
                </div>
                <div class="card__text__torinn"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>

			<div class="card">
				<div class="card__title"><a href="" target="_blank">Alucard</a></div>
                <div class="card__center">
                    <div class="card__img"><a href="" target="_blank"><img src="./img/AlucardHabitual.jpg" title="Alucard" alt="Alucard" width= "240"/></a></div>
                    <div class="card__stats grid__container__alucard"></div>
                </div>
                <div class="card__text__alucard"></div>
                <div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
			</div>

		</div>

		<script src="./js/codigo.js"></script>
	</body>
</html>
