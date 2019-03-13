import mongoose from 'mongoose'

const initDatabase = () => {
  const options = {useNewUrlParser: true}
  
  mongoose.connect('mongodb://127.0.0.1:27017/test', options)

  mongoose.connection
    .on('error', (error) => console.log(error))
    .on('close', () => console.log('Database closed'))
    .once('open', () => console.log('Database opened'))
}

export default initDatabase