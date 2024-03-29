// nawigacja i footer
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const homeBtn = document.querySelector('.home-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNamItemsAnimation();
}

const removeNav = () => {
    nav.classList.remove('nav--active');
}

const handleNamItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
homeBtn.addEventListener('click', removeNav);

// wjeżdzanie komponentów

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

window.addEventListener('scroll', revealFromLeft);
window.addEventListener('scroll', revealFromRight);
window.addEventListener('scroll', revealFromDown);

// mail
const msgStatus = document.querySelector('.msg-status');

if (document.location.search === '?mail_status=sent') {
    msgStatus.classList.add('success')
    msgStatus.textContent = 'Wiadomość wysłana!'

    setTimeout(() => {
        msgStatus.classList.remove('success')
    }, 3000);
}

if (document.location.search === '?mail_status=error') {
    msgStatus.classList.add('error')
    msgStatus.textContent = 'Wystąpił błąd.'

    setTimeout(() => {
        msgStatus.classList.remove('error')
    }, 3000);
}

// cookies
const setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.querySelector('.cookies__box-btn').addEventListener('click', () => {
    document.querySelector('.cookies').style.display = "none";
    setCookie("cookie", true, 30);
});

const cookieMsg = () => {
    if (!getCookie("cookie"))
        document.querySelector('.cookies').style.display = "block";
}

window.addEventListener("load", cookieMsg);
