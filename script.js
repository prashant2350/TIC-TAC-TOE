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
  // On the current page — save names and redirect
localStorage.setItem("player1", player1);
localStorage.setItem("player2", player2);
location.href = "home.html";

// On home.html — read and display names
let player1 = localStorage.getItem("player1");
let player2 = localStorage.getItem("player2");
welcome.innerHTML = `<i>${player1} VS ${player2}</i>`;
     
   })
  



