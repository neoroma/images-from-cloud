import dotenv from 'dotenv'

const {
  CLOUD_NAME = process.env.CLOUD_NAME,
  API_KEY = process.env.API_KEY,
  API_SECRET = process.env.API_SECRET,
} = dotenv.config()

export { CLOUD_NAME, API_KEY, API_SECRET }
