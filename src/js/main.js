// nawigacja
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const homeBtn = document.querySelector('.home-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNamItemsAnimation();
}

const handleNamItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

navBtn.addEventListener('click', handleNav);
homeBtn.addEventListener('click', handleNav);

// wjeżdzanie komponentów

window.addEventListener('scroll', revealFromLeft);
window.addEventListener('scroll', revealFromRight);
window.addEventListener('scroll', revealFromDown);

function revealFromLeft() {
    const revealsLeft = document.querySelectorAll('.revealFromLeft');

    for (let i = 0; i < revealsLeft.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealsLeft[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            revealsLeft[i].classList.add('showFromLeft');
        }
        else {
            revealsLeft[i].classList.remove('showFromLeft');
        }
    }
}

function revealFromRight() {
    const revealsRight = document.querySelectorAll('.revealFromRight');

    for (let i = 0; i < revealsRight.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealsRight[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            revealsRight[i].classList.add('showFromRight');
        }
        else {
            revealsRight[i].classList.remove('showFromRight');
        }
    }
}

function revealFromDown() {
    const revealsDown = document.querySelectorAll('.revealFromDown');

    for (let i = 0; i < revealsDown.length; i++) {

        let windowHeight2 = window.innerHeight;
        let revealTop2 = revealsDown[i].getBoundingClientRect().top;
        let revealPoint2 = 100;

        if (revealTop2 < windowHeight2 - revealPoint2) {
            revealsDown[i].classList.add('showFromDown');
        }
        else {
            revealsDown[i].classList.remove('showFromDown');
        }
    }
}