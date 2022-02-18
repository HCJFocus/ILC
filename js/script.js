let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.getElementById('body');
burger.addEventListener('click', function (e) {
    body.classList.toggle('lock');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

let connect = document.querySelector('.header__connection');
let connectLinks = document.querySelector('.header__items-two');
let connectPhone = document.querySelector('.connect-number');
let connectBtn = document.querySelector('.connect-btn');;
connect.addEventListener('click', function () {
    connectLinks.classList.toggle('active');
    connectPhone.style.display = 'block';
    connectBtn.style.display = 'block';
})