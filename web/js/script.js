
function assignIndex(button) {
    if (button == "00") {
        let newButton = 0;
        return newButton;
    }
    if (button == "01") {
        let newButton = 1;
        return newButton;
    }
    if (button == "02") {
        let newButton = 2;
        return newButton;
    }
    if (button == "10") {
        let newButton = 3;
        return newButton;
    }
    if (button == "11") {
        let newButton = 4;
        return newButton;
    }
    if (button == "12") {
        let newButton = 5;
        return newButton;
    }
    if (button == "20") {
        let newButton = 6;
        return newButton;
    }
    if (button == "21") {
        let newButton = 7;
        return newButton;
    }
    if (button == "22") {
        let newButton = 8;
        return newButton;
    }
}

function gameBoard(){
    var str = "";
    var obj = document.getElementById("board");

    for (var i=0;i<3;i++) {
        str += "<div class='row' id='test_row" + i + "'>";
        var str2 = "";

        for (var j = 0; j<3;j++) {
     //       var key = "index" + String(i) + String(j);
            str2 += "<div class='col' id ='test_col'>";
            var key2 = String(i) + String(j);
            
            str2 += "<button type='button' ";
            str2 += "id='" + key2 + "' ";
            
            str2 += "class='btn btn-secondary' onclick=whoseTurn('" + key2 + "')> </button>";
            str2 += "</div>";
        }
        
        str += str2;
        str += "</div>";
        
    }
    
    obj.innerHTML = str;
    

// clickable tiles
    // unique id for each tile
}

var alreadyClicked = [];
var count = 0;
let arrWinner = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function whoseTurn(v){
    console.log(v);


    var obj = document.getElementById(v);
    
    if ((count % 2 == 0) && (!alreadyClicked.includes(v))) {
        
        count++;
        alreadyClicked.push(v);
        let newButton = assignIndex(v);
        obj.innerHTML = "X";
        arrWinner[newButton] = 1;
        checkWinner(arrWinner);

    } else if ((count % 2 == 1) && (!alreadyClicked.includes(v))) {
        
        count++;
        alreadyClicked.push(v);
        let newButton = assignIndex(v);
        obj.innerHTML = "0";
        arrWinner[newButton] = 2;
        checkWinner(arrWinner);
    }

    function checkWinner(a) {
      var winner = document.getElementById("WinnerMsg");
        //Check rows
        if ((a[0] + a[1] + a[2] == 3) && (a[0] != 0 && a[1] != 0 && a[2] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[0] + a[1] + a[2] == 6) && (a[0] != 0 && a[1] != 0 && a[2] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        if ((a[3] + a[4] + a[5] == 3) && (a[3] != 0 && a[4] != 0 && a[5] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[3] + a[4] + a[5] == 6) && (a[3] != 0 && a[4] != 0 && a[5] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        if ((a[6] + a[7] + a[8] == 3) && (a[6] != 0 && a[7] != 0 && a[8] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[6] + a[7] + a[8] == 6) && (a[6] != 0 && a[7] != 0 && a[8] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        //Check columns
        if ((a[0] + a[3] + a[6] == 3) && (a[0] != 0 && a[3] != 0 && a[6] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[0] + a[3] + a[6] == 6) && (a[0] != 0 && a[3] != 0 && a[6] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        if ((a[1] + a[4] + a[7] == 3) && (a[1] != 0 && a[4] != 0 && a[7] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[1] + a[4] + a[7] == 6) && (a[1] != 0 && a[4] != 0 && a[7] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        if ((a[2] + a[5] + a[8] == 3) && (a[2] != 0 && a[5] != 0 && a[8] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[2] + a[5] + a[8] == 6) && (a[2] != 0 && a[5] != 0 && a[8] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        //Check diagonals
        if ((a[0] + a[4] + a[8] == 3) && (a[0] != 0 && a[4] != 0 && a[8] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[0] + a[4] + a[8] == 6) && (a[0] != 0 && a[4] != 0 && a[8] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       
        if ((a[2] + a[4] + a[6] == 3) && (a[2] != 0 && a[4] != 0 && a[6] != 0)) {
          console.log("Winner is X!")
          winner.innerHTML = "Winner is X!";
          document.getElementById('board').style.display="none";
        }
        if ((a[2] + a[4] + a[6] == 6) && (a[2] != 0 && a[4] != 0 && a[6] != 0)) {
          console.log("Winner is O!")
          winner.innerHTML = "Winner is O!";
          document.getElementById('board').style.display="none";
        }
       }

// x gets first move
// increment counter to keep track of whose turn
// counter even = x turn, counter odd = o turn
// array keeping track of used tiles
// cut off function to used tiles based on array
// html element displaying current player
}

function printSymbol(){
// take in unique id
// insert html/img into row-column of unique id
}

function winner(){
// check for rows of 3
}

function pageRefresh(){
// reset game
}

function start(){  
    console.log('At Start');

    gameBoard();
}