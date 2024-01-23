/*****************************************************
 * Objetivo: Criar uma API de filmes                 *
 * Data: 23/01/2024                                  *
 * Autor: Ana Luiza                                  *
 * Versão: 1.0                                       *
*****************************************************/
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

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')

})