const spoiler = (trigger, wrapper) => {
    const btnTriggers = document.querySelectorAll(trigger);


    btnTriggers.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const self = e.currentTarget;
            const content = self.parentElement.querySelector(wrapper);
            
            self.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
};

export default spoiler;