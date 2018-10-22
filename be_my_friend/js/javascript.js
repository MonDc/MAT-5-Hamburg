function checkGirl(){
    let girlAge =parseFloat( document.getElementById("ageInput").value);
    if(girlAge < 18){
        alert("sorry you are too Young");
    }
    else{
        if(girlAge <=  30){
            alert("You are perfect");
        }
        else{
            if(girlAge <= 40){
                alert("Maybe");
            }
            else{
                if(girlAge <= 50){
                    alert("you are too old");
                }
            }
        }
    }
}