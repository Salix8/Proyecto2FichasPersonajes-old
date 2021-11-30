<?php
  include __DIR__ . "/partials/inicio-doc.part.php";
  include __DIR__ . "/partials/nav.part.php";
?>

	<h1 id="auto_title"></h1>

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
				<div class="card__stats grid__container__neo"></div>
			</div>
			<div>
				<div class="caracteristicas__neo"></div>
				<div class="card__text__neo"></div>
			</div>
			<div><textarea type="text" class="card__textarea" placeholder="Notas"></textarea></div>
		</div>

		<div class="card">
			<div class="card__title"><a href="https://docs.google.com/document/d/1GAYorUbVvZCwKEwInKxms-s-kzE4TzBzR1BZtwiZN1A/edit#heading=h.y0sp2hoi9gj8" target="_blank">Noah</a></div>
			<div class="card__center">
				<div class="card__img"><a href="https://docs.google.com/document/d/1GAYorUbVvZCwKEwInKxms-s-kzE4TzBzR1BZtwiZN1A/edit#heading=h.y0sp2hoi9gj8" target="_blank"><img src="./img/NoahCambiante.png" title="Noah" alt="Noah" width= "240"/></a></div>
				<div class="card__stats grid__container__noah"></div>
			</div>
			<div>
				<div class="caracteristicas__noah"></div>
				<div class="card__text__noah"></div>
			</div>
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
