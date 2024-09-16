//MongoDB
const mongoose = require('mongoose');
const connectDatabase = require('./config/db');
const Resource = require('./models/Resource'); //Model

//varios
const validateResource = require('./schemes/resourcesSh');
const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.disable('x-powered-by');

// Configurar CORS para permitir sólo los dominios de producción y local
const allowedOrigins = [
  'https://layout-resources.vercel.app',
  'http://localhost:5173',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir solicitudes sin origen (como en Postman o cURL) o los orígenes en la lista permitida
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  })
);

connectDatabase();

app.get('/', (req, res) => {
  res.send('API recursos');
});
//GET ----------------------------------------------------------------------
app.get('/resources', (req, res) => {
  // Ejemplo /resources/?category=colores
  /*
  const origin = req.header('origin'); //recuperar el dominio origen
  if (ACCEPTED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  }*/

  let category = req.query.category;
  console.log(category);
  if (category) {
    if (category === 'all') {
      Resource.find({}).then((resources) => {
        res.json(resources);
      });
      return;
    }

    const queryCategory = new RegExp(`^${category}$`, 'i'); //Regex para que se convertirlo a minuscula

    Resource.find({ category: queryCategory })
      .then((resources) => {
        res.json(resources);
      })
      .catch((err) => {
        console.log('Error al filtrar por categoría: ' + err);
        res.status(500).json({ error: 'Error al filtrar por categoría' });
      });
    return;
  }

  Resource.find({}).then((resources) => {
    res.json(resources);
  });
});

//POST ---------------------------------------------------------------------
app.post('/resources', (req, res) => {
  const resultValidation = validateResource(req.body); //Validar req con schema zod

  if (resultValidation.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(resultValidation.error.message) }); //400 BAD REQUEST
  }

  const newResource = new Resource({
    //nueva instancia del modelo Resource
    ...resultValidation.data,
  });

  newResource
    .save()
    .then((savedResource) => {
      res.status(201).json(savedResource);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error saving resource' }); // 500 INTERNAL SERVER ERROR
    });
});

//PATCH -------------------------------------------------------------------
app.patch('/resources/:queryId', (req, res) => {
  const { queryId } = req.params;
  const updates = req.body;

  Resource.findByIdAndUpdate(queryId, updates, {
    new: true, //Devuelve el documento actualizado en lugar del documento original.
    runValidators: true, //Ejecuta las validaciones del esquema durante la actualización
  })
    .then((updatedResource) => {
      if (!updatedResource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      res.status(200).json(updatedResource);
    })
    .catch((err) => {
      console.error('Error updating resource:', err.message);
      res.status(500).json({ error: 'Error updating resource' });
    });
});

//DELETE
app.delete('/resources/:queryId', (req, res) => {
  const { queryId } = req.params;
  Resource.findByIdAndDelete(queryId)
    .then((deletedResource) => {
      if (!deletedResource)
        return res.status(404).json({ error: 'Resource not found' });

      res.json({ message: 'Resources deleted' });
    })
    .catch((err) => {
      console.error('Error al eliminar recurso: ' + err);
    });
});

//LISTEN -------------------------------------------------------------------
app.listen(PORT, () => {
  console.log('Running server on port ' + PORT);
});

// Cerrar la conexión al recibir una señal de terminación (como CTRL+C)
process.on('SIGINT', () => {
  console.log('Cerrando el servidor...');
  mongoose.connection.close(() => {
    console.log('Desconectado de la base de datos');
    process.exit(0);
  });
});
