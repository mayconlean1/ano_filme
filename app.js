var filmeJson = require('./filme.json')
var fdatajson = require('./filmeData.json')
const puppeteer = require('puppeteer'); // robo para webscrapping


const fs = require('fs'); // file system para escrever JSON

// host confg
const http = require('http'); // criaçao de server
const express = require('express'); // cria rotas para navegaçao no server
const app = express(); // renomeando express
const bodyParser = require('body-parser'); // acessa o formulario enviado e usado junto com o express

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// host confg
// host server
app.get('/',function(req , res){
  let temopj =  fdatajson
  temopj.load = false
  fs.writeFile('filmeData.json',JSON.stringify(temopj) , err=>{
    if(err) throw new Error('Error')
  })
  res.sendFile(__dirname +'/index.html')
});

app.get('/filmeData.json',function(req , res){ // para usar os arquivos da pasta precisa carregar ele no servidor
  res.sendFile(__dirname +'/filmeData.json')
});

app.get('/script.js',function(req , res){
  res.sendFile(__dirname +'/script.js')
});

app.get('/style.css', function(req , res){
  res.sendFile(__dirname+'/style.css')
});

app.post('/add', function(req,res){
  //app.post #metodo POST submit form POST# para o bodyParser pegar o valor da tag pelo 'name' #req.body.ctext#
  //instalar body parser para receber os dados enviados
  fs.writeFile('filme.json',JSON.stringify(req.body.ctext.replace(/ /gi , '+')) , err=>{
    if(err) throw new Error('Error')
  })
  res.sendFile(__dirname+'/pesquisando.html')
})
app.listen(8080)
// host server






const robo = async parametro =>{
  var input = parametro;
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  const url = `https://www.google.com/search?source=hp&ei=5JdKX9zNGOSm5OUPisGoUA&q=${input}&oq=${input}&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyAgguMgIIADICCC4yAggAMgIIADICCC4yAggAMgIIADICCAA6BQgAELEDOggIABCxAxCDAToFCC4QsQM6CAguELEDEIMBOg4ILhCxAxCLAxCoAxCbAzoECAAQClDsQFj3jwFg8qcBaAhwAHgAgAGpAYgBnxOSAQQwLjIwmAEAoAEBqgEHZ3dzLXdperABALgBAg&sclient=psy-ab&ved=0ahUKEwjcz8Oh_8DrAhVkE7kGHYogCgoQ4dUDCAc&uact=5`
  await page.goto(url);
  //await page.screenshot({path: 'example.png'});
  var dados =  await page.evaluate(()=>{
    let tdados = ''
    if( document.querySelector('.qrShPb.kno-ecr-pt.PZPZlf.mfMhoc') != null){
      tdados = {
      'titulo': document.querySelector('.qrShPb.kno-ecr-pt.PZPZlf.mfMhoc').children[0].textContent, 
      'imagem': document.querySelector('.BA0A6c').children[0].src , 
      'data' : document.querySelector('.LrzXr.kno-fv').textContent,
      'load' : true
      }
      }else{
        tdados = {'titulo': 'Erro ao fazer a busca', 'imagem': '' , 'data' : '' , 'load': true}
      }
    return tdados
  })
  fs.writeFile('filmeData.json' , JSON.stringify({'input': input, 'filme': dados.titulo, 'data' : dados.data , 'img' : dados.imagem , 'load':dados.load}) , err =>{
    if(err) throw new Error ('Error')
    //console.log('OK')
  })
  await browser.close();
}
/*
if (fdatajson.load == true){
  let tempdjson = fdatajson
  tempdjson.load = false
  fs.writeFile('filmeData.json' , JSON.stringify(tempdjson) , err =>{
    if(err) throw new Error ('Error')
    //console.log('OK')
  })
  console.log(tempdjson.load)
}
*/

if (filmeJson != fdatajson.input ){
  robo(filmeJson)
}


