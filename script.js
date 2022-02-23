
function add(arr){
    let sum = arr.reduce((a,b)=>{
        return (a*1+b*1);
    });
    return sum;
}

function subtract(arr){
    let sub = arr.reduce((a,b)=>{
        return (a*1-b*1);
    });
    return sub;
}

function multiply(arr){
    let len =arr.length;
        return ((arr[0]*1)*(arr[len-1]*1));
}

function divide(arr){
    let len =arr.length;
    return ((arr[0]*1)/(arr[len-1]*1));
}

function operate(arr1,arr2,index){
    let result=0;
    if(arr2[index-1]=="+")
    {
        result= add(arr1);
        result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
        display(result);
        return result;
    }
    else if(arr2[index-1]=="-")
    {
        result = subtract(arr1);
        result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
        display(result);
        return result;
    }
    else if(arr2[index-1]=="*")
    {
        result = multiply(arr1);
        result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
        display(result);
        return result;
    }
    else if(arr2[index-1]=="/")
    {
        result = divide(arr1);
        if(result === Infinity)
        {
            return result;
        }
        else{
            result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
            display(result);
            return result;
        }
    }
    else if(arr2[index-1]=="=")
    {
        if(arr2[index-2]=="+")
        {
            result = add(arr1);
            result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
            display(result);
            return result;
        }
        else if(arr2[index-2]=="-")
        {
            result = subtract(arr1);
            result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
            display(result);
            return result;
        }
        else if(arr2[index-2]=="*")
        {
            result = multiply(arr1);
            result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
            display(result);
            return result;
        }
        else if(arr2[index-2]=="/")
        {
            result = divide(arr1);
            if(result === Infinity)
            {
                return result;
            }
            else{
                result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100;
                display(result);
                return result;
            }
        }
    }
}

function display(a){
    
    document.getElementById('display').innerText=a;
}

let input="", operator="", preInput="", inputArray = [];
let input1="", operatorArray = [], temp=0;
let flag=0 ,operatorFlag=0 ,numFlag=0;
let preOp="", preDot=0;
display(0);
const buttons = document.querySelectorAll('.user-buttons');
buttons.forEach(button => {
    button.addEventListener('click', e =>{
        input = `${e.target.id}`;
        if((input>=0&&input<=9))
        {
            if(preInput=="")//normal input
            {
                //console.log(input);
                display(input);
                preInput = input;
                input1 = input;
                numFlag++;
            }

            else if(preInput=="0.")
            {
                input =preInput + input;
                display(input);
                preInput = input;
                input1 = input;
            }
            else if(preInput==0&&input!=0)//if first entered number is zero then normal input
            {
                //console.log(input);
                display(input);
                preInput = input;
                input1 = input;
                numFlag++;
            }
            else if(preInput==0)//if first number is zero then reset
            {
                input="0";
                preInput="0";
                //operator="";
                //flag=0;
                //operatorFlag=0;
                numFlag++;
                input1 = input;
            }
    
            else{//join the previous in put with current one
                input = preInput+input;
                //console.log(input);
                display(input);
                preInput = input;
                input1 = input;
                numFlag++;
            }
        }

        else if(input=="dot")
        {
            if(preDot>0)
            {
                input = preInput;
                display(input);
                input1 = input;
            }
            else if(preInput=="")
            {
                input = "0"+".";
                display(input);
                preInput = input;
                input1 = input;
                preDot++;
            }
            else if(isNaN(preInput)==false)
            {
                input = preInput+".";
                display(input);
                preInput = input;
                input1 = input;
                preDot++;
            }
            
        }

        else if(input=="C"){//reset
            input="";
            preInput="";
            operator="";
            operatorArray = [];
            inputArray = [];
            flag=0;
            numFlag=0;
            operatorFlag=0;
            input1 = input;
            preDot=0;
            display(0);
        }

        else{//when click on operator calls operator function
            flag+=2;
            //preInput = input;        
            operator = input;
            preOp = operator;
            inputArray[operatorFlag]=input1;
            operatorArray[operatorFlag]=operator;
            console.log(flag)
            console.log(inputArray);
            console.log(operatorArray);
            operatorFlag++;
            input="";
            preInput="";
            input1="";
            operator="";
            preDot = 0;
            if(inputArray[0] !== inputArray[0])
            {
                display("NOOO");
                input="";
                preInput="";
                operator="";
                operatorArray = [];
                inputArray = [];
                inputArray[0] = NaN;
                flag=0;
                numFlag=0;
                operatorFlag++;
                input1 = input;
            }

            else if(operatorArray[operatorFlag-2]=="=")
                {
                    display(temp);
                }

            else if((flag>2&&flag%2==0)||operator=="=")
            {
                temp=0;
                temp=operate(inputArray,operatorArray,operatorFlag-1);
                if(temp === Infinity)
                {
                    display("ERROR");
                    input="";
                    preInput="";
                    operator="";
                    operatorArray = [];
                    inputArray = [];
                    inputArray[0] = NaN;
                    flag=0;
                    numFlag=0;
                    operatorFlag++;
                    input1 = input;
                }
                
                else{
                    inputArray = [];
                    inputArray[0] = temp;
                    flag = 2;
                //temp = 0;
                }
            }
        }
    });
});