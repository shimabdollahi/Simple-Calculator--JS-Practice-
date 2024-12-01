let firstOperand;
let secondOperand;
let operator;

let numChars="";
// let history="";

function getDigit(char){
    numChars+=char;
    showResult(numChars);
    // console.log(numChars);
}
function setOp(op){
    operator=op;
    setFirstOperand();
    showResult("");
}
function setFirstOperand(){
    firstOperand=Number(numChars);
    numChars="";
    showResult(firstOperand);
    // console.log(firstOperand);
}
function setSecondOperand(){
    secondOperand=Number(numChars);
    numChars="";
    showResult(secondOperand);
    // console.log(secondOperand);
}
function calculate(){
    let result;
    setSecondOperand();
    if(operator =='+'){
        result= firstOperand + secondOperand;    
    }
    else if(operator =='-'){
        result= firstOperand - secondOperand;
    }
    else if(operator =='/'){
        result= firstOperand / secondOperand;
    }
    else if(operator =='*'){
        result= firstOperand * secondOperand;
    }
    // else{

    // }
    // console.log(result);
    showResult(result);
    showCalculation(operator,result);
}
function showCalculation(op,result){
    let calculation= `${firstOperand} ${op} ${secondOperand} = ${result}`;
    // history+=calculation;
    addCalcToHistory(calculation);
    // showHistory();
    // console.log(calculation);
    // console.log(history);
}
function clean(){
    // history="";
    clearHistory();
    showResult("");
    firstOperand=null;
    secondOperand=null;
    operator=null;
}
function showResult(res){
    document.getElementById("result").innerText=res;
}
// function showHistory(){
//     document.getElementById("history").innerText=history;
// }
function addCalcToHistory(calc){
    // history+=calc;
    let li=document.createElement("li");
    li.innerText=calc;
    document.getElementById("history").appendChild(li);
}
function clearHistory(){
    document.getElementById("history").innerText="";
}