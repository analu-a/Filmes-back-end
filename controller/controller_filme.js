/****************************************************************
 * Objetivo: Arquivo responsável pela interação entre o app     *
 * e a model, que teremos todas as tratativas e regra de negócio*
 *              para o CRUD de filmes                           *
 * Data: 31/01/2024                                             *
 * Autor: Ana Luiza                                             *
 * Versão: 1.0                                                  *
 ****************************************************************/

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
    filmesJSON.filmes = dadosFilmes
    filmesJSON.quantidade = dadosFilmes.length
    filmesJSON.status_code = 200

    //Retorna o json montado
    return filmesJSON

} else{
    //Retorna false quando não houverem dados
    return false
}
}

//Função para buscar um filme pelo ID
const getBuscarFilme = async function(id){

}

module.exports ={
    setAtualizarFilme,
    setExcluirFilme,
    setInserirNovoFilme,
    getBuscarFilme,
    getListarfilmes
}