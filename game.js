function now( x , y)
{
    if(x==1)document.getElementsByClassName("one")[0].src="../photo/dice1.png";
    if(x==2)document.getElementsByClassName("one")[0].src="../photo/dice2.png";
    if(x==3)document.getElementsByClassName("one")[0].src="../photo/dice3.png";
    if(x==4)document.getElementsByClassName("one")[0].src="../photo/dice4.png";
    if(x==5)document.getElementsByClassName("one")[0].src="../photo/dice5.png";
    if(x==6)document.getElementsByClassName("one")[0].src="../photo/dice6.png";
    if(y==1)document.getElementsByClassName("two")[0].src="../photo/dice1.png";
    if(y==2)document.getElementsByClassName("two")[0].src="../photo/dice2.png";
    if(y==3)document.getElementsByClassName("two")[0].src="../photo/dice3.png";
    if(y==4)document.getElementsByClassName("two")[0].src="../photo/dice4.png";
    if(y==5)document.getElementsByClassName("two")[0].src="../photo/dice5.png";
    if(y==6)document.getElementsByClassName("two")[0].src="../photo/dice6.png";
}


 function change() {
    var x=Math.floor(Math.random()*6+1);
    var y=Math.floor(Math.random()*6+1);
    document.getElementsByTagName("button")[0].innerHTML="CONTINUE";
    if(x==y)
    {
        document.getElementsByTagName("h1")[0].innerHTML="DRAW";
        now(x,y);
    }
     else if(x>y){
        document.getElementsByTagName("h1")[0].innerHTML='<img id="flag" src="photo/flag2 (1).png" alt="">Player1 wins';
        now(x,y);
    }
    else {
        document.getElementsByTagName("h1")[0].innerHTML='<img id="flag" src="photo/flag2 (1).png" alt="">Player2 Wins';
        now(x,y);
    }

 }
