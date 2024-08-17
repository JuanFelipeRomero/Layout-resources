const { default: mongoose, connect } = require('mongoose');

const connectionString =
  'mongodb+srv://JuanRomero:RjCJGKhLWi7Gy6se@cluster0.uc1n6.mongodb.net/resourcesDB?retryWrites=true&w=majority&appName=Cluster0';

//Conectarse a mongoose}
const connectDatabase = () => {
  mongoose
    .connect(connectionString)
    .then((db) => console.log('connected'))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
