const mongoose = require('mongoose')

async function connectDb() {
  try {
    await mongoose.connect('')
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectDb
