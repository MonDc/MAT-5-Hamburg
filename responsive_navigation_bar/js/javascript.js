function showMenu(){
    let checkStyle=document.getElementById("mainMenu").getAttribute("style");
    if(checkStyle=="display: block;"){
    document.getElementById("mainMenu").style="display: none;";
    }
    else{
        document.getElementById("mainMenu").style="display: block;";
    }
}