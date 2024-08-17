const { default: mongoose } = require('mongoose');
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
      'Colores',
      'Gradientes',
      'Imagenes',
      'Iconos',
      'Plantillas',
      'Fuentes',
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
    desfault: 0,
  },
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;

/*
const resource = new Resource({
  name: 'Coolors',
  description: 'Pagina que genera paletas de colores',
  category: 'Colores',
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


//Buscar datos de un modelo
Resource.find({}).then((result) => {
  console.log(result);
  mongoose.connection.close();
});
*/
