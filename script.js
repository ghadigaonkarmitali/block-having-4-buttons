document.getElementById("plusOne").addEventListener("click", function() {
    updateNumber(1);
});

document.getElementById("minusOne").addEventListener("click", function() {
    updateNumber(-1);
});

document.getElementById("plusTen").addEventListener("click", function() {
    updateNumber(10);
});

document.getElementById("minusTen").addEventListener("click", function() {
    updateNumber(-10);
});

function updateNumber(change) {
    var numberInput = document.getElementById("numberInput");
    var currentValue = parseInt(numberInput.value) || 0; // Use 0 if input is empty or not a number
    var newValue = currentValue + change;
    numberInput.value = newValue;
}
