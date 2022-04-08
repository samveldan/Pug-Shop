import AirDatepicker from "../../../../node_modules/air-datepicker/air-datepicker";

let datesBlocks = document.querySelectorAll(".calendar");
const months = {
    "01" : "янв",
    "02" : "фев",
    "03" : "март",
    "04" : "апр",
    "05" : "май",
    "06" : "июнь",
    "07" : "июль",
    "08" : "авг",
    "09" : "сент",
    "10" : "окт",
    "11" : "нояб",
    "12" : "дек"
};
let calendarIsOpen = false;

datesBlocks.forEach((element) => {
    let inputCalendar = element.querySelector("input");
    let topBlock = element.previousElementSibling
    let topInputs = topBlock.querySelectorAll("input");
    let dates = null;

    const a = new AirDatepicker(inputCalendar, {
        inline : (function() {
            if(topBlock.classList.contains("date__wrapper")) return true
            else return false;
        })(),
        container : element,
        minDate : new Date(),
        startDate : new Date(),
        navTitles: {
            days: '<strong>MMMM yyyy</strong>'    
        },
        onSelect : function (date) {
            dates = date.formattedDate;
            
            for(let i; i < topInputs.length; i++) {
                topInputs[i].value = dates[i];
            }
        },
        onShow : function() {
            calendarIsOpen = true;
        },
        onHide : function() {
            calendarIsOpen = false;
        },
        range : (function() {
            if(topInputs.length > 1) return true;
            else return false;
        })(),
        buttons: [
        {
            content: 'Очистить',
            className : "date-clear",
            onClick : () => {
                a.clear();
            }
        }, 
        {
            content: 'Применить',
            className : "date-use",
            onClick : function() {
                let containsDate = element.closest(".search-date");
                console.log(element);

                if(topInputs.length > 1 && !containsDate) {
                    for(let i = 0; i < topInputs.length; i++) {
                        if(dates[i]) {
                            topInputs[i].value = dates[i];
                        }
                    }
                }
                else if(topInputs.length > 1 && containsDate) {
                    let rangeDate = [];
                    for(let i = 0; i < topInputs.length; i++) {
                        let day = dates[i].slice(0, 2);
                        let month = dates[i].slice(3, 5);
                        
                        for(let item in months) {
                            if(item == month) {
                                rangeDate.push(`${day} ${months[item]}`);
                            }
                        }
                    }
                    topInputs[0].value = rangeDate.join(" - ");
                }
                else {
                    topInputs.forEach(current => {
                        current.value = dates;
                    });
                }
            }
        }
    ],
    });

    window.addEventListener("click", (e) => {
        if(e.target && e.target.closest(".input-date") || findCalendar(e.composedPath(), element)) {
            a.show();
        }
        else if((!findCalendar(e.composedPath(), element) && calendarIsOpen)) {
            a.hide();
        }
        
        if(e.target.closest(".date-use")) a.hide();
    });
});

function findCalendar(elements, element) {
    for(let item of elements) {
        if(item == element) {
            return true;
        }
    }
}