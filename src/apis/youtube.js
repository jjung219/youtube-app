import axios from 'axios'

const KEY = 'AIzaSyCKP_O7kcnm8jetRgbep21tAcm6kYcZnPk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})