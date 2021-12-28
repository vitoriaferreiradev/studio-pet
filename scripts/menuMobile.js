const menu = document.getElementById('menu-mobile').children[0]
const navbar = document.getElementById('navbar')

menu.onclick = function showMenu() {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = function hideMenu() {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}