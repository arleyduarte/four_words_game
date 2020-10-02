import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.textgears.com/check.php',
});
