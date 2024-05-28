
  
function getrandom(){
    var random=Math.floor(Math.random()*6)+1;
    return random;
}



function change(){
    var img1=document.querySelector(".img1");
    var img2=document.querySelector(".img2");

    var dice1=getrandom();
    var dice2=getrandom();
    
    img1.src='./images/dice'+dice1+'.png';;
    img2.src='./images/dice'+dice2+'.png';;

    if(dice1>dice2){
        var head=document.querySelector("h1").textContent="Player 1 wins!";
    }
    else if(dice1==dice2){
        var head=document.querySelector("h1").textContent="Draw!";
    }
    else{
        var head=document.querySelector("h1").textContent="Player 2 wins!";
    }

}

document.addEventListener('DOMContentLoaded', function(){
var btn1=document.getElementById("play");
btn1.addEventListener('click',change);

});
