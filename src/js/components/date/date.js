import AirDatepicker from "../../../../node_modules/air-datepicker/air-datepicker";

let datesBlocks = document.querySelectorAll(".input-date");
let dates = null;

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
                if(currentDates.length > 1) {
                    for(let i = 0; i < currentDates.length; i++) {
                        currentDates[i].value = dates[i];
                    }
                }
                else firstInput.value = dates;
                a.hide();
            }
        }
    ],
    });
});