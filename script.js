let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame=document.querySelector(".NewGame");
let msgcontainer=document.querySelector(".msgcontainer");
//index.html
let msg=document.getElementById("msg");
let x=document.querySelectorAll(".player");
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
   localStorage.setItem("player1", player1); // ← save before redirect
    localStorage.setItem("player2", player2);
    location.href = "home.html";
  })
player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
document.getElementById("name").innerText = `${player1} vS ${player2}`;
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

let turnO=false;;
boxes.forEach((box) => {
    box.addEventListener("click",function(){
  if(turnO==false){
    box.innerText="X";
    turnO=true;
    
    
  }else{
    box.innerText="O";
    turnO=false;
   
  }
  box.disabled=true;
});});

function resetgame(){
reset.addEventListener("click",function(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
         turnO=false;
    msgcontainer.classList.add("hide");
    });
    
    
});}
function disableBoxes(){
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}


function showWinner(val){
    msg.innerText=`Winner is ${val}`;
    msgcontainer.classList.remove("hide");
}
function checkWin(){
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" &&val2!="" &&val3!="" ){
            if(val1===val2 && val2===val3){
                    disableBoxes();
                showWinner(val1);
            }
        }
}msg.innerText="It is a draw!";
}
newgame.addEventListener("click",resetgame());