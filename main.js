let btnMobile = document.getElementById('btnMobile');
let viewMobile = document.getElementById('viewMobile');
let navbar = document.getElementById('navbar');

btnMobile.addEventListener('click', function () {
    navbar.classList.toggle('active');
    viewMobile.classList.toggle('active');
})

viewMobile.addEventListener('click', function () {
    navbar.classList.remove('active');
    viewMobile.classList.remove('active');
})