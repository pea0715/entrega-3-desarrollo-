
const { MongoClient } = require("mongodb");

const uri = process.env.URI_MONGODB;

const client = new MongoClient(uri);

const conectarDB = async () => {
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB)
  return DB;
}

const consultarDocumentos = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  filtro = filtro ? filtro : {}
  return coleccion.find(filtro).limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}


// consutla de tipos de propiedades en mongo db
const consultarTiposPropiedades = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  let pipeline = [{$group: {_id:'$property_type'}}]
  let coleccion = db.collection(nombreColeccion).aggregate(pipeline)
  return coleccion.limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}

// consultar el top 20 de las airbnb 
const consultarTop20 = async (nombreColeccion) => {
  let db = await conectarDB()
  let consulta = [{$project: {name: 1, beds: 1, number_of_reviews : 1, price: 1}},
                  {$sort : {number_of_reviews : -1}}]
  let coleccion = db.collection(nombreColeccion).aggregate(consulta)
  return coleccion.limit(20).toArray()
}

module.exports = { consultarDocumentos, consultarTiposPropiedades,consultarTop20}