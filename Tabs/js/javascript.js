function homeClick(){
    document.getElementById("homeDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function aboutClick(){
    document.getElementById("aboutDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function galleryClick(){
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function contactClick(){
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="";
}