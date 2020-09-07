const fs = require('fs')
const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/' , function(req ,res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/style.css' , function(req ,res){
  res.sendFile(__dirname+'/style.css')
});
app.get('/script.js' , function(req ,res){
  res.sendFile(__dirname+'/script.js')
});
app.get('/filmeData.json' , function(req ,res){
  res.sendFile(__dirname+'/filmeData.json')
});

app.post('/post' ,async (req ,res) =>{
  await robo(req.body.ctext.replace(/ /gi , '+'))
  res.sendFile(__dirname + '/post.html')
});

app.listen('8080')


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
        tdados = {'titulo': 'Erro ao fazer a busca', 'imagem': '' , 'data' : '' }
      }
    return tdados
  })
  fs.writeFile('filmeData.json' , JSON.stringify({'input': input, 'filme': dados.titulo, 'data' : dados.data , 'img' : dados.imagem }) , err =>{
    if(err) throw new Error ('Error')
    //console.log('OK')
  })
  await browser.close();
}


