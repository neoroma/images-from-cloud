import axios from 'axios'
import { compose, map, prop, propOr } from 'ramda'
import { API_KEY, API_SECRET, CLOUD_NAME } from './config.js'

const getSecureUrls = map(prop('secure_url'))
const getResultsFromData = compose(getSecureUrls, propOr([], 'resources'))

const apiUrl = `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}`

async function getAllImagesList() {
  try {
    const { data } = await axios(`${apiUrl}/resources/image`)
    return getResultsFromData(data)
  } catch (e) {
    return []
  }
}

async function getImagesListByTag(tag) {
  try {
    const { data } = await axios(`${apiUrl}/resources/image/tags/${tag}`)
    return getResultsFromData(data)
  } catch (e) {
    return []
  }
}

export { getAllImagesList, getImagesListByTag }
