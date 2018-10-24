function changeImage(){
    let rand=Math.floor(Math.random()*5+1);
    document.getElementById("randImage").src="./imgs/"+rand+".jpg";
}