// A dependência axios irá fornecer a webservice.
import axios from 'axios';

// URL base de onde vai ser extraída a API.
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;