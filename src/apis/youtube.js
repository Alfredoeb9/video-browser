import axios from 'axios';

const KEY = 'AIzaSyBuRk55HITPn7wxghUjuxfo7PZr-DHx73Q';


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});