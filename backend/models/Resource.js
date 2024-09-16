const { default: mongoose } = require('mongoose');
//const connectDatabase = require('../config/db');
const { model, Schema } = require('mongoose');

function randomId() {
  return crypto.randomUUID();
}

const ResourceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 80,
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

//Eliminar el _id y el __v PARA CONSULTAR
// NO SE MUTA EL DE LA BASE DE DATOS
ResourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Resource = model('Resource', ResourceSchema);

module.exports = Resource;
