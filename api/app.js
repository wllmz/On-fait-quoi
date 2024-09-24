
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

// Importation de la configuration de la base de données
require('./config/db');

// Initialisation de l'application Express
const app = express();

// Middleware pour parser les requêtes avec un corps en JSON
app.use(express.json());

// Définir une route de base pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
  res.send('API On fait quoi? est en ligne.');
});

// Port d'écoute de l'application
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
