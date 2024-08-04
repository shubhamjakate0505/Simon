let gameseq=[];
let userseq=[];

let started=false;
let leval=0;
let btns=["red","green","yellow","purple"];
h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
   if(started==false){
    started=true;
    console.log("game started")

    levleup();
   }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levleup(){
    userseq=[];
    leval++;
    h2.innerText=`Level ${leval}`;
    let randmidx=Math.floor(Math.random()*3);
    let randomColor=btns[randmidx];
    let randbtn=document.querySelector(`.${randomColor}`);
    /* console.log(randmidx);
    console.log(randomColor);
    console.log(randbtn); */

    gameseq.push(randomColor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    // let idx=leval-1;
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length===gameseq.length){
       setTimeout(levleup,1000);
       }
    }else{
        h2.innerHTML=`Game Over! your Score was <b>${leval}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000)
        reset();
    }
}
function btnPress(){
    
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    leval=0;
}