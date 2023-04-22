window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const close = menu.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })

    menu.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('menu__overlay')) {
            menu.classList.remove('active');
        }
    })
})