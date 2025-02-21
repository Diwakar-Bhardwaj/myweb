let button=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#btn1");
let newgame=document.querySelector("#btn2");
let msg=document.querySelector("#msg");
console.log(button);
   
    let turn="cross";
button.forEach((bttn) => {
    bttn.addEventListener("click",()=> {
        console.log("button was clicked");
        if(turn==="cross"){
            // console.log("cross");
            bttn.innerHTML="X";
            turn="zero";

        }
        else{
            // console.log("zero");
            turn="cross";
            bttn.innerHTML="0";
        }
        bttn.disabled=true;
        checkWinner();
    });

});
  const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]
const checkWinner=()=>{
    for(let pattern of winPattern){
        console.log(button[pattern[0]],button[pattern[1]],button[pattern[2]]);
        console.log(button[pattern[0]].innerHTML,button[pattern[1]].innerHTML,button[pattern[2]].innerHTML);
    
        let pos1val=button[pattern[0]].innerHTML;
        let pos2val=button[pattern[1]].innerHTML;
        let pos3val=button[pattern[2]].innerHTML;
        if(pos1val !="", pos2val !="", pos3val !=""){
            if(pos1val===pos2val && pos1val ===pos3val  ){
                console.log("winner");
                showwinner(pos2val);
            }
        }
    }
};
const showwinner=(winner)=>{
    msg.innerHTML=`winner is ${winner}`;
    msg.classList.remove("hide");
    newgame.classList.remove("hide");
    butdisabled();
}
const butdisabled=()=>{
    for(let box of button){
        box.disabled=true;
    }
}
const butenabled=()=>{
    for(let box of button){
        box.disabled=false;
        box.innerHTML="";
    }
}
const resetgame=()=>{
    turn="cross";
    butenabled();
    msg.classList.add("hide");
    newgame.classList.add("hide");
}
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);