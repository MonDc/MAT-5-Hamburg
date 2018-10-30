window.onload = function () {
    let container = document.getElementById("contdiv");
let createdDiv = document.createElement("div");
createdDiv.setAttribute("id","createdDiv");
createdDiv.style = "background-color:red;width:50px;height:50px;";
container.appendChild(createdDiv);



for(let i=0;i<10;i++){
    let subDiv=document.createElement("h3");
    subDiv.innerText=i;
    container.appendChild(subDiv);
}

let table=document.createElement("table");
table.style="border:1px solid black;";
for(let i=1;i<=10;i++){
let row = document.createElement("tr");
for(let x=1;x<=10;x++){
    let cell=document.createElement("td");
    cell.style="border-left:1px solid black;border-bottom:1px solid black;";
    cell.innerText=i+" X "+x+" = "+i*x;
    row.appendChild(cell);
}
table.appendChild(row);
}
container.appendChild(table);



}