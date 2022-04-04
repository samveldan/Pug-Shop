import AirDatepicker from "../../../../node_modules/air-datepicker/air-datepicker";

let datesBlocks = document.querySelectorAll(".input-date");
let dates = null;
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

datesBlocks.forEach((element) => {
    let currentDates = Array.from(element.querySelectorAll("input"));
    let firstInput = currentDates[0];
    let standardDate = firstInput.value;

    const a = new AirDatepicker(firstInput, {
        inline : (function() {
            if(element.classList.contains("date__wrapper")) return true
            else return false
        })(),
        startDate : new Date(),
        navTitles: {
            days: '<strong>MMMM yyyy</strong>'    
        },
        onSelect : function (date) {
            firstInput.value = standardDate;
            dates = date.formattedDate;
        },
        range : (function() {
            if(currentDates.length > 1) return true;
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
                console.log();
                let containsDate = element.classList.contains("search-date");

                if(currentDates.length > 1 && !containsDate) {
                    for(let i = 0; i < currentDates.length; i++) {
                        currentDates[i].value = dates[i];
                    }
                }
                else if(currentDates.length > 1 && containsDate) {
                    let rangeDate = [];
                    for(let i = 0; i < currentDates.length; i++) {
                        let day = dates[i].slice(0, 2);
                        let month = dates[i].slice(3, 5);
                        
                        for(let item in months) {
                            if(item == month) {
                                rangeDate.push(`${day} ${months[item]}`);
                            }
                        }
                    }
                    standardDate = rangeDate.join(" - ");
                    currentDates[0].value = rangeDate.join(" - ");
                }
                else firstInput.value = dates;

                a.hide();
            }
        }
    ],
    });
});