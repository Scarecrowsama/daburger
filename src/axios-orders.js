import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-5b961.firebaseio.com/'
});

export default instance;