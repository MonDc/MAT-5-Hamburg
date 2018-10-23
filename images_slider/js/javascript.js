window.onload=function() {
    //everything here wil be don after page load
    let counter=1;
    let counter1=0;
    let direction = true;
    /////////////////////////////////to change image
    setInterval(function(){
//everything here will be repeated 
//counter++;
//counter += 1;
counter = counter +1;
if(counter == 6){
    counter=1;
}
document.getElementById("slideImage").src="./imgs/"+counter+".jpg";
    },1000);
//////////////////////////////// finish change image

///////////////////////////////change left position

    setInterval(function(){
        //everything here will be repeated 
        //counter++;
        //counter += 1;
        
        // check if the left position equel to 
        //the window width minus 200 the image width 
        //then the direction should revers
        if(counter1 ==window.innerWidth-200){
            direction=false;
        }
        //if counter arrave to 0 the direction should revers
        if(counter1 ==0){
            direction=true;
        }
        if(direction)
        {
            counter1 = counter1 +1;
        }else{
            counter1 = counter1 -1;
        }
        document.getElementById("slideImage").style="width: 200px;position: fixed;left: "+counter1+"px;";
            },1);
            ////////////////////////////////////////finish change position
}