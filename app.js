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

/* **************************** Imports de arquivos e bibliotecas do projeto **********/

const controllerFilmes = require('./controller/controller_filme')

//************************************************************************************** 

app.get('/v1/FilmesACME/filmes', cors(), async function(request, response, next){
    let listarFilmes = require('./controller/filmes_acme')
    let filmes = listarFilmes.getFilmes()

    if(filmes){
        response.json(filmes)
        response(200)
    } else{
        response.json({ERRO: "Desculpe, ocorreu algum problema"})
        response.status(404)
    }
    
})

app.get('/v2/FilmesACME/filmes', cors(), async function(request, response,next){

    //chama a função para retornar os dados do filmes
    let dadosFilmes = await controllerFilmes.getListarfilmes()

    if(dadosFilmes){
        response.json(dadosFilmes)
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

// app.listen(8080, function(){
//     console.log('API funcionando e aguardando requisições')

// })

app.get('/v2/FilmesACME/filmes/filtro', cors(), async function(request, response, next){
    let nomeFilmes = request.query.nome

    let procurarFilme = controllerFilmes.getNomeFilme(nomeFilmes)

    if(procurarFilme){
        response.json(procurarFilme)
        response.status(200)
    } else{
        response.json({ERRO: "Algo deu errado"})
        response.status(404)
    }
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})