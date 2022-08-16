const showMore = () => {
    const showMore = document.querySelector('.catalog__show-more');
    const productsLength = document.querySelectorAll('.catalog__good-item').length;
    let items = 12;

    if (showMore != null) {
        showMore.addEventListener('click', () => {
            items += 8;
            const array = Array.from(document.querySelector('.catalog__box-wrapper').children);

            const visItems = array.slice(0, items);

            visItems.forEach(el => el.classList.add('is-visible'));

            if (visItems.length === productsLength) {
                showMore.style.display = 'none';
            }
        });
    }

};

export default showMore;