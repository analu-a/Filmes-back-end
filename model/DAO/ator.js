const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const insertAtor = async function (dadosAtor) {
    try {
    
        let sql
        if (dadosAtor.data_falecimento == null || 
            dadosAtor.data_falecimento == ""   || 
            dadosAtor.data_falecimento == undefined
            ){
    
            
         sql = `insert into atores (
            nome_ator,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento,
            foto
        ) values (
            '${dadosAtor.nome_ator}',
            null,
            '${dadosAtor.pais}',
             '${dadosAtor.irmaos}',
            '${dadosAtor.data_nascimento}',
            '${dadosAtor.foto}'
        )`
        } else {
            sql = `insert into atores (
                nome_ator,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento,
                foto
            ) values (
                '${dadosAtor.nome_ator}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                 '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}',
                '${dadosAtor.foto}'
            )`
        }
        if (dadosAtor.pais == null || 
            dadosFilme.pais == ""   || 
            dadosFilme.pais == undefined
            ){
    
            
         sql = `insert into atores (
            nome_ator,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento,
            foto
        ) values (
            '${dadosAtor.nome_ator}',
            '${dadosAtor.data_falecimento}'
            null,
             '${dadosAtor.irmaos}',
            '${dadosAtor.data_nascimento}',
            '${dadosAtor.foto}'
        )`
        } else {
            sql = `insert into atores (
                nome_ator,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento,
                foto
            ) values (
                '${dadosAtor.nome_ator}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}',
                '${dadosAtor.foto}'
            )`
        }
        if (dadosAtor.irmaos == null || 
            dadosFilme.irmaos == ""   || 
            dadosFilme.irmaos == undefined
            ){
    
            
         sql = `insert into atores (
            nome_ator,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento,
            foto
        ) values (
            '${dadosAtor.nome_ator}',
            '${dadosAtor.data_falecimento}'
            '${dadosAtor.pais}',
             null,
            '${dadosAtor.data_nascimento}',
            '${dadosAtor.foto}'
        )`
        } else {
            sql = `insert into atores (
                nome_ator,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento,
                foto
            ) values (
                '${dadosAtor.nome_ator}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}',
                '${dadosAtor.foto}'
            )`
        }

        let result = await prisma.$executeRawUnsafe(sql)
    
        if (result) {
            return true
        } else{
            return false
        }
    } catch (error) {
        return false
    }
}
    
   
const updateAtor = async function (dadosAtor,id) {
        try {
    
            let sql
            if (dadosAtor.data_falecimento == null || 
                dadosAtor.data_falecimento == ""   || 
                dadosAtor.data_falecimento == undefined
                ){
        
             sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                null,
                pais = '${dadosAtor.pais}',
                irmaos = '${dadosAtor.irmaos}',
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
               
            } else {
                sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                data_falecimento = '${dadosFilme.data_falecimento}',
                pais = '${dadosAtor.pais}',
                irmaos = '${dadosAtor.irmaos}',
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
               
            }

            if (dadosAtor.pais == null || 
                dadosAtor.pais == ""   || 
                dadosAtor.pais == undefined
                ){
        
             sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                data_falecimento = '${dadosFilme.data_falecimento}',
                null,
                irmaos = '${dadosAtor.irmaos}',
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
               
            } else {
                sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                data_falecimento = '${dadosFilme.data_falecimento}',
                pais = '${dadosAtor.pais}',
                irmaos = '${dadosAtor.irmaos}',
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
                
               
            }

            
            if (dadosAtor.irmaos == null || 
                dadosAtor.irmaos == ""   || 
                dadosAtor.irmaos == undefined
                ){
        
             sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                data_falecimento = '${dadosFilme.data_falecimento}',
                pais = '${dadosAtor.pais}',
                null,
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
               
            } else {
                sql = `update atores set 
                nome_ator =  '${dadosAtor.nome_ator}',
                data_falecimento = '${dadosFilme.data_falecimento}',
                pais = '${dadosAtor.pais}',
                irmaos = '${dadosAtor.irmaos}',
                data_nascimento = '${dadosAtor.data_nascimento}',
                foto = '${dadosAtor.foto}'
                where id_atores = ${id}`
               
            }

            
    
                let result = await prisma.$executeRawUnsafe(sql)
            
                if (result) {
                    return true
                } else{
                    return false
                }
            } catch (error) {
                return false
            }
            
            
}

const deleteAtor = async function (id) {
        try {
            let sql = `delete from atores where id_atores = ${id}`
            let rsAtor = await prisma.$executeRawUnsafe(sql)
        
            return rsAtor
        
        } catch (error) {
            return false
        }
}

const selectAllAtores = async function () {
            
                try {
            
                let sql = 'select * from atores order by id_atores desc'
            
                let rsAtores = await prisma.$queryRawUnsafe(sql)
                return rsAtores
            
                } catch (error) {
                    return false
                }
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

const selectByIdAtor = async function (id) {
    try {
        let sql = `select * from atores where id_atores = ${id}`
    
        let rsAtor = await prisma.$queryRawUnsafe(sql)
        return rsAtor
    
    } catch (error) {
        return false
    }
    
       
    }

module.exports = {
    insertAtor,
    updateAtor,
    deleteAtor,
    selectAllAtores,
    returnId,
    selectByIdAtor
}