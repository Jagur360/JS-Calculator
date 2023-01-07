let x = ''; //first entered value 
let y = ''; //second emtred value 
let z = ''; //the total sum value of both values
let dec = false; //does a value have a decimal point

let isAdd = false; 
let isMin = false;
let isMul = false; 
let isDiv = false;
let isPer = false; 
let hasDec = false; 

let display = document.getElementById('display'); 

let NumberButtons = Array.from(document.getElementsByClassName('num-data'));

function sum() {
    document.getElementById('add-data').setAttribute('disabled', 'disabled');
    document.getElementById('min-data').setAttribute('disabled', 'disabled');
    document.getElementById('mul-data').setAttribute('disabled', 'disabled');
    document.getElementById('div-data').setAttribute('disabled', 'disabled');
}

function notSum() {
    document.getElementById('add-data').removeAttribute('disabled', 'disabled');
    document.getElementById('min-data').removeAttribute('disabled', 'disabled');
    document.getElementById('mul-data').removeAttribute('disabled', 'disabled');
    document.getElementById('div-data').removeAttribute('disabled', 'disabled');
}

NumberButtons.map( NumberButtons => {
    NumberButtons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerHTML += e.target.innerText;
                notSum();                
        }
    })
})


//--------------------------------------------------------------------------------------------//


function defaultVal() {
    
    document.getElementById('decimal').removeAttribute('disabled', 'disabled')


    x = display.innerText;
    display.innerHTML = '';
}

function clearAll() {
    console.log('clearAll')
    
    display.innerText = '';
    x = '';
    y = '';
    z = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0,-1);

    if (display.innerText.includes('.') == false) {
        document.getElementById('decimal').removeAttribute('disabled', 'disabled');
    }
}

function decimal() {

    if (display.innerHTML == '') {
        display.innerHTML = '0'
    }

    document.getElementById('decimal').setAttribute('disabled', 'disabled'); 

}

function save() {
document.getElementById('save-display').textContent = display.innerText;

}

function addition() {
    sum()
    defaultVal()
    isMin, isMul, isDiv, isPer = false;
    isAdd = true;
}

function subtraction() {
    sum()
    defaultVal()
    isAdd, isMul, isDiv, isPer = false;
    isMin = true;
}

function multiplication() {
    sum()
    defaultVal()
    isAdd, isMin, isDiv, isPer = false;
    isMul = true; 
}

function division() {
    sum()
    defaultVal()
    isAdd, isMin, isMul, isPer = false;
    isDiv = true;
}

function equals() {
    y = display.innerText;
    let x1 = parseFloat(x);
    let y1 = parseFloat(y);
    document.getElementById('decimal').removeAttribute('disabled', 'disabled')
    if(isAdd == true) {
    z = x1 + y1;
    };

    if(isMin == true) { 
        z = x - y
    }

    if(isMul == true) { 
        z = x * y
    }

    if(isDiv == true) { 
        z = x / y
    }

    if (display.innerText.includes('.') == true && z == null) {
        document.getElementById('decimal').setAttribute('disabled', 'disabled');
    } else if(z !==null && display.innerText.includes('.')) {
        document.getElementById('decimal').setAttribute('disabled', 'disabled');
    }
    else {
        document.getElementById('decimal').removeAttribute('disabled', 'disabled');
    }

    

    display.innerText = z;
}