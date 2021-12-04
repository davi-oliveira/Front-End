var altura = 0 //cria uma variável global de valor 0
var largura = 0 //cria uma variável global de valor 0
var vidas = 1 //cria uma variável global de valor 1
var tempo = 15 //cria uma variável global de valor 0

var criaMosquitoTempo = 1500 //cria uma variável global de valor 1500

var nivel = window.location.search //Verifica qual opção de nível foi marcada pelo usuário
nivel = nivel.replace('?', '') 



//=========== Caso o nível for escolhido para normal o tempo para o mosquito "trocar" de posição será de 1,5 segundos
if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} 


//=========== Caso o nível for escolhido para difícil o tempo para o mosquito "trocar" de posição será de 1 segundo
else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} 


//=========== Caso o nível for escolhido para chucknorris o tempo para o mosquito "trocar" de posição será de 750 milissegundos
else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}
//=============================================================================================================================


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight //checa a altura da janela
	largura = window.innerWidth //checa a largura da janela

	console.log(largura, altura) //Exibe a altura e largura no console
}

ajustaTamanhoPalcoJogo() //Chama a função ajustaTamanhoPalcoJogo

var cronometro = setInterval(function() { //Checar o tempo e iniciar ações necessárias para determinados intervalos 

	tempo -= 1 //remove 1 segundo de tempo

	if(tempo < 0) { //caso o tempo sera menor que 0 
		clearInterval(cronometro) //encerra o timer de cronometro (para de contar os segundos)
		clearInterval(criaMosca) //encerrar o timer do criarMosca
		window.location.href = 'vitoria.html' //exibe o script de vitória
	} else { //caso não seja menor que 0
		document.getElementById('cronometro').innerHTML = tempo //atualiza o tempo restante
	}
	
}, 1000) //a função vai se repetir a cada 1s


function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) { //Caso o jogador tenha perdido todas as suas vidas

			window.location.href = 'fim_de_jogo.html' //Exibe o script de fim de jogo (game over)
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" //Atualiza o coração na parte inferior da tela para o adequado

			vidas++ // acrescenta +1 na variável vidas
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90 // verifica uma posição aleatória do eixo X da tela para aparecer o mosquito
	var posicaoY = Math.floor(Math.random() * altura) - 90 // verifica uma posição aleatória do eixo Y da tela para aparecer o mosquito

	posicaoX = posicaoX < 0 ? 0 : posicaoX //Caso a posicaoX seja menor que 0 o valor será arredondado para 0, do contrário retornará a própria posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY //Caso a posicaoY seja menor que 0 o valor será arredondado para 0, do contrário retornará a própria posicaoY

	console.log(posicaoX, posicaoY) //Mostrará no console ambas as posições

	//criar o elemento html
	var mosquito = document.createElement('img') //cria o elemento mosquito
	mosquito.src = 'imagens/mosquito.png' //Insere o link da imagem do mosquito no elemtno
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()  //Escolherá um tamanho e um lado para o mosquito aparecer
	mosquito.style.left = posicaoX + 'px' //gera o mosquito na localização posicãoX (horizontalmente)
	mosquito.style.top = posicaoY + 'px' //gera o mosquito na localização posicãoX (verticalmente)
	mosquito.style.position = 'absolute' //torna a posição do mosquito absoluta
	mosquito.id = 'mosquito' //seta o id do mosquito para 'mosquito'
	
	//=============== CASO O USUÁRIO CLIQUE SOBRE O MOSQUITO O MESMO SERÁ REMOVIDO DA TELA
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() { //Determinará o tamanho do mosquito que vai aparecer na tela
	var classe = Math.floor(Math.random() * 3) //Gera um valor randômico de 3 posibilidades (0,1 ou 2)
	
	switch(classe) {
		case 0: //caso classe == 0
			return 'mosquito1' //Retorna a string 'mosquito1'
		
		case 1://caso classe == 1
			return 'mosquito2' //Retorna a string 'mosquito2'

		case 2://caso classe == 2
			return 'mosquito3' //Retorna a string 'mosquito3'
	}
}

function ladoAleatorio() { //Determinará um dos 2 lados da tela para aparecer o mosqiuto
	var classe = Math.floor(Math.random() * 2) //Gera um valor randômico de 2 possibilidades (0 ou 1)
	
	switch(classe) {
		case 0: //Caso classe == 0
			return 'ladoA' //Retorna a string 'ladoA'
		
		case 1: //Caso classe == 1
			return 'ladoB' //Retorna a string 'ladoA'

	}
}

