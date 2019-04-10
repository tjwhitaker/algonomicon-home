import dotenv from 'dotenv'
import connectDatabase from './db'

const initialize = () => {
  dotenv.config()
  connectDatabase()
}

export default initialize