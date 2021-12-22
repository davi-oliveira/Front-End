let result = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/distritos?orderBy=nome')

.then(response => response.json())
.then(json => reject())
.catch(err => {
  alert('Ocorreu um erro!')
  console.log('erro')
})