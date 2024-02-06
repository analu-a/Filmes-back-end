/***************************************************
 * Objetivo: Criar a interação com o banco de dados*
 * MySQL para fazer o CRUD de filmes               *
 * *************************************************
 * data: 30/01/2024                                *
 * Autor: Ana Luiza                                *
 * Versão: 1.0                                     *
 *************************************************** */ 

//Importe da biblioteca do prisma cliente
const {PrismaClient} = require ('@prisma/client')

//Instanciando o objeto prisma com as caracteristicas do prisma client
const prisma = new PrismaClient()

//Inserir um novo filme
const insertFilme = async function(){

}

//atualizar um filme existente filtrando pelo ID
const updateFilme = async function(id){

}

//Deletar um filme existente filtrando pelo ID
const deleteFilme = async function(id){

}

//Listar todos os filmes existentes na tabela
const selectAllFilmes = async function(){

// Script sql para listar todos os registros
let sql = 'select * from tbl_filme'

// $queryRawUnsafe(sql) ---> encaminha só a variavel
// $queryRaw(select * from tbl_filmes) ---> encaminha o script

//executa o script no db e recebe o retorno dos dados na variael rsFilmes
let rsFilmes = await prisma.$queryRawUnsafe(sql)

// Tratamento  de erro
if(rsFilmes.length > 0){
    return rsFilmes
} else{
     return false
}
}

//Buscar filme existente buscando pelo ID
const selectByIdFilme = async function(id){

}

module.exports ={
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}