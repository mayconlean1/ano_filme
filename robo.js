const puppeteer = require('puppeteer'); // robo para webscrapping
const fs = require('fs'); // file system para escrever JSON
//var filmeJson = require('./filme.json')
//var fdatajson = require('./filmeData.json')

//console.log(fdatajson.filme)

/* Estrutura IFE
(async () => {
})();
*/

const robo = async parametro =>{
    var input = parametro;
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    const url = `https://www.google.com/search?source=hp&ei=5JdKX9zNGOSm5OUPisGoUA&q=${input}&oq=${input}&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyAgguMgIIADICCC4yAggAMgIIADICCC4yAggAMgIIADICCAA6BQgAELEDOggIABCxAxCDAToFCC4QsQM6CAguELEDEIMBOg4ILhCxAxCLAxCoAxCbAzoECAAQClDsQFj3jwFg8qcBaAhwAHgAgAGpAYgBnxOSAQQwLjIwmAEAoAEBqgEHZ3dzLXdperABALgBAg&sclient=psy-ab&ved=0ahUKEwjcz8Oh_8DrAhVkE7kGHYogCgoQ4dUDCAc&uact=5`
    await page.goto(url);
    //await page.screenshot({path: 'example.png'});
    var data =  await page.evaluate(()=>{
      const nodeData = document.querySelector('.LrzXr.kno-fv').textContent
      return nodeData
    })
    fs.writeFile('filmeData.json' , JSON.stringify({'filme': input, 'data' : data}) , err =>{
      if(err) throw new Error ('Error')
      //console.log('OK')
    })
    //console.log(data)
    await browser.close();
  }
 
    robo('missao impossivel 1')
  