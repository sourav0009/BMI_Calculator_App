let hight = document.getElementById('hight');
let wight = document.getElementById('weight');
let button = document.getElementById('button');

let scor = document.getElementById('scor');
let result = document.getElementById('result');

button.addEventListener('click', function () {
    let newHight = parseFloat(hight.value);
    let newWight = parseFloat(wight.value);
    newHight = newHight / 100;
    let squHight = newHight * newHight;
    let bmi = newWight / squHight;
    scor.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if( scor.textContent < 18.6){
        scor.style.background = 'yellow'
    } else if (scor.textContent < 24.8){
        scor.style.background = 'green'
    }else{
        scor.style.background = 'red'
    }
});

let from = document.getElementById('from');
from.addEventListener('click', function (e) {
    e.preventDefault();
});