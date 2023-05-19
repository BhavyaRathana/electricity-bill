var button = document.getElementById('my-btn')
var billText = document.getElementById("bill-amt")
var prediction = document.getElementById("bill-month")
var billcharge=document.getElementById("bill-charge")


button.addEventListener('click', handleCalculateClick)
button.addEventListener('click',billprediction)

function handleCalculateClick() {
    var units = document.getElementById("present").value - document.getElementById("past").value;
    var cost = covertUnits2Cost(units)
    billText.innerHTML = cost;
}
function billprediction(){
    var days =document.getElementById("DAYS");
    var units=((document.getElementById("present").value - document.getElementById("past").value)/document.getElementById("DAYS").value)*30;
    var bill=(covertUnits2Cost(units))+65;
   
    billcharge.innerHTML=bill;
}

function covertUnits2Cost(units) {
    if (units <= 30) {
        return (units * 1.96)
    } else if (units <= 75) {
        return (30 * 1.96 + (units - 30) * 3.00)
    } else if (units <= 125) {
        return (30 * 1.96 + 45 * 3.00 + (units - 75) * 4.50)
    } else if (units <= 225) {
        return (30 * 1.96 + 45 * 3.00 + 50 * 4.50 + (units - 125) * 6.00)
    } else if (units <= 400) {
        return (30 * 1.96 + 45 * 3.00 + 50 * 4.50 + 100 * 6.00 + (units - 225) * 8.75)
    } else {
        return (30 * 1.96 + 45 * 3.00 + 50 * 4.50 + 100 * 6.00 + 175 * 8.75 + (units - 400) * 9.75)
    }
}






