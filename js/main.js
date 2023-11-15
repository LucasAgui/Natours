////////////////////////////////////////
// NAVEGACIÓN MOBILE

let navOpen = 0;
const navToggle = document.querySelector('.navigation__button');
const navCheck = document.querySelector('.navigation__checkbox');
const navList = document.querySelector('.navigation__list');
navToggle.addEventListener('click', function () {
	if (!navOpen) {
		navOpen = 1;
	} else {
		navOpen = 0;
	}
});

navList.addEventListener('click', function () {
	navOpen = 0;
	if (!navOpen) {
		navCheck.checked = false;
	}
});

/////////////////////////////////////////////////////////////////////
//Smooth scrolling for all links
document.addEventListener('DOMContentLoaded', function () {
	// Selecciona todos los enlaces que comienzan con #
	var links = document.querySelectorAll('a[href^="#"]');

	links.forEach(function (link) {
		link.addEventListener('click', function (event) {
			var targetId = this.getAttribute('href').substring(1);
			var target = document.getElementById(targetId);

			if (target) {
				console.log(target.id);
				event.preventDefault();

				// Obtiene la posición del elemento en relación con la parte superior de la página
				var rect = target.getBoundingClientRect();

				// Ajusta el cálculo considerando el espacio adicional (margin-top) en el elemento de destino
				var offsetTop =
					rect.top +
					window.scrollY -
					document.querySelector('.header').offsetHeight;

				// Ajusta también para el espacio adicional (margin-top) en el elemento de destino
				var marginTop = window.getComputedStyle(target).marginTop;
				offsetTop -= parseFloat(marginTop);

				// Realiza la animación de desplazamiento suave
				scrollToOffset(offsetTop, 1000);
			}
		});
	});

	// Función para realizar el desplazamiento suave
	function scrollToOffset(offset, duration) {
		var start = window.pageYOffset;
		var startTime =
			'now' in window.performance ? performance.now() : new Date().getTime();

		function scroll() {
			var currentTime =
				'now' in window.performance ? performance.now() : new Date().getTime();
			var timeElapsed = currentTime - startTime;
			var progress = Math.min(timeElapsed / duration, 1);

			window.scrollTo(0, easeInOutCubic(start, offset, progress));

			if (timeElapsed < duration) {
				requestAnimationFrame(scroll);
			}
		}

		function easeInOutCubic(start, end, progress) {
			progress /= 0.5;
			if (progress < 1)
				return ((end - start) / 2) * progress * progress * progress + start;
			progress -= 2;
			return ((end - start) / 2) * (progress * progress * progress + 2) + start;
		}

		requestAnimationFrame(scroll);
	}
});

/////////////////////////////////////////////////////////////////////
// Funcionalidad Popup

const linksPopup = document.querySelectorAll('a[href^="#popup"]');
const popupEl = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

linksPopup.forEach(function (link) {
	link.addEventListener('click', function () {
		popupEl.classList.toggle('active');
	});
});

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		popupEl.classList.remove('active');
	}
});

popupClose.addEventListener('click', function () {
	popupEl.classList.remove('active');
});

// /////////////////////////////////////////////////////////////////////
// //Cambiar Idioma

const flagsEl = document.getElementById('flags');

flagsEl.addEventListener('click', function () {
	flagsEl.classList.toggle('open');
});
