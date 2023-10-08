
window.addEventListener('load', function () {
    //init var to keep track of turn
    let round = 0;
    let turn = 1;
    let over = false;
    //init board
    let board = [
            ["","",""],
            ["","",""],
            ["","",""]
                ];
    let showTurn = this.document.getElementById('showTurn');

    // add event listener when the game board is clicked
    this.document.getElementById('tic').addEventListener('click',function(e){
        game(e);
    })

    //game function
    function game(e){
        //if game not over
        if(over != true){
                //set html to blank
                document.getElementById('announce').innerHTML = "";
                //if the target is ticbox and empty
                if(e.target.className == "ticbox" && e.target.innerHTML == ""){
                    if(turn == 1){
                        updateBoard(e.target.id,turn);
                        //set image
                        e.target.innerHTML = '<img src="img/redO.jpg" alt=""></img>';
                        //announce turn
                        showTurn.innerHTML = "It is Player 2 turn";
                        //set turn to other player
                        turn =2;
                        round++;
                        //check for win
                        if(checkWin('o')){
                            showTurn.innerHTML ="Click To Play Again";
                            showTurn.style.color = "blue";
                            showTurn.addEventListener('click',reset);
                            document.getElementById('announce').innerHTML = "Player 1 has Won!!!";
                            over = true;
                        }
                    }
                    else{
                        updateBoard(e.target.id,turn);
                        e.target.innerHTML = '<img src="img/redX.jpg" alt=""></img>'; 
                        showTurn.innerHTML = "It is Player 1 turn";
                        turn = 1;
                        round++;
                        if(checkWin('x')){
                            showTurn.innerHTML ="Click To Play Again";
                            showTurn.style.color = "blue";
                            showTurn.addEventListener('click',reset);
                            document.getElementById('announce').innerHTML = "Player 2 has Won!!!";
                            over = true;
                        }
        
                    }
                }   
                //check to see if draw
                if(round == 9  && over != true){
                    showTurn.innerHTML ="Click To Play Again";
                    showTurn.style.color = "blue";
                    showTurn.addEventListener('click',reset);
                    document.getElementById('announce').innerHTML = "It a draw!";
                    over = true;
                }
                
            }
    }
    //add check board function
    function updateBoard(num,turn){
        //change symbol base on the turn
        let symbol = 'o';
        if(turn != 1){
            symbol = 'x';
        }
        switch(Number(num)){
            case 1:
                board[0][0] = symbol;
                break;
            case 2:
                board[0][1] = symbol;
                break;
            case 3:
                board[0][2] = symbol;
                break;
            case 4:
                board[1][0] = symbol;
                break;  
            case 5:
                board[1][1] = symbol;
                break;  
            case 6:
                board[1][2] = symbol;
                break;  
            case 7:
                board[2][0] = symbol;
                break;  
            case 8:
                board[2][1] = symbol;
                break;  
            case 9:
                board[2][2] = symbol;
                break;

        }
        console.log(board);
    }//end update board function

    function checkWin(symbol){
        let n = 3;
        //check col
        for(let x = 0; x < n; x++){
            for(let i = 0; i < n; i++){
                if(board[x][i] != symbol )
                    break;
                if(i == n-1){
                    //report win for s
                    console.log(symbol+'win');
                    return true;
                }
            }
        }
        //check row
        for(let y = 0; y < n; y++){
            for(let i = 0; i < n; i++){
                if(board[i][y] != symbol)
                    break;
                if(i == n-1){
                    //report win for s
                    console.log(symbol+'win');
                    return true;

                }
            }
        }
        //check diag
        for(let i = 0; i < n; i++){
            if(board[i][i] != symbol)
                break;
            if(i == n-1){
                //report win for s
                console.log(symbol+'win');
                return true;

            }
        }

        for(let i = 0; i < n; i++){
            if(board[i][(n-1)-i] != symbol)
                break;
            if(i == n-1){
                //report win for s
                console.log(symbol+'win');
                return true;


            }
        }
        
    }
    //reset variable
    function reset(){
        turn = 1;
        over = false;
        round = 0;
        board = [
                ["1","2","3"],
                ["4","5","6"],
                ["7","8","9"]
                    ];
        showTurn.style.color = "black";
        
        showTurn.removeEventListener('click',reset);
        showTurn.innerHTML = "It is Player 1 turn";
        let test = document.getElementsByClassName("ticbox");
        for (let i = 0; i < test.length; i++) {
            test[i].innerHTML = "";
          }
    }

})//end load event listener