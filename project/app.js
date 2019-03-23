
var scores , roundScore, activePlayer,dice;

scores= [0,0];
roundScore = 0;
activePlayer = 0;

  //  console.log(dice);


   // var x = document.querySelector('#score-0').textContent;
    // console.log(x);
//to hide the dice
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    

    document.querySelector('.btn-roll').addEventListener('click',function(){

    	 //random no

    	 var dice = Math.floor(Math.random()*6)+1;

         //result display

         var diceDom = document.querySelector('.dice');
         diceDom.style.display = 'block';
         diceDom.src = 'dice-' +  dice + '.png';

         //case 1 condition
         if(dice !== 1){
         	//add 
         	roundScore += dice;
         	    document.querySelector('#current-'+ activePlayer).textContent = roundScore;

         }
         else{
         	//nxt player
         	nextPlayer(); 
         }

    });

    document.querySelector('.btn-hold').addEventListener('click',function(){
    	scores[activePlayer]  += roundScore;

    	document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

    	if(scores >= 100){
    		document.querySelector('#name-'+activePlayer).textContent = 'winner';
    	}
    	else
    	{
    			nextPlayer();
    	}

    
    })

       
function nextPlayer(){
	activePlayer === 0 ? activePlayer  = 1 : activePlayer = 0;
         	roundScore = 0;
         	document.getElementById('current-0').textContent = '0';
         	document.getElementById('current-1').textContent = '0';

         	document.querySelector('.player-0-panel').classList.toggle('active');
         	document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display = 'none';
         
}
