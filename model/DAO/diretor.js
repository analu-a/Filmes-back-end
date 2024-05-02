const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const insertDiretor = async function (dadosDiretor) {
    try {
    
        let sql
        if (dadosDiretor.data_falecimento == null || 
            dadosDiretor.data_falecimento == ""   || 
            dadosDiretor.data_falecimento == undefined
            ){
    
            
         sql = `insert into diretores (
            nome_diretor,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento
        ) values (
            '${dadosAtor.nome_diretor}',
            null,
            '${dadosAtor.pais}',
             '${dadosAtor.irmaos}',
            '${dadosAtor.data_nascimento}'
        )`
        } else {
            sql = `insert into diretores (
                nome_diretor,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento
            ) values (
                '${dadosAtor.nome_diretor}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                 '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}'
            )`
        }
        if (dadosAtor.pais == null || 
            dadosFilme.pais == ""   || 
            dadosFilme.pais == undefined
            ){
    
            
         sql = `insert into diretores (
            nome_diretor,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento
        ) values (
            '${dadosAtor.nome_diretor}',
            '${dadosAtor.data_falecimento}'
            null,
             '${dadosAtor.irmaos}',
            '${dadosAtor.data_nascimento}'
        )`
        } else {
            sql = `insert into diretores (
                nome_diretor,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento

            ) values (
                '${dadosAtor.nome_diretor}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}'
            )`
        }
        if (dadosAtor.irmaos == null || 
            dadosFilme.irmaos == ""   || 
            dadosFilme.irmaos == undefined
            ){
    
            
         sql = `insert into diretores (
            nome_diretor,
            data_falecimento,
            pais,
            irmaos,
            data_nascimento
        ) values (
            '${dadosAtor.nome_diretor}',
            '${dadosAtor.data_falecimento}'
            '${dadosAtor.pais}',
             null,
            '${dadosAtor.data_nascimento}'
        )`
        } else {
            sql = `insert into diretores (
                nome_diretor,
                data_falecimento,
                pais,
                irmaos,
                data_nascimento
            ) values (
                '${dadosAtor.nome_diretor}',
                '${dadosAtor.data_falecimento}'
                '${dadosAtor.pais}',
                '${dadosAtor.irmaos}',
                '${dadosAtor.data_nascimento}'
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

const updateDiretor = async function (dadosDiretor,id) {
    try {

        let sql
        if (dadosDiretor.data_falecimento == null || 
            dadosDiretor.data_falecimento == ""   || 
            dadosDiretor.data_falecimento == undefined
            ){
    
         sql = `update diretores set 
            nome_diretor =  '${dadosDiretor.nome_diretor}',
            null,
            pais = '${dadosDiretor.pais}',
            irmaos = '${dadosDiretor.irmaos}',
            data_nascimento = '${dadosDiretor.data_nascimento}'
            where id_atores = ${id}`
           
        } else {
            sql = `update diretores set 
            nome_diretor =  '${dadosDiretor.nome_diretor}',
            data_falecimento = '${dadosDiretor.data_falecimento}',
            pais = '${dadosDiretor.pais}',
            irmaos = '${dadosDiretor.irmaos}',
            data_nascimento = '${dadosDiretor.data_nascimento}'
            where id_atores = ${id}`
           
        }

        if (dadosAtor.pais == null || 
            dadosAtor.pais == ""   || 
            dadosAtor.pais == undefined
            ){
    
         sql = `update diretores set 
            nome =  '${dadosAtor.nome}',
            data_falecimento = '${dadosFilme.data_falecimento}',
            null,
            irmaos = '${dadosAtor.irmaos}',
            data_nascimento = '${dadosAtor.data_nascimento}'
            where id_atores = ${id}`
           
        } else {
            sql = `update diretores set 
            nome =  '${dadosAtor.nome}',
            data_falecimento = '${dadosFilme.data_falecimento}',
            pais = '${dadosAtor.pais}',
            irmaos = '${dadosAtor.irmaos}',
            data_nascimento = '${dadosAtor.data_nascimento}'
            where id_atores = ${id}`
            
           
        }

        
        if (dadosAtor.irmaos == null || 
            dadosAtor.irmaos == ""   || 
            dadosAtor.irmaos == undefined
            ){
    
         sql = `update diretores set 
            nome =  '${dadosAtor.nome}',
            data_falecimento = '${dadosFilme.data_falecimento}',
            pais = '${dadosAtor.pais}',
            null,
            data_nascimento = '${dadosAtor.data_nascimento}'
            where id_atores = ${id}`
           
        } else {
            sql = `update diretores set 
            nome =  '${dadosAtor.nome}',
            data_falecimento = '${dadosFilme.data_falecimento}',
            pais = '${dadosAtor.pais}',
            irmaos = '${dadosAtor.irmaos}',
            data_nascimento = '${dadosAtor.data_nascimento}'
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

const deleteDiretor = async function (id) {
    try {
        let sql = `delete from diretores where id_diretor = ${id}`
        let rsDiretor = await prisma.$executeRawUnsafe(sql)
    
        return rsDiretor
    
    } catch (error) {
        return false
    }
}

const selectAllDiretores = async function () {
            
    try {

    let sql = 'select * from diretores order by id_diretor desc'

    let rsDiretores = await prisma.$queryRawUnsafe(sql)
    return rsDiretores

    } catch (error) {
        return false
    }
}

const selectByIdDiretor = async function (id) {
    try {
        let sql = `select * from atores where id_atores = ${id}`
    
        let rsAtor = await prisma.$queryRawUnsafe(sql)
        return rsAtor
    
    } catch (error) {
        return false
    }
    
       
    }

module.exports = {
    insertDiretor,
    updateDiretor,
    deleteDiretor,
    selectAllDiretores,
    selectByIdDiretor
}