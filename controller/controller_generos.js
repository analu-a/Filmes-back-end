const message = require('../modulo/config')
const generosDAO = require('../model/DAO/genero')

const setInserirNovoGenero = async function (genero, contentType){
try {
    
    if(String(contentType).toLowerCase() == 'application/json'){
        let resultGeneros = {}

        if(genero.genero == "" || genero.genero == undefined || genero.genero.length > 30 ){
            return message.ERROR_REQUIRED_FIELDS //400
        } else{

            let novoGenero = await generosDAO.inserirGenero(genero)

            if(novoGenero) {
                let returnId = await generosDAO.returnId()

                resultGeneros.status = message.SUCESS_CREATED_ITEM.status
                resultGeneros.status_code = message.SUCESS_CREATED_ITEM.status_code
                resultGeneros.message = message.SUCESS_CREATED_ITEM.message
                resultGeneros.genero = genero

                resultGeneros.genero.id = await returnId

                return resultGeneros //201
            } else{
                return message.ERROR_INTERNAL_SERVER_DB //500
            }
        }
    }

} catch (error) {
    return message.ERROR_INTERNAL_SERVER
}

}

const setExcluirGenero = async function(){

}

const getListarGeneros = async function(){
let generoJSON = {}

let dadosGenero = await generosDAO.selectAllGenero()

if (dadosGenero){
    if (dadosGenero.length) {
        generoJSON.genero = dadosGenero
        generoJSON.quantidade = dadosGenero.length
        generoJSON.status_code = 200

        return generoJSON//200

    } else {
        return message.ERROR_NOT_FOUND //404
    }
} else{
    return message.ERROR_INTERNAL_SERVER_DB //500
}
}

const setAtualizarGenero = async function(){

}

module.exports = {
    setAtualizarGenero,
    setExcluirGenero,
    setInserirNovoGenero,
    getListarGeneros
}