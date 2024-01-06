let variable = 'O';
document.getElementById('retrye').style.display = 'none';

const handleClick = (id) => {
  if (!document.getElementById(id).disabled) {
    if (variable === 'O') {
      variable = 'X';
      document.getElementById(id).textContent = variable;
      document.getElementById(id).disabled = true;
    } else {
      variable = 'O';
      document.getElementById(id).textContent = variable;
      document.getElementById(id).disabled = true;
    }


    if (document.getElementById("box1").textContent == document.getElementById("box2").textContent && document.getElementById("box2").textContent == document.getElementById("box3").textContent && document.getElementById("box1").textContent != '.' && document.getElementById("box2").textContent != '.' && document.getElementById("box3").textContent != '.') {

      disabl('box1', 'box2', 'box3');


    }
    else if (document.getElementById("box4").textContent == document.getElementById("box5").textContent && document.getElementById("box5").textContent == document.getElementById("box6").textContent && document.getElementById("box4").textContent != '.' && document.getElementById("box5").textContent != '.' && document.getElementById("box6").textContent != '.') {

      disabl('box4', 'box5', 'box6');

    }
    else if (document.getElementById("box7").textContent == document.getElementById("box8").textContent && document.getElementById("box8").textContent == document.getElementById("box9").textContent && document.getElementById("box7").textContent != '.' && document.getElementById("box8").textContent != '.' && document.getElementById("box9").textContent != '.') {

      disabl('box7', 'box8', 'box9');

    }
    else if (document.getElementById("box1").textContent == document.getElementById("box4").textContent && document.getElementById("box4").textContent == document.getElementById("box7").textContent && document.getElementById("box1").textContent != '.' && document.getElementById("box4").textContent != '.' && document.getElementById("box7").textContent != '.') {

      disabl('box1', 'box4', 'box7');

    }
    else if (document.getElementById("box2").textContent == document.getElementById("box5").textContent && document.getElementById("box5").textContent == document.getElementById("box8").textContent && document.getElementById("box2").textContent != '.' && document.getElementById("box5").textContent != '.' && document.getElementById("box8").textContent != '.') {

      disabl('box2', 'box5', 'box8');

    }
    else if (document.getElementById("box3").textContent == document.getElementById("box6").textContent && document.getElementById("box6").textContent == document.getElementById("box9").textContent && document.getElementById("box3").textContent != '.' && document.getElementById("box6").textContent != '.' && document.getElementById("box9").textContent != '.') {

      disabl('box3', 'box6', 'box9');

    }
    else if (document.getElementById("box1").textContent == document.getElementById("box5").textContent && document.getElementById("box5").textContent == document.getElementById("box9").textContent && document.getElementById("box1").textContent != '.' && document.getElementById("box5").textContent != '.' && document.getElementById("box9").textContent != '.') {

      disabl('box1', 'box5', 'box9');

    }
    else if (document.getElementById("box3").textContent == document.getElementById("box5").textContent && document.getElementById("box5").textContent == document.getElementById("box7").textContent && document.getElementById("box3").textContent != '.' && document.getElementById("box5").textContent != '.' && document.getElementById("box7").textContent != '.') {

      disabl('box3', 'box5', 'box7');
    }
    else if (document.getElementById("box1").textContent != '.' && document.getElementById("box2").textContent != '.' && document.getElementById("box3").textContent != '.' && document.getElementById("box4").textContent != '.' && document.getElementById("box5").textContent != '.' && document.getElementById("box6").textContent != '.' && document.getElementById("box7").textContent != '.' && document.getElementById("box8").textContent != '.' && document.getElementById("box9").textContent != '.') {

      document.getElementById('retrye').style.display = 'block';
      document.getElementById('text').textContent = "TRY AGAIN!";
    }


  }

};
disabl = (bx1, bx2, bx3) => {



  document.getElementById(bx1).style.border = "2px solid black"
  document.getElementById(bx2).style.border = "2px solid black"
  document.getElementById(bx3).style.border = "2px solid black"
  document.getElementById('text').textContent = `Player ${document.getElementById(bx1).textContent} won!`;
  document.getElementById('retrye').style.display = 'block';

  document.getElementById("box1").disabled = true;
  document.getElementById("box2").disabled = true;
  document.getElementById("box3").disabled = true;
  document.getElementById("box4").disabled = true;
  document.getElementById("box5").disabled = true;
  document.getElementById("box6").disabled = true;
  document.getElementById("box7").disabled = true;
  document.getElementById("box8").disabled = true;
  document.getElementById("box9").disabled = true;


}

retry = () => {
  variable = 'O';
  document.getElementById("box1").textContent = '.';
  document.getElementById("box2").textContent = '.';
  document.getElementById("box3").textContent = '.';
  document.getElementById("box4").textContent = '.';
  document.getElementById("box5").textContent = '.';
  document.getElementById("box6").textContent = '.';
  document.getElementById("box7").textContent = '.';
  document.getElementById("box8").textContent = '.';
  document.getElementById("box9").textContent = '.';

  document.getElementById("box1").disabled = false;
  document.getElementById("box2").disabled = false;
  document.getElementById("box3").disabled = false;
  document.getElementById("box4").disabled = false;
  document.getElementById("box5").disabled = false;
  document.getElementById("box6").disabled = false;
  document.getElementById("box7").disabled = false;
  document.getElementById("box8").disabled = false;
  document.getElementById("box9").disabled = false;

  document.getElementById("box1").style.border = 'none';
  document.getElementById("box2").style.border = 'none';
  document.getElementById("box3").style.border = 'none';
  document.getElementById("box4").style.border = 'none';
  document.getElementById("box5").style.border = 'none';
  document.getElementById("box6").style.border = 'none';
  document.getElementById("box7").style.border = 'none';
  document.getElementById("box8").style.border = 'none';
  document.getElementById("box9").style.border = 'none';
  document.getElementById('text').textContent = "Player 'X' (vs) Player 'O'";
  document.getElementById('retrye').style.display = 'none';


}
