
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1,opps,num2){

}

function display(a){
    document.getElementById('display').innerText=a;
}

let input="", operator="";
const buttons = document.querySelectorAll('.user-buttons');
buttons.forEach(button => {
    button.addEventListener('click', e =>{
        input = input+`${e.target.id}`;
        if(input>=0&&input<=9)
        {
            console.log(input);
            display(input);
        }
        else{
        operator = input;
        console.log(operator);
        }
    });
});