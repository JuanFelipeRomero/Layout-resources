const { default: mongoose } = require('mongoose');

const connectionString =
  'mongodb+srv://JuanRomero:RjCJGKhLWi7Gy6se@cluster0.uc1n6.mongodb.net/resourcesDB?retryWrites=true&w=majority&appName=Cluster0';

//Conectarse a mongoose
mongoose
  .connect(connectionString)
  .then((db) => console.log('connected: ' + db))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('hola mundo');
});
