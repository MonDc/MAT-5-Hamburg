function calc(){
    let mathMark = parseFloat( document.getElementById("mathInput").value);
    let englishMark = parseFloat( document.getElementById("englishInput").value);
    let sceinceMark = parseFloat( document.getElementById("sceinceInput").value);
    let historyMark = parseFloat( document.getElementById("historyInput").value);
let sum = mathMark + englishMark + sceinceMark + historyMark;
document.getElementById("sumResult").innerText=sum;
let avg = sum/4;
document.getElementById("avgResult").innerText=avg;
if(avg < 50){
    document.getElementById("Result").innerText="Faild";
}
else{
    document.getElementById("Result").innerText="Success";
}
}