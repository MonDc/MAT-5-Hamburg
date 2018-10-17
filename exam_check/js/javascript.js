function check(){
    let number = parseFloat( document.getElementById("mark").value);
if(number <50){
    document.getElementById("result").innerText="Faild";
}else{
    if(number <60){
        document.getElementById("result").innerText="midum";
    }
    else{
    document.getElementById("result").innerText="success";
    }

}

}