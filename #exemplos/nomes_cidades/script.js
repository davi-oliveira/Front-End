let result = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/distritos?orderBy=nome')
let container = document.querySelector('#editTxt')

result.then(r => {
  return r.json()
}).then(j => {
  j.forEach(element => {
    container.innerHTML += `
      <tr>
        <td>${element.id}</td>
        <td>GO</td>
        <td>${element.nome}</td>
      </tr>
    `
  });
})
