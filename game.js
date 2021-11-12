window.onload = function() {
      document.querySelector('#edit').addEventListener('click',()=>{
      document.querySelector('#p1').innerHTML = document.querySelector('#player1').value;
      document.querySelector('#p2').innerHTML = document.querySelector('#player2').value;
    })
}

function now( x , y)
{
    document.querySelector('#p1').src = `photo/dice${x}.png`
    document.querySelector('#p2').src = `photo/dice${y}.png`
    // if(x==1)document.querySelector("#p1").src="photo/dice1.png";
    // else if(x==2)document.querySelector("#p1").src="photo/dice2.png";
    // else if(x==3)document.querySelector("#p1").src="photo/dice3.png";
    // else if(x==4)document.querySelector("#p1").src="photo/dice4.png";
    // else if(x==5)document.querySelector("#p1").src="photo/dice5.png";
    // else if(x==6)document.querySelector("#p1").src="photo/dice6.png";
    // if(y==1)document.querySelector("#p2").src="photo/dice1.png";
    // if(y==2)document.querySelector("#p2").src="photo/dice2.png";
    // if(y==3)document.querySelector("#p2").src="photo/dice3.png";
    // if(y==4)document.querySelector("#p2").src="photo/dice4.png";
    // if(y==5)document.querySelector("#p2").src="photo/dice5.png";
    // if(y==6)document.querySelector("#p2").src="photo/dice6.png";
}


 function change() {
    var player1  = document.querySelector('#player1').value;
    var player2  = document.querySelector('#player2').value;
    var x=Math.floor(Math.random()*6+1);
    var y=Math.floor(Math.random()*6+1);
    document.getElementsByTagName("button")[0].innerHTML="CONTINUE";
    if(x==y)
    {
        document.getElementsByTagName("h1")[0].innerHTML="DRAW";
        now(x,y);
    }
     else if(x>y){
        document.getElementsByTagName("h1")[0].innerHTML=`<img id="flag" src="photo/flag2 (1).png" alt="">${player1} Wins`;
        now(x,y);
    }
    else {
        document.getElementsByTagName("h1")[0].innerHTML=`<img id="flag" src="photo/flag2 (1).png" alt="">${player2} Wins`;
        now(x,y);
    }

 }

