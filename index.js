function jugar(e){
	var computer = Math.floor(Math.random()*3);
	var user = e.target.name.toLowerCase();
	var winner
	var resultP = document.getElementById("resultText");
	var userImg = document.getElementById("userImg");
	var computerImg = document.getElementById("computerImg");
	var tblResultado, newRow, newCell1, newCell2, newCell3, roundNum, userScore, computerScore

	roundNum = parseInt(document.getElementById("totalRounds").textContent) + 1;

	if (roundNum > 10) {
		alert("llegaste al maximo de jugadas, resetea para seguir jugando");
		return;
	}

	if (computer === 0) {
		computer = "rock";
	} else if (computer === 1) {
		computer = "paper";
	} else {
		computer = "scissors";
	}

	switch (user) {
		case "rock":
			switch (computer) {
				case "rock":
					winner = "tie";
					break;
				case "paper":
					winner = "computer";
					break;
				case "scissors":
					winner = "user";
					break;
			}
			break;
		case "paper":
			switch (computer) {
				case "rock":
					winner = "user";
					break;
				case "paper":
					winner = "tie";
					break;
				case "scissors":
					winner = "computer";
					break;
			}
			break;
		case "scissors":
			switch (computer) {
				case "rock":
					winner = "computer";
					break;
				case "paper":
					winner = "user";
					break;
				case "scissors":
					winner = "tie";
					break;
			}
			break;
	}
	console.log(user + " " + computer);

	userImg.src = 'imgs/' + user + '.png';
	computerImg.src = 'imgs/' + computer + '.png';


	
	userScore = parseInt(document.getElementById("totalUser").textContent);
	computerScore = parseInt(document.getElementById("totalComputer").textContent);
	

	tblResultado = document.getElementById("tblScore").getElementsByTagName('tbody')[0];
	newRow = tblResultado.insertRow();
	newCell1 = newRow.insertCell(0);
	newCell2 = newRow.insertCell(1);
	newCell3 = newRow.insertCell(2);
	var textRounds = document.createTextNode(roundNum);
	var textUserScore = document.createTextNode(userScore);
	var textComputerScore = document.createTextNode(computerScore);

	newCell1.appendChild(textRounds);
	

	if (winner === "tie") {
		resultP.innerHTML = "Resultado: Empate";
		newCell2.appendChild(document.createTextNode("0"));
		newCell3.appendChild(document.createTextNode("0"));
	} else if (winner === "user") {
		resultP.innerHTML = 'Resultado: Ganador "Usuario"';
		userScore += 1;
		newCell2.appendChild(document.createTextNode("1"));
		newCell3.appendChild(document.createTextNode("0"));
		document.getElementById("totalUser").textContent = parseInt(document.getElementById("totalUser").textContent) +1;
	} else {
		resultP.innerHTML = 'Resultado: Ganador "Computadora"';
		computerScore += 1;
		newCell2.appendChild(document.createTextNode("0"));
		newCell3.appendChild(document.createTextNode("1"));
		document.getElementById("totalComputer").textContent = parseInt(document.getElementById("totalComputer").textContent) +1;
	}

	document.getElementById("totalRounds").textContent = roundNum;
	
	
};

function reset(e){
	var resultP = document.getElementById("resultText");
	var userImg = document.getElementById("userImg");
	var computerImg = document.getElementById("computerImg");

	resultP.innerHTML = '¿Quién Ganará?';
	userImg.src = 'imgs/rockpaperscissors.png';
	computerImg.src = 'imgs/rockpaperscissors.png';

	var parent = document.getElementById("tblScore").getElementsByTagName('tbody')[0];
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.firstChild);
	}

	document.getElementById("totalRounds").textContent = "0";
	document.getElementById("totalUser").textContent = "0";
	document.getElementById("totalComputer").textContent = "0";
}

const btnJugar = document.querySelectorAll('.jugar');
const btnReset = document.getElementById('btnReset');

btnJugar.forEach(button => button.addEventListener('click', jugar));
btnReset.addEventListener('click', reset);