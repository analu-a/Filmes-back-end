/*****************************************************
 * Objetivo: Criar uma API de filmes                 *
 * Data: 23/01/2024                                  *
 * Autor: Ana Luiza                                  *
 * Versão: 1.0                                       *
*****************************************************/

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  *
 * Para realizar a conexão com o banco de dados precisamos utilizar uma dependencia *
 *      -SEQUELIZE ORM                                                              *
 *      -PRISMA ORM                                                                 *
 *      -FASTFY ORM                                                                 *
 * Para utilizar o prisma precisamos instalar as sseguinte dependencias             *
 * npm install prisma --save                                                        *
 *npm install @prisma/client --save                                                 *
 *                                                                                  *
 * Após a instalação do prisma, devemos rodar o comando abaixo para inicializar     *
 * npx prisma init                                                                  * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  */ 

const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=> {

    response.header('Access-Control-allow-Origin', '*')

    response.header('Access-Control-allow-Methods', 'GET')

    app.use(cors())

    next()

})

//Cria um objeto do tipo json para receber os dados via body nas resquisições post ou put
const bodyParserJSON = bodyParser.json()

/* **************************** Imports de arquivos e bibliotecas do projeto **********/

const controllerFilmes = require('./controller/controller_filme')

//************************************************************************************** 

app.get('/v1/FilmesACME/filmes', cors(), async function(request, response, next){
    let listarFilmes = require('./controller/filmes_acme')
    let filmes = listarFilmes.getFilmes()

    if(filmes){
        response.json(filmes)
        response.status(200)
    } else{
        response.json({ERRO: "Desculpe, ocorreu algum problema"})
        response.status(404)
    }
    
})



app.get('/v1/FilmesACME/filmes/:id', cors(), async function(request, response, next){
    let id_filmes = request.params.id

    let pesquisarFilmesId = require('./controller/filmes_acme')
    let buscarId = pesquisarFilmesId.getIdFilmes(id_filmes)

    if(buscarId){
        response.json(buscarId)
        response.status(200)
    } else{
        response.json({ERRO: "Desculpe, ocorreu algum problema"})
        response.status(404)
    }
    
})


app.get('/v2/FilmesACME/filmes', cors(), async function(request, response,next){

    //chama a função para retornar os dados do filmes
    let dadosFilmes = await controllerFilmes.getListarfilmes()

        response.status(dadosFilmes.status_code)
        response.json(dadosFilmes)
        
   
})


app.get('/v2/FilmesACME/filme/:id', cors(), async function(request, response, next){
    //recebe o id da requisição do filme
    let idFilme = request.params.id

    let dadosFilme= await controllerFilmes.getBuscarFilme(idFilme)

    response.status(dadosFilme.status_code)
    response.json(dadosFilme)
})



app.get('/v2/FilmesACME/filmes/filtro', cors(), async function(request, response, next){
    let filmeNome = request.query.nomeFilme

    let procurarFilme = await controllerFilmes.getNomeFilme(filmeNome)

        response.status(procurarFilme.status_code)
        response.json(procurarFilme)
        
   
})

//EndPoint: Inserir novos filmes no Banco de Dados

//não esquecer de colocar o bodyParserJSON, porque é quem define o formato de chegada dos dados
//obs: esse objeto foi criao no inicio do projeto
app.post('/v2/FilmesACME/filme', cors, bodyParserJSON, async function(request, response, next){

    //recebe os dados encaminhados na requisição no body (JSON)
    let dadosBody = request.body

    //encainha os dados da requisição para a controller enviar para o db
    let resultDados = await controllerFilmes.setInserirNovoFilme(dadosBody)

    response.status(resultDados.status_code)
    response.json(resultDados)
})


app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})