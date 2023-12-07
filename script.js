
let btns = document.querySelectorAll(".w3-button");

let reset=document.querySelector("#reset");
let winmsg=document.querySelector(".msg");
let result=document.querySelector("#result");
let playerO=true;
const  winPattern=[
    [0, 1, 2],  
    [3, 4, 5],  
    [6, 7, 8], 
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6],
];
const resetgame=()=>
{
    playerO=true;
    enablebtns();
    winmsg.classList.add("hide");



}
const disablebtns=()=>
{
    for (let btn  of btns)
     {
        btn.disabled=true;

        
    }
}
const enablebtns=()=>
{
    for (let btn  of btns)
     {
        btn.disabled=false;

        
    }
}


btns.forEach((btn)=>{
    btn.addEventListener("click",()=>
    {
        console.log("click");
        if(playerO==true)
        {
            btn.innerHTML="O"
            playerO=false;
        }else
        {
            btn.innerHTML="X";
            playerO=true;
        }
        btn.disabled=true;
        wincheck();
    });
    

});
const showwinner= (winner)=>
{
result.innerHTML=`Winner is ${winner}`;
winmsg.classList.remove("hide");
disablebtns();
}


const wincheck = ()=>
{
   for (let pattern of winPattern) {
    
    let position1=btns[pattern[0]].innerText;
    let position2=btns[pattern[1]].innerText;
    let position3=btns[pattern[2]].innerText;
    if(position1 != "" && position2 != "" && position3 != "")
    {
        if(position1===position2 && position2===position3)
        {
            console.log("winner",position1);
            showwinner(position1);
        }
       
    }
    
   
}};
reset.addEventListener("click",(e)=>
{
    for (const btn of btns) {
        btn.innerText="";
        resetgame();


        
    }
})


