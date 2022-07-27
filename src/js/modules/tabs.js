const tabs = () => {
    const tabsBtn = document.querySelectorAll('.map-tabs__nav-btn');
    const tabsItems = document.querySelectorAll('.map-tabs__content-item');

    tabsBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                });
    
                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });            
    
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
    });
};


export default tabs;