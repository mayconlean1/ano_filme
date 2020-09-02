##########
 31/08/2020
 
 Soluções : Executar um robo que pesquisa no goole, quando encontrado a data é gerado um JSON atualizando automaticamente a página, utilizando os modulos : 'Puppeteer' e 
 'File System'
 
 Dificuldades : Enviar a string com o nome do filme para o robo, para executar a pesquisa desejada.
                Tambem será necessario executar o robo com os novos dados
 
 tentativas : Foi feitas diversa pesquisas para modificar o JSON a partir da pagina, para o robo atualizar automaticamente. Mas sem sucesso. 
 
 ##########
 01/09/2020
 
 Soluções : Para enviar JSON da pagina HTML, foi criado um script para um servidor local onde terá que ser executado pelo terminal (dir/nodemon app.js), para enviar
 um formulário com o método 'POST' , foram utilizados os módulos : 'File System' , 'Express' , 'BodyParser' , 'Nodemon'.
 
 Pendência : Executar um refresh na pagina para mostrar o resultado da busca.
 
 Dificuldade : executar o refresh quando o resultado estiver pronto.
 
  ##########
 02/09/2020
 
 Soluções : Quando enviado o formulário , na página de envio foi feita uma função disparada pelo 'onload' para redirecionar a página principal após o setInterval configurado na função
 
 Dificuladade : A solução ideal seria fazer o redirecionamento a página principal , após o reboot do servidor.
 