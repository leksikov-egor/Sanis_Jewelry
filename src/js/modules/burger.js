const burger = () => {
    const burgerBtn = document.querySelector('.header__mid-burger');
    const burgerMenu = document.querySelector('.header__top');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
};

export default burger;