var data = ''

const resp = document.getElementById('resp')

// Bloco Verifica atualizaçao do 'filmeData.json' para atualizar no HTML
let ajax = new XMLHttpRequest();
ajax.open('GET' , 'filmeData.json')
ajax.onreadystatechange = function(){
  //console.log('ajax.readyState', ajax.readyState ,'ajax.status', ajax.status)
  //console.log(ajax.readyState === 4 && ajax.status === 200)
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

function load(){
  localStorage.setItem('re',true)
}

if(localStorage.getItem('re') == 'true'){
  console.log('entrou')
  localStorage.setItem('re',false)
  location.reload()
}

