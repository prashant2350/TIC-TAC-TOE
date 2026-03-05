let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame=document.querySelector(".NewGame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.getElementById("msg");


const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
let count=0;
let turnO=false;
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
  count++;
  let isWINNER= checkWin();
  if(count===9 && isWINNER==false){
    draw();
  }
});

});
// checked
function draw(){
      msg.innerText="It is a draw!";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
function resetgame(){

    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
         turnO=false;
    msgcontainer.classList.add("hide");
        
    });
    count=0;
}
    
    reset.addEventListener("click",resetgame);
    newgame.addEventListener("click",resetgame);

//checked 


function disableBoxes(){
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}


function showWinner(val){
    console.log("show winner function called succcessfully");
    msg.innerText=`Winner is ${val}`;
    msgcontainer.classList.remove("hide");
     disableBoxes();
}

function checkWin(){
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!="" ){
            if(val1===val2 && val2===val3){
                console.log("checkwin fxn is working");
                    
                showWinner(val1);
                return true;
            }
        }
    
}
 return false;
}
