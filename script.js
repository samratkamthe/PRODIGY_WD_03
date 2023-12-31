let variable = 'o';
let counter = 0;

const handleClick = (id) => {
    
if(!document.getElementById(id).disabled&&counter<=8){
if (variable === 'o') {
    variable = 'x';
    document.getElementById(id).textContent = variable;
    document.getElementById(id).disabled=true;
    
  } else {
    variable = 'o';
    document.getElementById(id).textContent = variable;
    document.getElementById(id).disabled=true;



  }
  counter++;
  if(counter==9){
    if(document.getElementById("box1").textContent==document.getElementById("box2").textContent&&document.getElementById("box3").textContent==document.getElementById("box2").textContent){
        document.getElementById("box1").style.border="2px solid black"
        document.getElementById("box2").style.border="2px solid black"
        document.getElementById("box3").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box1").textContent} won!`;

    }
    else if(document.getElementById("box4").textContent==document.getElementById("box5").textContent&&document.getElementById("box5").textContent==document.getElementById("box6").textContent){
        document.getElementById("box4").style.border="2px solid black"
        document.getElementById("box5").style.border="2px solid black"
        document.getElementById("box6").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box4").textContent} won!`;
    }
    else if(document.getElementById("box7").textContent==document.getElementById("box8").textContent&&document.getElementById("box8").textContent==document.getElementById("box9").textContent){
        document.getElementById("box7").style.border="2px solid black"
        document.getElementById("box8").style.border="2px solid black"
        document.getElementById("box9").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box7").textContent} won!`;
    }
    else if(document.getElementById("box1").textContent==document.getElementById("box4").textContent&&document.getElementById("box4").textContent==document.getElementById("box7").textContent){
        document.getElementById("box1").style.border="2px solid black"
        document.getElementById("box4").style.border="2px solid black"
        document.getElementById("box7").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box1").textContent} won!`;
    }
    else if(document.getElementById("box2").textContent==document.getElementById("box5").textContent&&document.getElementById("box5").textContent==document.getElementById("box8").textContent){
        document.getElementById("box2").style.border="2px solid black"
        document.getElementById("box5").style.border="2px solid black"
        document.getElementById("box8").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box2").textContent} won!`;
    }
    else if(document.getElementById("box3").textContent==document.getElementById("box6").textContent&&document.getElementById("box6").textContent==document.getElementById("box9").textContent){
        document.getElementById("box3").style.border="2px solid black"
        document.getElementById("box6").style.border="2px solid black"
        document.getElementById("box9").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box3").textContent} won!`;
    }
    else if(document.getElementById("box1").textContent==document.getElementById("box5").textContent&&document.getElementById("box5").textContent==document.getElementById("box9").textContent){
        document.getElementById("box1").style.border="2px solid black"
        document.getElementById("box5").style.border="2px solid black"
        document.getElementById("box9").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box1").textContent} won!`;
    }
    else if(document.getElementById("box3").textContent==document.getElementById("box5").textContent&&document.getElementById("box5").textContent==document.getElementById("box7").textContent){
        document.getElementById("box3").style.border="2px solid black"
        document.getElementById("box5").style.border="2px solid black"
        document.getElementById("box7").style.border="2px solid black"

        document.getElementById('text').textContent =`player with sign ${document.getElementById("box3").textContent} won!`;
    }
    else{
  document.getElementById('text').textContent ="TRY AGAIN!";
}
}
  
  }
 
};

retry=()=>{
    variable='o';
    counter=0;
        document.getElementById("box1").textContent='.';
        document.getElementById("box2").textContent='.';
        document.getElementById("box3").textContent='.';
        document.getElementById("box4").textContent='.';
        document.getElementById("box5").textContent='.';
        document.getElementById("box6").textContent='.';
        document.getElementById("box7").textContent='.';
        document.getElementById("box8").textContent='.';
        document.getElementById("box9").textContent='.';
        ////
        document.getElementById("box1").disabled=false;
        document.getElementById("box2").disabled=false;
        document.getElementById("box3").disabled=false;
        document.getElementById("box4").disabled=false;
        document.getElementById("box5").disabled=false;
        document.getElementById("box6").disabled=false;
        document.getElementById("box7").disabled=false;
        document.getElementById("box8").disabled=false;
        document.getElementById("box9").disabled=false;
        ///
        document.getElementById("box1").style.border='none';
        document.getElementById("box2").style.border='none';
        document.getElementById("box3").style.border='none';
        document.getElementById("box4").style.border='none';
        document.getElementById("box5").style.border='none';
        document.getElementById("box6").style.border='none';
        document.getElementById("box7").style.border='none';
        document.getElementById("box8").style.border='none';
        document.getElementById("box9").style.border='none';
        document.getElementById('text').textContent ="Player x (vs) Player o";


}
