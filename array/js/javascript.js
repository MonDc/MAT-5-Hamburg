window.onload=function(){
let arr=[2,3,0,1,6];
//alert(arr.length);// show the count of array's items
//alert(arr[0]);// show the first item on the array
for(let i = 0 ; i<arr.length ; i++){
    //alert(arr[i]);
}

};

let numbers=[];
let idx=0;

function calc(){
let inputNumber=parseFloat( document.getElementById("markInput").value);
numbers[idx]=inputNumber;
idx++;
document.getElementById("markInput").value="";
}

function show(){
    document.getElementById("result").innerHTML="";
    for(let i=0;i<numbers.length;i++){
        document.getElementById("result").innerHTML +=numbers[i]+"<br>";
    }
}  


function findGreater(){
    document.getElementById("result").innerHTML="";
    let comparNumber=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(comparNumber<numbers[i]){
            comparNumber=numbers[i];
        }
    }
    document.getElementById("result").innerHTML=comparNumber;
}
function findSmaller(){
    document.getElementById("result").innerHTML="";
    let comparNumber=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(comparNumber> numbers[i]){
            comparNumber=numbers[i];
        }
    }
    document.getElementById("result").innerHTML=comparNumber;
}

function findSum(){
    document.getElementById("result").innerHTML="";
    let sumNumber=0;
    for(let i=0;i<numbers.length;i++){
        
            sumNumber= sumNumber+ numbers[i];
        
    }
    document.getElementById("result").innerHTML=sumNumber;
}