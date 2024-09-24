const mongoose = require('mongoose');

const arrondissementSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true, 
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model('Arrondissement', arrondissementSchema);
