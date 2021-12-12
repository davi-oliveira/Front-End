const p = new Promise((resolve, reject) => {
	setTimeout(() => resolve('resolvida'), 3000)
	setTimeout(() => resolve('rejeitada'), 3000)
})

let saida = document.querySelector('#saidaTexto')

saida.innerHTML = 'pendente'

p.then((res) => {
	saida.innerHTML = res
}, (rej) => {
	saida.innerHTML = 'não resolvida'
})
