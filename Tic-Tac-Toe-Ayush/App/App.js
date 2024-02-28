

console.log("Welcome to My Tic Tac Toe");

let music = new Audio("./GameImagesSound/music.mp3");
let audioTurn = new Audio("./GameImagesSound/ting.mp3");
let gameover = new Audio("./GameImagesSound/gameover.mp3");

let turn = "X";
let isgameover = false;

// ----------------------------------------------- Function to change turn-------------------------------------------------//

const changeTurn = () => {

    return turn === "X" ? "O" : "X";

};



// ----------------------------------------------Function to check for a win--------------------------------------------//

const checkWin = () => {

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) 
		{
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  WON The Game \n\n Reset For New Match";
            

            isgameover = true;
            
			document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            
			gameover.play();
            
			turn = "";
            
			audioTurn.pause();
        }
    });




    // If all boxes are filled and no one has won
    if (!isgameover)
    {
        let allBoxesFilled = true;

        Array.from(boxtext).forEach(box => {

            if (box.innerText === "")
            {
                allBoxesFilled = false;
            }

        });

        if (allBoxesFilled)
        {
            document.querySelector('.info').innerText = "It's a Draw! \n\nClick 'Reset'";
            isgameover = true;
        }
    }



};





// -----------------------------------------------------------------Game Logic----------------------------------------------------------//


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    
	element.addEventListener('click', () => {
    
		if (boxtext.innerText === '') 
		{
            boxtext.innerText = turn;
			
            turn = changeTurn();
            
			audioTurn.play();
            
			checkWin();
            
			if (!isgameover) 
			{
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});




// ----------------------------------------------------------------------Add on click listener to reset button-----------------------------------------//



reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll(".boxtext");
    
	Array.from(boxtexts).forEach(element => {
    
		element.innerText = "";

    });

    turn = "X"; // Do turn restart from X turn 
    
	isgameover = false; // make isgameover false bcz its restart
    
	document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    
	// restart also make kitty back 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
});
