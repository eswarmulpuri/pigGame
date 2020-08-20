/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScores,activePlayer,gamePlaying,player0Name,Player1Name,winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying===1){
		//1.random number
		var dice = Math.floor(Math.random()*6) + 1;
		//console.log(typeof dice)
		//2.display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-'+ dice + '.png';
		//3.update the round score if the number is not 1
		if(dice!==1){
			roundScore = roundScore + dice;
			document.getElementById('current-'+ activePlayer).textContent = roundScore;
		}else{
			roundScore = 0;
			document.getElementById('current-'+activePlayer).textContent = roundScore;
			changeActivePlayer();
		}
	}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying===1){
		scores[activePlayer] += roundScore 
		document.getElementById("score-"+activePlayer).textContent = scores[activePlayer]
		roundScore = 0
		document.getElementById('current-'+activePlayer).textContent = roundScore;
		if(document.getElementById("score-"+activePlayer).textContent>=winningScore){
			document.getElementById('name-'+activePlayer).textContent= 'winner is '+document.getElementById('name-'+activePlayer).textContent;
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying = 0
		}else{
			changeActivePlayer();
		}
	}

})



function changeActivePlayer(){
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	activePlayer = activePlayer===1?0:1;
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = 1;
	player0Name = prompt("Please Enter the Name of the first Player","")
	Player1Name = prompt("Please Enter the Name of the second Player","")
	winningScore = prompt("Please Enter the winning Score")
	console.log(player0Name)
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('name-0').textContent = player0Name;
	document.getElementById('name-1').textContent = Player1Name;
}
