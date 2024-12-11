const mongoose = require('mongoose');
const CategoryMaster = require('./CategoryModel')// Importing CategoryMaster model

const SurveyDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/ // Email validation
  },
  age: {
    type: Number,
    required: true, // Age is required
  },
  description: {
    type: String,
    required: true, // Subject description
    enum: ['MERN Stack', 'Java', 'Python', '.NET'],
  },
  recommend: {
    type: String,
    required: true,
    enum: ['yes', 'no', 'maybe'],
  },
  languages: {
    type: String,
    required: true,
    enum: ['C# & Dotnet', 'Java & Django', 'Dontknow'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Foreign key reference
    ref: 'CategoryMaster', // Reference to CategoryMaster model
    required: true, // Category reference is mandatory
  }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Create and export the SurveyDetails model
const SurveyDetails = mongoose.model('SurveyDetails', SurveyDetailsSchema);

module.exports = SurveyDetails;
