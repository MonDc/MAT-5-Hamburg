function normalLoop(){
    document.getElementById("result").innerHTML="";
    for(let i=10 ; i>=0 ; i--){
        document.getElementById("result").innerHTML +=i+"<br>" ;
    }
}

function reversTriangle()
{
    document.getElementById("result").innerHTML="";
    for(let i=5;i>=1;i--){
        for(let f=1;f<=i;f++)
        {
            document.getElementById("result").innerHTML +="*" ;
        }
        document.getElementById("result").innerHTML +="<br>" ;
    }
}