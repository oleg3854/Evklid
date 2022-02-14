
const burger = document.querySelector('#burger');
const burgerList = document.querySelector('#burger__list');
const burgerClose = document.querySelector('#burger_close');

burger.addEventListener('click', function() {
	// Меню выдвигается при нажатии на бургер 
	burgerList.classList.toggle('burger__list_active');
	// Бургер превращается в крестик, при нажатии на него
	burger.classList.toggle('burger_active');
});

burgerClose.addEventListener('click', function() {
	// При нажатии на крестик в вылезающем меню, крестик(в блоке Header) становится бургером
	burger.classList.remove('burger_active');
	// При нажатии на крестик в вылезающем меню, меню прячется
	burgerList.classList.remove('burger__list_active');
});
