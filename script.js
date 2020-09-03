var data = ''
const resp = document.getElementById('resp')

function atualizar(){
  window.location.reload()
}

function click(){
  setTimeout(atualizar , 5000)
}

// Bloco Verifica atualizaçao do 'filmeData.json' para atualizar no HTML
let ajax = new XMLHttpRequest();
ajax.open('GET' , 'filmeData.json')
ajax.onreadystatechange = function(){
  //console.log('ajax.readyState', ajax.readyState ,'ajax.status', ajax.status)
  if (ajax.readyState === 4 && ajax.status === 200){
    data = JSON.parse(ajax.responseText)
    resp.innerHTML = `
    <div>
    <img id="imgcapa" src="${data.img}">
    <h1 id="h1tit">${data.filme}</h1>
    <h2 id="h2data">Lançado em ${ data.data}</h2>
    </div>
    ` 
  }
};
ajax.onreadystatechange()
ajax.send()
// Fim



