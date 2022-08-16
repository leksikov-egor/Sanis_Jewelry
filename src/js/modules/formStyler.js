import Choices from "choices.js";

const formStyler = () => {
    const element = document.querySelector('.catalog__sorting-select');
    if (element != null) {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            allowHTML: false,
        });
    }
};

export default formStyler;