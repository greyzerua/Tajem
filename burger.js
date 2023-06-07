
let menuBtnHeader = document.querySelector('.menu-btn-header');
let menu = document.querySelector('.menu');

let body = document.body;

const toggleBurgerMenu = () => {
	menuBtnHeader.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('menu-opened');
};

menuBtnHeader.addEventListener('click', toggleBurgerMenu);

