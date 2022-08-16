import * as noUiSlider from 'noUiSlider/dist/nouislider.js';


const rangeSlider = () => {
    const range = document.getElementById('range-slider');
    const resetBtn = document.querySelector('.catalog__filter-btn--reset');

    if (range != null) {
        noUiSlider.create(range, {
            start: [10000, 1100000],
            step: 10,
            connect: true,
            range: {
                'min': [10000],
                'max': [1100000]
            }
        });
    
        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];
    
        range.noUiSlider.on('update', function(values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        }); 
    
        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
    
            range.noUiSlider.set(arr);
        };
    
        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
};

export default rangeSlider;