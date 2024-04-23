const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const selectAllClass = async function(){
try {
    let sql = 'select * from classificacao order by id_classificacao desc'

    let rsClass = await prisma.$executeRawUnsafe(sql)
    return rsClass

} catch (error) {
    return false
}
}

const inserirClass = async function(){

}

const deleteClass = async function(){

}

const atualizarClass = async function(){

}

const returnId = async function (){

    try {

        let sql = 'select CAST(last_insert_id() AS DECIMAL) as id from classificacao limit 1'
        let rsId = await prisma.$queryRawUnsafe(sql)
        
        return rsId

    } catch (error) {
        
        return false
    }
  
}

const selectByIdGenero = async function (id) {
    try {
        let sql = `select * from classificacao where id_classificacao = ${id}`
    
        let rsFilme = await prisma.$queryRawUnsafe(sql)
        return rsFilme
    
    } catch (error) {
        return false
    }
    
       
    }

module.exports={
    selectAllClass,
    inserirClass,
    deleteClass,
    atualizarClass,
    returnId,
    selectByIdGenero
}