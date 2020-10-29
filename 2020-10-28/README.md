# Challenge 2020.10.28
Create a program that converts degrees in Fahrenheit to Celsius and vise versa. This challenge took 3 hours to complete with HTML, JavaScript, and Bootstrap. Extensive responsive styling added beyond the required specifications.

## Requirements
The program must include the following components:
1. An input field
2. A dropdown menu to swap between Fahrenheit and Celsius (based on intended output)
3. A Display for the temp to be shown. (including C°/F°)
4. A button to submit the input, and a button to clear the input.
5. It must throw an alert if the user inputs incorrect data.
6. If an error is thrown, the message should be displayed instead of the temperature
7. The app should include some sort of styling (html/css).
Added: Change photo based temperature converted.

### Output
![Alt Text](https://github.com/alex-moffat/Code-Challenges/blob/main/2020-10-28/Screenshot_tempConverter.jpg "temp_converter")

### Solution
```JS
//========== DECLARE GLOBAL VARIABLES ==========
//==============================================
var startTemp, startUnit, endTemp, endUnit, errorFoot, errorText, photoTemp;

//========== AUTO FIRE - AFTER PAGE LOAD
function loadMe() {
    //===== LOAD ELEMENT REFERENCES
    startTemp = document.getElementById("start-temp")
    startUnit = document.getElementById("start-unit")
    endTemp = document.getElementById("end-temp")
    endUnit = document.getElementById("end-unit")
    errorFoot= document.getElementById("error-foot")
    errorText = document.getElementById("error-text")
    photoTemp = document.getElementById("photo-temp")    
}

//========== FUNCTIONS & METHODS ===============
//==============================================

//========== convertTemp
function convertTemp() {
    console.log("convertTemp");
    if (!checkTemp()) {
        if (startUnit.value == 'F') {
            photoSelect(parseInt(startTemp.value))
            endTemp.value = ((startTemp.value - 32) * (5/9)).toFixed(1);
            endUnit.innerHTML = 'Celsius';
        }
        else {
            temp = ((startTemp.value * 9/5) + 32).toFixed(1);
            photoSelect(temp)
            endTemp.value = temp;
            endUnit.innerHTML = 'Fahrenheit';
        }        
    }
}

//========== clearTemp
function clearTemp() {
    console.log("clearTemp");
    startTemp.value = '';
    startUnit.value = '';
    endTemp.value = '';
    endUnit.innerHTML = '';
    errorTemp('');
    photoSelect(33);    
}

//========== PHOTO SELECT
function photoSelect(arg) {
    console.log("photoSelect: " + arg);
    if (arg <= 32 && arg > -10) {
        photoTemp.src = "./img/snow-scene.jpg";
    }
    else if (arg <= -10) {
        photoTemp.src = "./img/antarctica.jpg";
    }
    else if (arg >= 80 && arg < 110){
        photoTemp.src = "./img/beach.jpg";
    }
    else if (arg >=110) {
        photoTemp.src = "./img/desert.jpg";
    }
    else {
        photoTemp.src = "./img/thermometer.jpg";        
    }
}

//========== ERROR HANDLING
function checkTemp() {
    errorTemp('');
    if (startUnit.value == '' && startTemp.value == '') {
        errorTemp('Please select starting temperature & units.');
        startUnit.classList.add('is-invalid');
        startTemp.classList.add('is-invalid');
    }
    else if (startTemp.value == '') {
        errorTemp('Please select starting temperture to convert.')
        startTemp.classList.add('is-invalid');
    }
    else if (startUnit.value == '') {
        errorTemp('Please select starting units.')
        startUnit.classList.add('is-invalid');
    }
    else {
        return false;
    }
    return true;
}

//========== ERROR MESSAGING
function errorTemp(arg) {
    if (arg != '') {
        errorFoot.classList.add("card-footer");        
    }
    else {
        errorFoot.classList.remove("card-footer");
        startUnit.classList.remove('is-invalid');
        startTemp.classList.remove('is-invalid');
    }
    errorText.innerHTML = arg;
}
```
