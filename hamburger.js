const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('menu')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)