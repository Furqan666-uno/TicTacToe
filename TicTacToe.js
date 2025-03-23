let box= document.querySelectorAll('.box');
let reset= document.querySelector('.reset');
let newGame= document.querySelector('.newGame');
let msg= document.querySelector('.msg');
let win= document.querySelector('.win');

let turn= true;//player0, playerX
const winPattern= [ //we are using 2D array for this 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// ------------------------------Reset Button-------------------------------
let resetGame= () =>//this will reset the entire game and hide the winner msg
{
    turn=true;
    enableBox();
    win.classList.add('hide');
};

// -----------------------For inserting O's and X's in the boxes-------------------
box.forEach((box) => //forEach = provides function to each box element. 
{
    box.addEventListener('click', () => 
        {
            console.log('Box was clicked.');
            if (turn === true)
            {
                box.innerText= 'O';//for inserting 'O' inside those boxes.
                turn= false;//next turn will be of player x
            }
            else
            {
                box.innerText= 'X';//for inserting 'X' inside those boxes.
                turn= true;//next turn will be of player O
            }
            box.disabled=true;//to make sure that when player click the button, it gets disabled & can't be clicked again 
  
            checkWin();//line 71
        });
});

// -------------------------------To Disable all the boxes ---------------------
const disableBox= () =>//to disable all the boxes after 1st player wins
{
    for (let b of box)
    {
        b.disabled=true;
    }
};

//-------------------------------To restart the game ------------------------------
const enableBox= () =>//after starting the new game, we need to again enable boxes & make them empty
{
        for (let b of box)
        {
            b.disabled=false;
            b.innerText= '';
        }
};

// ------------------------------To Display Winner----------------------
const showWinner= (winner) =>//this will finally show the winner msg 
{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    win.classList.remove('hide');
    disableBox();//if the 1st player wins, we prevent 2nd player to make furter moves 
};

//--------------------------------To check Winner----------------------------------
const checkWin= () =>
{
    for (let pattern of winPattern)
        {
            let pos1= box[pattern[0]].innerText;//pos1 will store 0th index of each pattern
            let pos2= box[pattern[1]].innerText;//pos2 will store 1st index of each pattern
            let pos3= box[pattern[2]].innerText;//pos3 will store 2nd index of each pattern
        
            if (pos1!='' && pos2!='' && pos3!='')//to made sure we dont count empty spaces as win 
            {
                if (pos1===pos2 && pos2===pos3)
                {
                    console.log('Winner is ',pos1);
                    showWinner(pos1);
                }
            }
        }    
};

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);


