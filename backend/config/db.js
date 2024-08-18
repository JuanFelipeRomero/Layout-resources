require('dotenv').config(); //leer las variables de entorno al ejecutarse
const { default: mongoose, connect } = require('mongoose');

const connectionString = process.env.MONGO_DB_URI;
//Conectarse a mongoose}
const connectDatabase = () => {
  mongoose
    .connect(connectionString)
    .then((db) => console.log('connected'))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
