let user=0;
let computer=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("message");
let userscore=document.getElementById("user-score");
let computerscore=document.getElementById("com-score");


const draw=()=>{
    console.log("game was Draw.");
        msg.textContent="Game was Drawn. Play Again!";
        msg.style.backgroundColor="#081b31";
    
}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        user++;
        userscore.innerText=user;
        console.log("You Win");
        msg.textContent=`You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You Lose");
        computer++;
        computerscore.innerText=computer;
        msg.textContent=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
let getCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randomidx=Math.floor(Math.random() * 3);
    return options[randomidx];
}
const playGame=(userChoice)=>{
    console.log("user choice",userChoice)
    let compChoice=getCompChoice();
    console.log("computer Choice ",compChoice);

    if(userChoice===compChoice){
        draw();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            //scissor paper
            userwin=compChoice==="paper"? false:true; 
        }else if(userChoice==="paper"){
            //rock scissor
            userwin=compChoice==="scissors"? false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
    

}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });

    
});