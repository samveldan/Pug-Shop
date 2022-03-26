class Dropdown {
    constructor(blocks) {
        this.blocks = blocks;

        this.setListener(this.blocks);
        this.setOpenItems(this.blocks);
        this.setBtnListeners(this.blocks);

        this.blocks.forEach(fullBlock => {
            this.removeCleanBtn(fullBlock, this.checkUseBtn(fullBlock));
        });

        this.clear();
    }

    setListener(items) {
        items.forEach(element => {
            let top = this.findTopBlock(element);

            top.addEventListener("click", (e) => {
                let selectionBlock = element.querySelector(".selection");
                let currentHeight = selectionBlock.firstElementChild.clientHeight;

                if(!element.classList.contains("active")) {
                    selectionBlock.style.height = currentHeight + "px";
                }
                else {
                    selectionBlock.style.height = 0 + "px";
                }

                element.classList.toggle("active");
            });
        });
    }

    setOpenItems(items) {
        items.forEach(element => {
            let selectionBlock = element.querySelector(".selection");
            let currentHeight = selectionBlock.firstElementChild.clientHeight;

            if(element.classList.contains("active")) {
                selectionBlock.style.height = currentHeight + "px";
            }
        });
    }

    findTopBlock(element) {
        for(let i = 0; i < element.children.length; i++) {
            if(element.children[i].className.includes("top")) {
                return element.children[i];
            }
        }
    }

    setBtnListeners(blocks) {
        blocks.forEach(block => {
            if(block.querySelector(".dropdown-block__option-nums")) {
                let nums = block.querySelectorAll(".dropdown-block__option-nums");

                nums.forEach(element => {
                    let minusBtn = element.querySelector("div:first-child");
                    let plusBtn = element.querySelector("div:last-child");
                    
                    minusBtn.addEventListener("click", (e) => {
                        this.changeNums(e.target);
                    });
                    plusBtn.addEventListener("click", (e) => {
                        this.changeNums(e.target);
                        minusBtn.classList.remove("dropdown-block__disabled-btn");
                    });
                });
            }
        });
    }

    changeNums(item) {
        let parent = item.parentElement;
        let text = parent.querySelector("span");
        let fullBlock = parent.closest(".dropdown-block__dropdown");
        let title = fullBlock.querySelector(".input-dropdown");
        
        if(item.innerText === "+") {
            text.innerText = parseInt(text.innerText) + 1;
        }
        else {
            if(text.innerText != "0") text.innerText = parseInt(text.innerText) - 1;
            if(text.innerText == "0") item.classList.add("dropdown-block__disabled-btn");
        }

        this.removeCleanBtn(fullBlock, this.checkUseBtn(fullBlock));

        title.value = this.getTitles(fullBlock);
    }

    checkUseBtn(parent) {
        return parent.querySelector(".dropdown-block__use.use");
    }

    getTitles(block) {
        let options = block.querySelectorAll(".dropdown-block__option");
        let text = [];
        let guests = 0;

        options.forEach(element => {
            let guestTitle = element.querySelector("h3").innerText.toLowerCase();
            let guestNum = element.querySelector("span").innerText;
            
            if(guestTitle == "взрослые" || guestTitle == "дети")  {
                guests += parseInt(guestNum);
            }
        });

        options.forEach(element => {
            let title = element.querySelector("h3").innerText.toLowerCase();
            let num = element.querySelector("span").innerText;
            
            if(parseInt(num) != 0) {
                if(title == "взрослые" || title == "дети")  {
                    title = "гостя";
                    num = guests;
                }
                text.push(`${num} ${title}`);
            }
        });
        text = text.filter((item, index, array) => {
            return array.indexOf(item) == index;
        }).join(", ");

        if(text.length > 20) {
            let newText = "";
            for(let i = 0; i < 20; i++) {
                newText += text[i];
            }
            return newText + "...";
        }
        else return text;
    }

    removeCleanBtn(block, hasUseBtn) {
        if(hasUseBtn) {
            let cleanBtn = block.querySelector(".dropdown-block__use.clean");
            let nums = block.querySelectorAll(".dropdown-block__option-nums");
            let count = 0;

            nums.forEach(element => {
                let span = element.querySelector("span");
                if(span.innerText == "0") count += 1;
            });
            if(count == nums.length) {
                cleanBtn.style.display = "none";
            }
            else {
                cleanBtn.style.display = "block";
            }
        }
    }

    clear() {
        let cleanBtns = document.querySelectorAll(".clean");

        cleanBtns.forEach(cleanBtn => {
            cleanBtn.onclick = function(e) {
                let parentBlock = this.closest(".selection");
                let input = parentBlock.previousElementSibling.querySelector("input");
                let options = parentBlock.querySelectorAll(".dropdown-block__option");

                options.forEach((option) => {
                    let btnBlock = option.querySelector(".dropdown-block__option-nums");
                    let minusBtn = btnBlock.firstElementChild;

                    option.querySelector("span").innerText = 0;
                    minusBtn.classList.add("dropdown-block__disabled-btn");
                });
                
                cleanBtn.style.display = "none";
                input.value = "Сколько гостей";
            };
        });
    }
}

const dropdownAll = document.querySelectorAll(".dropdown-block__dropdown");
new Dropdown(dropdownAll);

const expandchecksAll = document.querySelectorAll(".expand-checkbox");
new Dropdown(expandchecksAll);



