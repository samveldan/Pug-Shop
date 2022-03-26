class RangeSlider {
    constructor(slider) {
        this.slider = slider;
        this.inputs = this.slider.querySelectorAll("input");
        this.first = this.inputs[0];
        this.second = this.inputs[1];

        this.stopInputsMoving();
    }

    stopInputsMoving() {
        let firstValue = parseInt(this.first.value);
        let secondValue = parseInt(this.second.value);

        this.second.addEventListener("input", () => {
            secondValue = parseInt(this.second.value);

            if(secondValue - 1000 <= firstValue) {
                this.second.value = parseInt(this.first.value) + 1000;
            }
            this.showValues(2, this.second.value);
        });
        this.first.addEventListener("input", () => {
            firstValue = parseInt(this.first.value);

            if(firstValue >= secondValue - 1000) {
                this.first.value = parseInt(this.second.value) - 1000;
            }
            this.showValues(1, this.first.value);
        });
    }

    showValues(which, value) {
        let prices = this.slider.querySelector(".range-slider__price");
        let firstSpan = prices.firstElementChild;        
        let lastSpan = prices.lastElementChild;        

        if(which == 1) {
            firstSpan.innerText = value + "P";
        }
        else {
            lastSpan.innerText = value + "P";
        }
    }
}

let slider = document.querySelector(".range-slider");
sliderOne = new RangeSlider(slider);