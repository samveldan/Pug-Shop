export default class Dropdown {
    constructor(blocks) {
        this.blocks = blocks;

        this.setListener(this.blocks);
        this.setOpenItems(this.blocks);
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
                else selectionBlock.style.height = 0 + "px";

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
}

const dropdownAll = document.querySelectorAll(".dropdown-block__dropdown");
new Dropdown(dropdownAll);

const expandchecksAll = document.querySelectorAll(".expand-checkbox");
new Dropdown(expandchecksAll);



