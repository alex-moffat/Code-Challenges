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