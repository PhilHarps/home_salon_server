const mongoose = require('mongoose')

const PackageSchema = new mongoose.Schema({
  packagename: {
    type: String
  },
  price: {
    type: Number
  },
  services: {
    type: Array
  }
})
