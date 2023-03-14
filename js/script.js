

var flag = false;
var dice1 = document.getElementById("containerDice1");
var dice2 = document.getElementById("containerDice2");

document.getElementById("bDice").addEventListener("click", myFunction);


function myFunction(){
    
    if(!flag){
        document.querySelector("#firstTime").classList.add("hidden");
        document.querySelector("#game").classList.remove("hidden");
        throwDice();

        flag = true;
    }else{
        throwDice();
        
    }

    
}

function throwDice(){
    var diceNumberPlayer1 = Math.floor(Math.random()*6)+1;
    var diceNumberPlayer2 = Math.floor(Math.random()*6)+1;

    if(diceNumberPlayer1===1){
        dice1.innerHTML = "<div class='dice afadeIn'><div class='dot centermiddle'></div></div>";
    }

    if(diceNumberPlayer1===2){
        dice1.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer1===3){
        dice1.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot centermiddle'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer1===4){
        dice1.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer1===5){
        dice1.innerHTML = "<div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot centermiddle'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer1===6){
        dice1.innerHTML = "<div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot leftcenter'></div><div class='dot rightcenter'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }




    if(diceNumberPlayer2===1){
        dice2.innerHTML = "<div class='dice afadeIn'><div class='dot centermiddle'></div></div>";
    }

    if(diceNumberPlayer2===2){
        dice2.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer2===3){
        dice2.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot centermiddle'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer2===4){
        dice2.innerHTML = " <div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer2===5){
        dice2.innerHTML = "<div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot centermiddle'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }

    if(diceNumberPlayer2===6){
        dice2.innerHTML = "<div class='dice afadeIn'><div class='dot lefttop'></div><div class='dot righttop'></div><div class='dot leftcenter'></div><div class='dot rightcenter'></div><div class='dot leftbottom'></div><div class='dot rightbottom'></div></div>";
    }
    

    //alert(diceNumberPlayer1);
}