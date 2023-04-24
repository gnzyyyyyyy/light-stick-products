// Change Nav style on scroll
window.addEventListener('scroll', () => {
	document.querySelection('nav').classlist.toogle('window-scrolled',window.scrollY > 0);
})

// CONTACT BUTTON (Circular Text Buttons)
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
	let text = textButton.querySelector('p');

	text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})


// SWIPER JS (gallery section)

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		599: {
			slidesPerView: 2,
			spaceBetween: 40
		},
		1023: {
			slidesPerView: 3,
			spaceBetween: 60
		}
	}
});

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');

const openNav = () => {
	nav.style.display = 'flex';
	openNavBtn.style.display = 'none';
	closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
	nav.style.display = 'none';
	openNavBtn.style.display = 'inline-block';
	closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);