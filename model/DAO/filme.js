/***************************************************
 * Objetivo: Criar a interação com o banco de dados*
 * MySQL para fazer o CRUD de filmes               *
 * *************************************************
 * data: 30/01/2024                                *
 * Autor: Ana Luiza                                *
 * Versão: 1.0                                     *
 *************************************************** */

//Importe da biblioteca do prisma cliente
const { PrismaClient } = require('@prisma/client')

//Instanciando o objeto prisma com as caracteristicas do prisma client
const prisma = new PrismaClient()

//Inserir um novo filme
const insertFilme = async function () {

}

//atualizar um filme existente filtrando pelo ID
const updateFilme = async function (id) {

}

//Deletar um filme existente filtrando pelo ID
const deleteFilme = async function (id) {

}



//Listar todos os filmes existentes na tabela
const selectAllFilmes = async function () {

// $queryRawUnsafe(sql) ---> encaminha só a variavel
// $queryRaw(select * from tbl_filmes) ---> encaminha o script

    try {

    // Script sql para listar todos os registros
    let sql = 'select * from tbl_filme'

    //executa o script no db e recebe o retorno dos dados na variael rsFilmes
    let rsFilmes = await prisma.$queryRawUnsafe(sql)
    return rsFilmes

    } catch (error) {
        return false
    }
}


//Buscar filme existente buscando pelo ID
const selectByIdFilme = async function (id) {
try {
    let sql = `select * from tbl_filme where id = ${id}`
    let rsFilme = await prisma.$queryRawUnsafe(sql)
    return rsFilme

} catch (error) {
    return false
}

   
}


const selectNameFilme = async function (filmeNome) {
    let nomeFilme = filmeNome

    try {

        let filmeSql = `select * from tbl_filme where nome like '%${nomeFilme}%' `
        let resultFilmes = await prisma.$queryRawUnsafe(filmeSql)
            return resultFilmes

    } catch (error) {

        return false
    }
  
   
}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme,
    selectNameFilme
}