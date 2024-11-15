document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const rightMenu = document.querySelector('.right');

    hamburger.addEventListener('click', () => {
        rightMenu.classList.toggle('show');
    });
});
