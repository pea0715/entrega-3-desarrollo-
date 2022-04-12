
// Importar los servicioConsultarTiposPropiedades

const { consultarDocumentos,consultarTiposPropiedades} = require('../services/mongodb.service');


const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}
// en este parte llamaremos a consultar tipos de propiedas para mostrar en base eso 
const ConsultarTiposPropiedades1 = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarTiposPropiedades(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

module.exports = {
    consultarAirbnb,
    ConsultarTiposPropiedades1
   

}