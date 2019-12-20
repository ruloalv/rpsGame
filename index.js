function jugar(e){
	console.log(e);
};

var btnJugar = document.querySelectorAll('.jugar');
console.log (btnJugar[0].height);
btnJugar.addEventListener('click', jugar(e));