import axios from 'axios';

export default axios.create({
  proxy: {
    host: '173.82.95.15',
    port: 5000
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
