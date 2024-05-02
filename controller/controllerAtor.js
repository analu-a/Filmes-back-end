const message = require('../modulo/config')

const atoresDAO = require('../model/DAO/ator')

const setInserirNovoAtor = async function (dadosAtor, contentType) {

    try {

        if (String(contentType).toLowerCase() == 'application/json') {

            let resultDadosAtor = {}

            if (dadosAtor.nome == "" || dadosAtor.nome == undefined || dadosFilme.nome.length > 80 ||
                dadosAtor.data_falecimento == "" || dadosAtor.data_falecimento == undefined || dadosAtor.data_falecimento.length > 8 ||
                dadosAtor.pais == "" || dadosAtor.pais == undefined || dadosAtor.pais.length > 80 ||
                dadosAtor.irmaos == "" || dadosAtor.irmaos == undefined || dadosAtor.irmaos.length > 80 ||
                dadosAtor.foto == "" || dadosAtor.foto == undefined || dadosAtor.foto.length > 200
                
            ) {

                return message.ERROR_REQUIRED_FIELDS //400 

            } else {

                let dadosValidated = false

                if (dadosAtor.data_falecimento != null &&
                    dadosAtor.data_falecimento != undefined &&
                    dadosAtor.data_falecimento != "" ||
                    dadosAtor.pais != null &&
                    dadosAtor.pais != undefined &&
                    dadosAtor.pais != "" ||
                    dadosAtor.irmaos != null &&
                    dadosAtor.irmaos != undefined &&
                    dadosAtor.irmaos != ""
                ) {
                    if (dadosAtor.data_falecimento.length != 8 ||
                        dadosAtor.pais.length != 80 ||
                        dadosAtor.irmaos.length != 80) {

                        return message.ERROR_REQUIRED_FIELDS
                    } else {
                        dadosValidated = true 
                    }
                } else {
                    dadosValidated = true 
                }

                if (dadosValidated) {

                    
                    let novoAtor = await atoresDAO.insertAtor(dadosAtor)

                    if (novoAtor) {
                        let returnId = await atoresDAO.returnId()
                        
                        resultDadosAtor.status = message.SUCESS_CREATED_ITEM.status
                        resultDadosAtor.status_code = message.SUCESS_CREATED_ITEM.status_code
                        resultDadosAtor.message = message.SUCESS_CREATED_ITEM.message
                        resultDadosAtor.ator = dadosAtor

                        resultDadosAtor.ator.id = await returnId

                        return resultDadosAtor //201

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

const setAtualizarAtor = async function (id, contentType, dadosAtor) {

    try {

        if (String(contentType).toLowerCase() == 'application/json') {

            let resultDadosAtor = {}
            let idAtor = id

            if (idAtor == '' || idAtor == undefined || isNaN(idAtor)) {

                return message.ERROR_INVALID_ID
            } else {
                let validaId = await atoresDAO.selectByIdAtor(idAtor)

                if (validaId == false) {

                    return message.ERROR_NOT_FOUND //404

                } else {

                    if (dadosAtor.nome == "" || dadosAtor.nome == undefined || dadosAtor.nome.length > 80 ||
                    dadosAtor.data_falecimento == "" || dadosAtor.data_falecimento == undefined || dadosAtor.data_falecimento.length > 8 ||
                    dadosAtor.pais == "" || dadosAtor.pais == undefined || dadosAtor.pais.length > 80 ||
                    dadosAtor.irmaos == "" || dadosAtor.irmaos == undefined || dadosAtor.irmaos.length > 80 ||
                    dadosAtor.foto == "" || dadosAtor.foto == undefined || dadosAtor.foto.length > 200
                    
                    ) {

                        return message.ERROR_REQUIRED_FIELDS //400 

                    } else {

                        let dadosValidated = false

                        if (dadosAtor.data_falecimento != null &&
                            dadosAtor.data_falecimento != undefined &&
                            dadosAtor.data_falecimento != "" ||
                            dadosAtor.pais != null &&
                            dadosAtor.pais != undefined &&
                            dadosAtor.pais != "" ||
                            dadosAtor.irmaos != null &&
                            dadosAtor.irmaos != undefined &&
                            dadosAtor.irmaos != ""
                        ) {
                            if (dadosAtor.data_falecimento.length != 8 ||
                                dadosAtor.pais.length != 80 ||
                                dadosAtor.irmaos.length != 80) {

                                return message.ERROR_REQUIRED_FIELDS

                            } else {
                                dadosValidated = true
                            }
                        } else {
                            dadosValidated = true
                        }

                        if (dadosValidated) {
                            let novoAtor = await atoresDAO.updateAtor(dadosAtor, idAtor)

                            if (novoAtor) {
                               
                                resultDadosAtor.status = message.SUCESS_EDITED_ITEM.status
                                resultDadosAtor.status_code = message.SUCESS_EDITED_ITEM.status_code
                                resultDadosAtor.message = message.SUCESS_EDITED_ITEM.message
                                resultDadosAtor.ator = dadosAtor
                                return resultDadosAtor //201

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

const setExcluirAtor = async function (id) {
    try {
        let idAtor = id

        if (idAtor == '' || idAtor == undefined || isNaN(idAtor)) {
            return message.ERROR_INVALID_ID
        } else {

            let validaId = await atoresDAO.selectByIdAtor(idAtor)

            if (validaId == false) {

                return message.ERROR_NOT_FOUND //404

            } else {
                let dadosAtor = await atoresDAO.deleteAtor(idAtor)

                if (dadosAtor) {
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

const getListarAtor = async function () {
    let atoresJSON = {}

    let dadosAtores = await atoresDAO.selectAllAtores()

    if (dadosAtores) {

        if (dadosAtores.length) {
            atoresJSON.atores = dadosAtores
            atoresJSON.quantidade = dadosAtores.length
            atoresDAO.status_code = 200

            return atoresJSON //200
        } else {
            return message.ERROR_NOT_FOUND //404
        }

    } else {
        return message.ERROR_INTERNAL_SERVER_DB //500
    }
}

module.exports ={
    setInserirNovoAtor,
    setAtualizarAtor,
    setExcluirAtor,
    getListarAtor
}