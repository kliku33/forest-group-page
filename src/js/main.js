const navBtn = document.querySelector('.nav-btn')
const nav = document.querySelector('.nav-small')
const navItems = document.querySelectorAll('.nav-item-small')
const footerYear = document.querySelector('.footer-year')
const arrow = document.querySelector('.arrow')

const showNav = () => {
    nav.classList.toggle('nav-active')

    navBtnPosition()
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

function showArrow() {
    if (window.scrollY >= 90) {
        arrow.classList.add('arrow-show')
    } else {
        arrow.classList.remove('arrow-show')
    }
}

const navBtnPosition = () => {
    if(nav.classList.contains('nav-active')) {
        navBtn.style.position = 'fixed'
    } else {
        navBtn.style.position = 'absolute'
    }
}

handleCurrentYear();

navItems.forEach(navItem => navItem.addEventListener('click', showNav))

navBtn.addEventListener('click', showNav)
window.addEventListener('scroll', showArrow)