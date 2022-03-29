class Slider {
    constructor(slider, options) {
        this.slider = slider;
        this.options = options;
        this.leftArrow = this.slider.querySelector(".left");
        this.rightArrow = this.slider.querySelector(".right");
        this.slidesBlock = this.slider.querySelector(".slides");
        this.slides = Array.from(this.slidesBlock.querySelectorAll("div"));
        this.dots = Array.from(this.slider.querySelectorAll(".dots div"));

        this.currentSlide = this.slider.querySelector(".active");
        this.prevSlide = this.currentSlide.previousElementSibling || this.slides[this.slides.length - 1];
        this.nextSlide = this.currentSlide.nextElementSibling || this.slides[0];

        this.moveSlides();
        this.useDots();
    }

    moveSlides() {
        let width = 271;
        let maxWidth = this.countSlides() * width;
        let offset = 0;

        this.leftArrow.addEventListener("click", (e) => {
            if(offset <= 0) {
                offset = maxWidth - width;
            }
            else {
                offset -= width;
            }

            this.slidesBlock.style.right = offset + "px";
            this.setClasses("left");

        });

        this.rightArrow.addEventListener("click", (e) => {
            if(offset >= maxWidth - width) {
                offset = 0;
            }
            else {
                offset += width;
            }

            this.slidesBlock.style.right = offset + "px";
            this.setClasses("right");
        });
    }

    clearActive(elements) {
        elements.forEach(element => {
            element.classList.remove("active");
        });
    }

    setClasses(side) {
        this.clearActive(this.slides);
        this.clearActive(this.dots);

        if(side == "left") this.prevSlide.classList.add("active");
        else this.nextSlide.classList.add("active");

        this.currentSlide = this.slider.querySelector(".active");
        this.prevSlide = this.currentSlide.previousElementSibling || this.slides[this.slides.length - 1];
        this.nextSlide = this.currentSlide.nextElementSibling || this.slides[0];

        this.dots.forEach(dot => {
            if(this.currentDataSlide() == dot.dataset.slider) {
                dot.classList.add("active");
            }
        });
    }

    currentDataSlide() {
        let data = this.currentSlide.dataset.slider;
        return data;
    }

    countSlides() {
        let counter = 0;
        
        this.slides.forEach(element => {
            counter += 1;    
        });

        return counter;
    }
    // Доделать
    useDots() {
        this.dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                let currentDot = dot.dataset.slider;
                
                this.slides.forEach((slide) => {
                    if(slide.dataset.slider == currentDot) {
                        slide.classList.add("active");
                    }
                });
            });
        });
    }
}

const item = document.querySelector(".item-one");
const slider = new Slider(item);