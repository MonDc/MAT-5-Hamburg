function homeClick(i){
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("homeDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function aboutClick(me){
    document.getElementsByClassName("active")[0].classList.remove("active");
    me.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function galleryClick(you){
    document.getElementsByClassName("active")[0].classList.remove("active");
    you.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function contactClick(him){
    document.getElementsByClassName("active")[0].classList.remove("active"); 
    him.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="";
}