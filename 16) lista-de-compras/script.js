const localStorageItens = JSON.parse(localStorage.getItem('lista'))
let lista = localStorage.getItem('lista') !== null ? localStorageItens : []
let frmItens = document.getElementById('exibirItens')

const updateLocalStorage = () => {
    localStorage.setItem('lista', JSON.stringify(lista))
}

verSacola(true)

function verSacola(funciona){
    if(lista.length == 0 && funciona != true){
        return alert('Não existem itens na sua sacola!')
    }
    frmItens.innerHTML = ""
    lista.forEach(function(texto, numero){
        frmItens.innerHTML += `${numero+1} - ${texto}<br>`
    })
}


btnAdd.addEventListener('click', function(){
    if(document.getElementById('produto').value === ""){
        return alert('Você não escreveu o nome do produto!')
    }
    lista.push(document.getElementById('produto').value)
    updateLocalStorage()
    document.getElementById('produto').value = ""
    document.getElementById('produto').focus()
    verSacola()
})

btnLimpar.addEventListener('click', function(){
    if(lista.length == 0){
        return alert('Não existem itens na sua sacola!')
    }
    lista = []
    alert('Sacola limpa com sucesso!')
    verSacola(true)
    updateLocalStorage()
})