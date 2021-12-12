let result = fetch('https://essa-api-nao-existe')

.then(response => response.json())
.then(json => console.log(json))
.catch(err => {
  alert('Ocorreu um erro!')
  console.log('erro')
})