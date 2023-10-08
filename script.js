
window.addEventListener('load', function () {
    // add event listener when the game board is clicked
    let turn = 1;
    this.document.getElementById('tic').addEventListener('click',function(e){
        //set html to blank
        document.getElementById('announce').innerHTML = "";
        //if the target is box
        if(e.target.className == "box"){
            console.log(e.target);
            console.log(turn);
            if(turn == 1){
               e.target.innerHTML = '<img src="img/redO.jpg" alt=""></img>'; 
               turn =0;
            }
            else{
               e.target.innerHTML = '<img src="img/redX.jpg" alt=""></img>'; 
                turn = 1;
            }
        }   
        console.log(e.target.className);
    })


})//end load event listener