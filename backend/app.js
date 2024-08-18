const mongoose = require('mongoose');
const connectDatabase = require('./config/db');
const Resource = require('./models/Resource');

const express = require('express');

const PORT = process.env.PORT;
const app = express();

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
app.get('/resources', (req, res) => {});

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
