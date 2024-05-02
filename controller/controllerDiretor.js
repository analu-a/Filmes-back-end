const message = require('../modulo/config')

const diretoresDAO = require('../model/DAO/diretor')

const setInserirNovoDiretor = async function (dadosDiretor, contentType) {

    try {

        if (String(contentType).toLowerCase() == 'application/json') {

            let resultDadosAtor = {}

            if (dadosDiretor.nome == "" ||  dadosDiretor.nome == undefined ||  dadosDiretor.nome.length > 80 ||
                dadosDiretor.data_falecimento == "" || dadosAtor.data_falecimento == undefined ||  dadosDiretor.data_falecimento.length > 8 ||
                dadosDiretor.pais == "" ||  dadosDiretor.pais == undefined ||  dadosDiretor.pais.length > 80 ||
                dadosDiretor.irmaos == "" ||  dadosDiretor.irmaos == undefined ||  dadosDiretor.irmaos.length > 80 ||
                dadosDiretor.foto == "" ||  dadosDiretor.foto == undefined ||  dadosDiretor.foto.length > 200
                
            ) {

                return message.ERROR_REQUIRED_FIELDS //400 

            } else {

                let dadosValidated = false

                if ( dadosDiretor.data_falecimento != null &&
                    dadosDiretor.data_falecimento != undefined &&
                    dadosDiretor.data_falecimento != "" ||
                    dadosDiretor.pais != null &&
                    dadosDiretor.pais != undefined &&
                    dadosDiretor.pais != "" ||
                    dadosDiretor.irmaos != null &&
                    dadosDiretor.irmaos != undefined &&
                    dadosDiretor.irmaos != ""
                ) {
                    if ( dadosDiretor.data_falecimento.length != 8 ||
                        dadosDiretor.pais.length != 80 ||
                        dadosDiretor.irmaos.length != 80) {

                        return message.ERROR_REQUIRED_FIELDS
                    } else {
                        dadosValidated = true 
                    }
                } else {
                    dadosValidated = true 
                }

                if (dadosValidated) {

                    
                    let novoDiretor = await diretoresDAO.insertDiretor(dadosDiretor)

                    if (novoDiretor) {
                        let returnId = await diretoresDAO.returnId()
                        
                        resultDadosDiretor.status = message.SUCESS_CREATED_ITEM.status
                        resultDadosDiretor.status_code = message.SUCESS_CREATED_ITEM.status_code
                        resultDadosDiretor.message = message.SUCESS_CREATED_ITEM.message
                        resultDadosDiretor.ator = dadosDiretor

                        resultDadosDiretor.diretor.id = await returnId

                        return resultDadosDiretor //201

                    } else {
                        return message.ERROR_INTERNAL_SERVER_DB //500 
                    }
                }
            }
        } else {
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER
    }

}

const setAtualizarDiretor = async function (id, contentType, dadosDiretor) {

    try {

        if (String(contentType).toLowerCase() == 'application/json') {

            let resultDadosDiretor = {}
            let idDiretor = id

            if (idDiretor == '' || idDiretor == undefined || isNaN(idDiretor)) {

                return message.ERROR_INVALID_ID
            } else {
                let validaId = await diretoresDAO.selectByIdDiretor(idDiretor)

                if (validaId == false) {

                    return message.ERROR_NOT_FOUND //404

                } else {

                    if (dadosDiretor.nome == "" || dadosDiretor.nome == undefined || dadosDiretor.nome.length > 80 ||
                    dadosDiretor.data_falecimento == "" || dadosDiretor.data_falecimento == undefined || dadosDiretor.data_falecimento.length > 8 ||
                    dadosDiretor.pais == "" || dadosDiretor.pais == undefined || dadosDiretor.pais.length > 80 ||
                    dadosDiretor.irmaos == "" || dadosDiretor.irmaos == undefined || dadosDiretor.irmaos.length > 80 ||
                    dadosDiretor.foto == "" || dadosDiretor.foto == undefined || dadosDiretor.foto.length > 200
                    
                    ) {

                        return message.ERROR_REQUIRED_FIELDS //400 

                    } else {

                        let dadosValidated = false

                        if (dadosDiretor.data_falecimento != null &&
                            dadosDiretor.data_falecimento != undefined &&
                            dadosDiretor.data_falecimento != "" ||
                            dadosDiretor.pais != null &&
                            dadosDiretor.pais != undefined &&
                            dadosDiretor.pais != "" ||
                            dadosDiretor.irmaos != null &&
                            dadosDiretor.irmaos != undefined &&
                            dadosDiretor.irmaos != ""
                        ) {
                            if (dadosDiretor.data_falecimento.length != 8 ||
                                dadosDiretor.pais.length != 80 ||
                                dadosDiretor.irmaos.length != 80) {

                                return message.ERROR_REQUIRED_FIELDS

                            } else {
                                dadosValidated = true
                            }
                        } else {
                            dadosValidated = true
                        }

                        if (dadosValidated) {
                            let novoDiretor = await diretoresDAO.updateDiretor(dadosDiretor, idDiretor)

                            if (novoDiretor) {
                               
                                resultDadosDiretor.status = message.SUCESS_EDITED_ITEM.status
                                resultDadosDiretor.status_code = message.SUCESS_EDITED_ITEM.status_code
                                resultDadosDiretor.message = message.SUCESS_EDITED_ITEM.message
                                resultDadosDiretor.ator = dadosDiretor
                                return resultDadosDiretor //201

                            } else {
                                return message.ERROR_INTERNAL_SERVER_DB //500 
                            }
                        } else {
                            return message.ERROR_CONTENT_TYPE //415
                        }
                    }

                }
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }
    }catch (error) {
        return message.ERROR_INTERNAL_SERVER
    }
}

const setExcluirDiretor = async function (id) {
    try {
        let idDiretor = id

        if (idDiretor == '' || idDiretor == undefined || isNaN(idDiretor)) {
            return message.ERROR_INVALID_ID
        } else {

            let validaId = await diretoresDAO.selectByIdDiretor(idDiretor)

            if (validaId == false) {

                return message.ERROR_NOT_FOUND //404

            } else {
                let dadosDiretor = await diretoresDAO.deleteDiretor(idDiretor)

                if (dadosDiretor) {
                    return message.SUCESS_DELETED_ITEM
                } else {
                    return message.ERROR_INTERNAL_SERVER_DB
                }

            }

        }

    } catch (error) {

        return message.ERROR_INTERNAL_SERVER

    }

}

const getListarDiretor = async function () {
    let diretoresJSON = {}

    let dadosDiretor = await diretoresDAO.selectAllDiretores()

    if (dadosDiretor) {

        if (dadosDiretor.length) {
            diretoresJSON.diretores = dadosDiretor
            diretoresJSON.quantidade = dadosDiretor.length
            diretoresJSON.status_code = 200

            return diretoresJSON //200
        } else {
            return message.ERROR_NOT_FOUND //404
        }

    } else {
        return message.ERROR_INTERNAL_SERVER_DB //500
    }
}

module.exports = {
    setInserirNovoDiretor,
    setAtualizarDiretor,
    setExcluirDiretor,
    getListarDiretor
}
