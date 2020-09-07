# ano_filme

 Objetivo :Buscar o ano de lançamento de um filme com um robô no google e retornar na página.
 
 Módulos necessários para a execução: 'Puppeteer' ,  'File System' , 'Express' , 'BodyParser' , 'Nodemon'
 
 ##########
 31/08/2020
 
 Soluções : Executar um robo que pesquisa no goole, quando encontrado a data é gerado um JSON atualizando automaticamente a página, utilizando os módulos : 'Puppeteer' e 
 'File System'
 
 Dificuldades : Enviar a string com o nome do filme para o robô, para executar a pesquisa desejada.
                Também será necessario executar o robô com os novos dados
 
 tentativas : Foi feitas diversa pesquisas para modificar o JSON a partir da pagina, para o robo atualizar automaticamente. Mas sem sucesso. 
 
 ##########
 01/09/2020
 
 Soluções : Para enviar JSON da pagina HTML, foi criado um script para um servidor local onde terá que ser executado pelo terminal (dir/nodemon app.js), para enviar
 um formulário com o método 'POST' , foram utilizados os módulos : 'File System' , 'Express' , 'BodyParser' , 'Nodemon'.
 
 Pendência : Executar um refresh na pagina para mostrar o resultado da busca.
 
 Dificuldade : executar o refresh quando o resultado estiver pronto.
 
  ##########
 02/09/2020
 
 Soluções : Quando enviado o formulário , na página de envio foi feita uma função disparada pelo 'onload' para redirecionar a página principal após o setInterval zerar, configurado na função.
 
 Dificuladade : A solução ideal seria fazer o redirecionamento a página principal , após o reboot do servidor.
 
   ##########
 02/09/2020
 
 feature : retorna uma imagem na pesquisa
 
   ##########
 03/09/2020

 update : Melhora na velocidade de resposta para o usuário

 solução: Foi implementado uma referência no JSON para verificar se os dados do resultado já foram carregados, para deixar um setInterval do
 carregamento da página dinâmico, foi utilizado o localStorage para controlar o timer com limite um limite máximo estipulado.

   ##########
 07/09/2020
 
 update : A resposta será exibida,logo após o carregamento dos dados pesquisados.
 
 solução : Foi utilizado junto a função no script do servidor 'app.post' o 'async' , e o 'await' na chamada da função 'robo()'.
 
 
