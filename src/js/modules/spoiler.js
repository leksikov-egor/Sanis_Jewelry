const spoiler = () => {
    const btnTrigger = document.querySelector('.header__top-menu-item--ghost');
    const content = document.querySelector('.header__mobile-catalog');

    btnTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        btnTrigger.classList.toggle('active');
        content.classList.toggle('active');
    });
};

export default spoiler;