import axios from 'axios';

const KEY = 'AIzaSyALvCEsCmMMCm3gsNDmfb7fFyl8EaugsQI';


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});