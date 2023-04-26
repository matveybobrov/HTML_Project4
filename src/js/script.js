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
        if (target && (target.classList.contains('menu__overlay') || target.parentNode.classList.contains('menu__link'))) {
            console.log(target);
            menu.classList.remove('active');
        }
    })

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
    });
})