"use strict";

const txtInput = document.getElementById("txtInput");
const txtOutput = document.getElementById("txtOutput");
const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init(){
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked(){
    console.log("Clicked!!");

    let userTypedValue = txtInput.value;
    let valueAsNumber = parseFloat(userTypedValue);
    console.log("Got the value from the textbox it was: " + userTypedValue);

    let celcius = (valueAsNumber - 32) * 5/9;
    console.log("calculated the value of: " + celcius);

    txtOutput.value = celcius;

}