class Slider {
    constructor(slider, options) {
        this.slider = slider;
        this.options = options;
        this.leftArrow = this.slider.querySelector(".left");
        this.rightArrow = this.slider.querySelector(".right");
        this.slidesBlock = this.slider.querySelector(".slides");
        this.slides = Array.from(this.slidesBlock.querySelectorAll("div"));
        this.dots = Array.from(this.slider.querySelectorAll(".dots div"));
        this.width = 271;
        this.maxWidth = this.countSlides() * this.width;
        this.offset = 0;

        this.currentSlide = this.slider.querySelector(".active");
        this.prevSlide = this.currentSlide.previousElementSibling || this.slides[this.slides.length - 1];
        this.nextSlide = this.currentSlide.nextElementSibling || this.slides[0];

        if(this.leftArrow && this.rightArrow) this.moveSlides();
        this.setClasses("dots");
    }

    moveSlides() {
        this.leftArrow.addEventListener("click", (e) => {
            if(this.offset <= 0) {
                this.offset = this.maxWidth - this.width;
            }
            else {
                this.offset -= this.width;
            }

            this.slidesBlock.style.right = this.offset + "px";
            this.setClasses("left");

        });

        this.rightArrow.addEventListener("click", (e) => {
            if(this.offset >= this.maxWidth - this.width) {
                this.offset = 0;
            }
            else {
                this.offset += this.width;
            }

            this.slidesBlock.style.right = this.offset + "px";
            this.setClasses("right");
        });
    }

    clearActive(elements) {
        elements.forEach(element => {
            element.classList.remove("active");
        });
    }

    setClasses(side) {

        if(side == "left" || side == "right") {
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

        else {
            this.dots.forEach(dot => {
                dot.addEventListener("click", () => {
                    this.clearActive(this.slides);
                    this.clearActive(this.dots);
    
                    let currentDotData = dot.dataset.slider;
                    this.offset = (currentDotData - 1) * this.width;
                    this.slidesBlock.style.right = this.offset + "px";

                    this.slides.forEach((slide) => {
                        if(slide.dataset.slider == currentDotData) {
                            this.currentSlide = slide;
                            this.prevSlide = this.currentSlide.previousElementSibling || this.slides[this.slides.length - 1];
                            this.nextSlide = this.currentSlide.nextElementSibling || this.slides[0];

                            slide.classList.add("active");
                        }
                    });
                    dot.classList.add("active");
                });
            });
        }
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
}

const itemOne = document.querySelector(".item-one");
const sliderOne = new Slider(itemOne);

const itemTwo = document.querySelector(".item-two");
const sliderTwo = new Slider(itemTwo);