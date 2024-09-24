const Arrondissement = require('../models/Arrondissement');

// Récupérer tous les arrondissements
const getArrondissements = async (req, res) => {
  try {
    const arrondissements = await Arrondissement.find();
    res.status(200).json(arrondissements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des arrondissements' });
  }
};

// Ajouter un nouvel arrondissement
const addArrondissement = async (req, res) => {
  try {
    const { number, name, description } = req.body;
    const newArrondissement = new Arrondissement({ number, name, description });
    const savedArrondissement = await newArrondissement.save();
    res.status(201).json(savedArrondissement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'arrondissement' });
  }
};

// Récupérer un arrondissement par son ID
const getArrondissementById = async (req, res) => {
  try {
    const arrondissement = await Arrondissement.findById(req.params.id);
    if (!arrondissement) {
      return res.status(404).json({ message: 'Arrondissement non trouvé' });
    }
    res.status(200).json(arrondissement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'arrondissement' });
  }
};

module.exports = {
  getArrondissements,
  addArrondissement,
  getArrondissementById,
};
