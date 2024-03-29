let boxes=document.querySelectorAll(".box");
const new_game=document.querySelector(".new-game");
const msg=document.querySelector(".msg")
const msg_container=document.querySelector(".msg-container")
const hide=document.querySelector(".hide")
let turnO=true;
const winningPattern= [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
  ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
           box.innerText="0";
           box.style.color="blue";
           turnO=false;
        }   
        else{
            box.innerText="X";
            box.style.color="red"
            turnO=true;
         }  
        box.disabled =true;
        checkWinner();
     });
})


const checkWinner= ()=>{
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
        } 
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};
 
const showWinner =(winner)=>{
    msg.innerText=(`Congratulation, The winner is ${winner}`);
    msg_container.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
};

new_game.addEventListener("click",()=>{
    console.log("btn-clicked");
    turnO=true;
    enableboxes();
    msg_container.classList.add("hide")
});