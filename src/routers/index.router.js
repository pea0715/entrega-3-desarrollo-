const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb)

// ruta para la consulta de tipos de propiedades
router.get(vs + "/airbnb/types", airbnbCtr.ConsultarTiposPropiedades1)

// ruta para consultar los top 20
router.get(vs + "/airbnb/reviews", airbnbCtr.consultarTop20s)


module.exports = router




