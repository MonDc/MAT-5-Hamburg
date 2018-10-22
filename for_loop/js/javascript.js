
function doSomthing(){
    for(let i = 0; i<10 ; i++){
        //alert("the number is :"+i);


        document.getElementById("container").innerHTML=
        document.getElementById("container").innerHTML+
        "Hamburg mat 5 "+i+"<br>";
    }
}
function counter(){
    document.getElementById("result").innerHTML="";
    for(let i=0;i<=100;i++){
        document.getElementById("result").innerHTML += i+"<br>";
    }
}
function counterEven(){
    document.getElementById("result").innerHTML="";
    for(let i=0;i<=100;i=i+2){
        document.getElementById("result").innerHTML += i+"<br>";
    }
}
function counterOdd(){
    document.getElementById("result").innerHTML="";
    for(let i=1;i<=100;i=i+2){
        document.getElementById("result").innerHTML += i+"<br>";
    }
}
function power(){
    document.getElementById("result").innerHTML="";
    for(let i=1;i<=100;i++){
        document.getElementById("result").innerHTML += i*i+"<br>";
    }
}
function innerLoop(){
    document.getElementById("result").innerHTML="";
    for(let i=1;i<=10;i++){
        for(let x=1 ;x<=10 ; x++){
            document.getElementById("result").innerHTML += "i is"+i+" and x is "+x+"<br>";
        }



    }
}