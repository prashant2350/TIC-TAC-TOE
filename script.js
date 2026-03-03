let boxes = document.querySelectorAll("box");
let reset = document.querySelector(".reset");


let x=document.querySelectorAll(".player");

let welcome=document.body.querySelector("h2");
let start=document.getElementById("start");
let player1,player2;
start.addEventListener("click",function(){
    player1=x[0].value;
    player2=x[1].value;
   if(player1=="" || player2==""){
    alert("Please enter the name of both players");
    return;
   }
   location.href="home.html";
   alert("Welcome " + player1 + " and " + player2);

     
   })
  



