function homeClick(i){
    i.parentNode.classList.add("active");
    document.getElementById("homeDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function aboutClick(me){
    me.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function galleryClick(you){
    you.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function contactClick(him){
    him.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="";
}