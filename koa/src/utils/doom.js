const mongoose = require('mongoose')

const destroy = () => {
  const options = {useNewUrlParser: true}
  
  mongoose.connect('mongodb://127.0.0.1:27017/test', options, async () => {
    await mongoose.connection.db.dropDatabase()
    await mongoose.connection.close()
  })
}

destroy()