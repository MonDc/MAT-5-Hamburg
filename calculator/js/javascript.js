function sum(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    let z=parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerText=z;
} 
function minus(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    let z=parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerText=z;
} 
function mul(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    let z=parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerText=z;
} 
function div(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    if(num2==0)
    {
        document.getElementById("result").innerText=
         "You can not divide on 0 smarty ";
    }
    else{
        let z=parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").innerText=z;
    }
    
    
} 