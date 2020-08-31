var input = ''
var data = ''
const resp = document.getElementById('resp')

// Como passar uma arquivo JSON para atualizar o Backend 'robo.js' ???????????????

 function pesquisar(){
  let inputText = document.getElementById('ctext');
  input = inputText.value.replace(/ /gi , '+');

};

// Bloco Verifica atualizaçao do 'filmeData.json' para atualizar no HTML
let ajax = new XMLHttpRequest();

ajax.open('GET' , 'filmeData.json')
ajax.onreadystatechange = function(){
  //console.log('ajax.readyState', ajax.readyState ,'ajax.status', ajax.status)
  if (ajax.readyState === 4 && ajax.status === 200){
    data = JSON.parse(ajax.responseText)
    resp.innerHTML = `
    <p>${data.filme.replace( /\+/gi,' ')}</p>
    <p>Lançado em ${ data.data}</p>
    `
  }
};
ajax.onreadystatechange()
ajax.send()
// Fim



