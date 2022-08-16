const mobileFilter = () => {
    const filterMenu = document.querySelector('.catalog__filter');
    const triggerBtn = document.querySelector('.catalog__mobile-filter');
    const closeBtn = document.querySelector('.catalog__close-btn');
    const applyBtn = document.querySelector('.catalog__filter-btn');
    const resetBtn = document.querySelector('.catalog__filter-btn--reset');
    const checkboxInput = document.querySelectorAll('.catalog__checkbox-input');



    triggerBtn.addEventListener('click', () => {
        filterMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        filterMenu.classList.remove('active');
    });

    applyBtn.addEventListener('click', () => {
        filterMenu.classList.remove('active');
    });

    resetBtn.addEventListener('click', () => {
        checkboxInput.forEach(function (item) {
            item.checked = false;
        });
    });

};

export default mobileFilter;