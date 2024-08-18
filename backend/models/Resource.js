const { default: mongoose } = require('mongoose');
//const connectDatabase = require('../config/db');
const { model, Schema } = require('mongoose');
const resourceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
    enum: [
      'colores',
      'gradientes',
      'imagenes',
      'iconos',
      'plantillas',
      'fuentes',
      'varios',
    ],
    default: 'varios',
  },

  image: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  likesCount: {
    type: Number,
    min: 0,
    default: 0,
  },
});

//Eliminar el _id y el __v transformando el schema
resourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;

/*
const resource = new Resource({
  name: 'Coolors',
  description: 'Pagina que genera paletas de colores',
  category: 'colores',
  image: 'https://www.evernote.design/assets/images/coolors.jpg',
  url: 'https://coolors.co/',
});
*/

//Guardar datos en un modelo
/*
resource
  .save()
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
*/
/*

//Buscar datos de un modelo
Resource.find({}).then((result) => {
  console.log(result);
  mongoose.connection.close();
});
*/
