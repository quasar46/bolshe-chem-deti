

// custome code
document.addEventListener('DOMContentLoaded', function () {
	var scroll = new SmoothScroll('a[href*="#"]', {
		header: 'header',
	});

	const swiper = new Swiper('.main-slider', {
		spaceBetween: 20,
		pagination: {
			el: '.main-slider .swiper-pagination',
		},

		navigation: {
			nextEl: '.main-slider .swiper-button-next',
			prevEl: '.main-slider .swiper-button-prev',
		},
	});

	const swiper2 = new Swiper('.swiper-teachers', {
		spaceBetween: 29,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-teachers .swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-teachers .swiper-button-next',
			prevEl: '.swiper-teachers .swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}
	});

	const swiper3 = new Swiper('.swiper-gallery-interior', {
		spaceBetween: 34,
		slidesPerView: 1,
		grid: {
			rows: 1,
			fill: "row",
		},
		pagination: {
			el: '.swiper-gallery-interior .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-gallery-interior .swiper-button-next',
			prevEl: '.swiper-gallery-interior .swiper-button-prev',
		},
		breakpoints: {
			650: {
				slidesPerView: 2,
				grid: {
					rows: 1,
					fill: "row",
				},
			},
			768: {
				slidesPerView: 2,
				grid: {
					rows: 2,
					fill: "row",
				},
			},
			1024: {
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: "row",
				},
			},
		}
	})

	const swiper4 = new Swiper('.swiper-gallery-lessons', {
		spaceBetween: 34,
		slidesPerView: 1,
		grid: {
			rows: 1,
			fill: "row",
		},
		pagination: {
			el: '.swiper-gallery-lessons .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-gallery-lessons .swiper-button-next',
			prevEl: '.swiper-gallery-lessons .swiper-button-prev',
		},
		breakpoints: {
			650: {
				slidesPerView: 2,
				grid: {
					rows: 1,
					fill: "row",
				},
			},
			768: {
				slidesPerView: 2,
				grid: {
					rows: 2,
					fill: "row",
				},
			},
			1024: {
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: "row",
				},
			},
		}
	})



	const body = document.querySelector('body')
	const menu = document.querySelector('.burger')
	const nav = document.querySelector('.header__aside')
	const overlay = document.querySelector('.overlay')
	menu.addEventListener('click', function () {
		this.classList.toggle('active')
		nav.classList.toggle('active')
		overlay.classList.toggle('active')
		body.classList.toggle('hidden')
	})

	if (document.querySelector('.tabs')) {
		var container = document.querySelector('.tab-container')
		tabs(container);
	}

	const btnOpenFeedback = document.querySelectorAll('.open-feedback')
	const btnCloseFeedback = document.querySelectorAll('.feedback__close')
	const modalFeedback1 = document.querySelector('#popup1')

	const btnOpenFeedback2 = document.querySelectorAll('.open-feedback2')
	const modalFeedback2 = document.querySelector('#popup2')

	const btnOpenFeedback3 = document.querySelectorAll('.open-feedback3')
	const modalFeedback3 = document.querySelector('#popup3')

	btnOpenFeedback.forEach(btn => {
		btn.addEventListener('click', function () {
			modalFeedback1.classList.toggle('active')
			overlay.classList.toggle('active')
			nav.classList.remove('active')
			menu.classList.remove('active')
			body.classList.add('hidden')
		})
	})

	btnOpenFeedback2.forEach(btn => {
		btn.addEventListener('click', function () {
			modalFeedback2.classList.toggle('active')
			overlay.classList.toggle('active')
			nav.classList.remove('active')
			menu.classList.remove('active')
			body.classList.add('hidden')
		})
	})

	btnOpenFeedback3.forEach(btn => {
		btn.addEventListener('click', function () {
			modalFeedback3.classList.toggle('active')
			overlay.classList.toggle('active')
			nav.classList.remove('active')
			menu.classList.remove('active')
			body.classList.add('hidden')
		})
	})

	btnCloseFeedback.forEach(btn => {
		btn.addEventListener('click', function () {
			modalFeedback1.classList.remove('active')
			modalFeedback2.classList.remove('active')
			modalFeedback3.classList.remove('active')
			overlay.classList.remove('active')
			body.classList.remove('hidden')
		})
	})

	Fancybox.bind("[data-fancybox]", {

	});

	[].forEach.call(document.querySelectorAll(".tel"), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___)-___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i);
			}
			var reg = matrix
				.substr(0, this.value.length)
				.replace(/_+/g, function (a) {
					return "\\d{1," + a.length + "}";
				})
				.replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = "";
		}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false);
	});

	const inputsTel = document.querySelectorAll('.tel')

	inputsTel.forEach(input => {
		const btnSubmit = input.closest('.feedback').querySelector('.feedback__submit')
		input.oninput = function () {
			if (input.value.length == 18) {
				btnSubmit.removeAttribute('disabled', '')
			} else {
				btnSubmit.setAttribute('disabled', '')
			}
		}
	})

	const topBtn = document.querySelector(".top-btn");
	topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
	window.onscroll = () => topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;


	let cont = $('#error'),
		text = '404',
		p = 0;

	function printSmbl() {
		let timeout = 400;
		cont.html(cont.html() + text[p]);
		p++;
		if (p < text.length) {
			setTimeout(printSmbl, timeout);
		}
	}
	setTimeout(printSmbl, 300);
})

$(document).ready(function () {
	// самолетик
	function animateBlock(entries, observer) {
		// нужно обработать все, ведь попасть в область просмотра могут несколько блоков
		for (let i = 0; i < entries.length; i++) {
			const $this = $(entries[i].target);
			if (entries[i].isIntersecting) {
				$('.teachers__plain', $this).addClass('animate');
				elemObserver.unobserve(entries[i].target);
			}
		}
	}
	var options = {
		rootMargin: '0px',
		threshold: .2
	}

	let elem = $('.teachers__adv');
	var elemObserver = new IntersectionObserver(animateBlock, options);
	elem.each((i, e) => elemObserver.observe(e));
})
