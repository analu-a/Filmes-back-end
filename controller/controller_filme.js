/****************************************************************
 * Objetivo: Arquivo responsável pela interação entre o app     *
 * e a model, que teremos todas as tratativas e regra de negócio*
 *              para o CRUD de filmes                           *
 * Data: 31/01/2024                                             *
 * Autor: Ana Luiza                                             *
 * Versão: 1.0                                                  *
 ****************************************************************/
const message = require('../modulo/config')

const filmesDAO = require('../model/DAO/filme') 


//Função para inserir um novo filme no banco de dados
const setInserirNovoFilme = async function(){

}



//Função para atualizar um filme existente
const setAtualizarFilme = async function(){

}



//Função para excluir um filme existente
const setExcluirFilme = async function(id){


}



//Função para retormar todos os filmes do Banco de Dados
const getListarfilmes = async function(){
let filmesJSON = {}

// Chama a função do DAO para buscar dados no db
let dadosFilmes = await filmesDAO.selectAllFilmes()

// verifica se existem dados retornados do DAO
if(dadosFilmes){

    if(dadosFilmes.length){
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.length
        filmesJSON.status_code = 200
    
        //Retorna o json montado
        return filmesJSON //200
    } else{
        return message.ERROR_NOT_FOUND //404
    }

    } else{
    return message.ERROR_INTERNAL_SERVER_DB //500
}
}



//Função para buscar um filme pelo ID
const getBuscarFilme = async function(id){

//Recebe o id do filme
let idFilme = id
let filmeJson = {}

if(idFilme == '' || idFilme == undefined || isNaN(idFilme)){
    return message.ERROR_INVALID_ID
} else{
    let dadosFilme = await filmesDAO.selectByIdFilme(idFilme)

    if(dadosFilme){
        if(dadosFilme.length){
            filmeJson.filme = dadosFilme
            filmeJson.status_code = 200
            
     return filmeJson //200

        } else{
            return message.ERROR_NOT_FOUND //404
        }

    } else{
        return message.ERROR_INTERNAL_SERVER_DB //500
    }
}


}

const getNomeFilme = async function(filmeNome){
  let  nomeFilme = filmeNome
let nomeFilmeJson = {}

let infoFilmes = await filmesDAO.selectNameFilme(nomeFilme)

if(nomeFilme == '' || nomeFilme == undefined){
    return message.ERROR_INVALID_ID
}else{
if(infoFilmes){

    if(infoFilmes.length){
        nomeFilmeJson.filmes = infoFilmes
        nomeFilmeJson.quantidade = infoFilmes.length
        nomeFilmeJson.status_code = 200

        return nomeFilmeJson //200
    } else{

        return message.ERROR_NOT_FOUND //404
    }
   
} else{
    return message.ERROR_INTERNAL_SERVER_DB //500
}
}
}

module.exports ={
    setAtualizarFilme,
    setExcluirFilme,
    setInserirNovoFilme,
    getBuscarFilme,
    getListarfilmes,
    getNomeFilme
}