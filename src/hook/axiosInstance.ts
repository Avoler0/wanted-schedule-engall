import axios from 'axios';
import { HttpRequest } from "./httpRequest"

export const BASE_URL = 'http://localhost:8000/';

export const axiosCreate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});


export const Schedule = new HttpRequest(axiosCreate);
