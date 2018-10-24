function lightOn(){
    document.getElementById("lightImage").src=
    "./imgs/on.png";
}
function lightOff(){
    document.getElementById("lightImage").src=
    "./imgs/of.png";
}
function lightChange(){
    let lightSit=document.getElementById("lightImage").getAttribute("src");
    if(lightSit=="./imgs/of.png"){
        lightOn()
    }else{
        lightOff()
    }
}