const mongoose = require('mongoose')

async function connectDb() {
  try {
    await mongoose.connect('<insert_db_string_here>')
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectDb
D
