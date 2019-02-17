import mongoose from 'mongoose'

const initDatabase = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true})

  mongoose.connection
    .on('error', (error) => console.log(error))
    .on('close', () => console.log('Database closed'))
    .once('open', () => console.log('Database opened'))
}

export default initDatabase