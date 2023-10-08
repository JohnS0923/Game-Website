
window.addEventListener('load', function () {
    // add event listener when the game board is clicked
    this.document.getElementById('tic').addEventListener('click',function(e){
        //set html to blank
        document.getElementById('announce').innerHTML = "";
        //if the target is box
        if(e.target.className == "box"){
            console.log("test");
        }
        console.log(e.target.className);
    })


})//end load event listener