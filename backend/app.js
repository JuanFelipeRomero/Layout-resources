//MongoDB
const mongoose = require('mongoose');
const connectDatabase = require('./config/db');
const Resource = require('./models/Resource'); //Model

//varios
const validateResource = require('./schemes/resourcesSh');

const express = require('express');

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.disable('x-powered-by');

connectDatabase();

app.get('/', (req, res) => {
  res.send('API recursos');
});
//GET ----------------------------------------------------------------------
app.get('/resources', (req, res) => {
  let category = req.query.category;
  console.log(category);
  if (category) {
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
  const resultValidation = validateResource(req.body);

  if (resultValidation.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(resultValidation.error.message) }); //400 BAD REQUEST
  }

  const newResource = new Resource({
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
