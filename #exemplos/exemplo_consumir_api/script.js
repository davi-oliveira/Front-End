fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/DF/distritos')
  .then(response => response.json())
  .then(json => console.log(json))