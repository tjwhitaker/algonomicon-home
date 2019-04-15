import dotenv from 'dotenv'
import mongoose from 'mongoose'

const initialize = () => {
  dotenv.config()

  const options = {useNewUrlParser: true}
  
  mongoose.connect(process.env.DB_URL, options)

  mongoose.connection
    .on('error', (error) => console.log(error))
    .on('close', () => console.log('Database closed'))
    .once('open', () => console.log('Database opened'))
}

export default initialize