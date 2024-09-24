const mongoose = require('mongoose');

const lieuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  arrondissement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Arrondissement', 
    required: true,
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model('Lieu', lieuSchema);
