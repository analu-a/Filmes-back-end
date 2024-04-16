const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const inserirGenero = async function(genero){
try {

    let sql
    
    sql = `insert into genero(
        genero
    ) values (
        '${genero.genero}'
    )`

    let result = await prisma.$executeRawUnsafe(sql)
    if(result){
        return true
    } else{
        return false
    }
    
} catch (error) {
    return false
}
}

const deleteGenero = async function(id){
try {
    let sql = `delete from genero where id = ${id}`
    let rsGenero = await prisma.$executeRawUnsafe(sql)

    return rsGenero
    
} catch (error) {
    return false
}
}

const selectAllGenero = async function(){
try {
    
    let sql = 'select * from genero order by id_genero desc'

    let rsGeneros = await prisma.$queryRawUnsafe(sql)
    return rsGeneros

} catch (error) {
    return false
}
}

const atualizarGenero = async function(){

}

const returnId = async function (){

    try {

        let sql = 'select CAST(last_insert_id() AS DECIMAL) as id from tbl_filme limit 1'
        let rsId = await prisma.$queryRawUnsafe(sql)
        
        return rsId

    } catch (error) {
        
        return false
    }
  
}

module.exports={
    inserirGenero,
    deleteGenero,
    selectAllGenero,
    atualizarGenero,
    returnId
}