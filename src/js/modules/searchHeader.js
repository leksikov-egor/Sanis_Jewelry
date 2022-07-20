const searchHeader = () => {
    const search = document.querySelector('.header__mid-moveitem--ghost');
    const closeBox = document.querySelector('.header__mid-container');

    search.addEventListener('click', (e) => {
        e.stopPropagation();
        search.classList.add('active');
    });

    closeBox.addEventListener('click', () => {
        search.classList.remove('active');
    });
};

export default searchHeader;