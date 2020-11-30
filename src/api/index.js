import { API_KEY, NYT_KEY, BABY, KID } from '../constant.js';
import axios from 'axios';

export function getBabyBestSeller() {
  return axios({
    method: 'GET',
    url: '/api/bestSeller.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json'
    }
  });
}

export function getKidBestSeller() {
  return axios({
    method: 'GET',
    url: '/api/bestSeller.api',
    params: {
      key: API_KEY,
      categoryId: KID,
      output: 'json'
    }
  });
}

export function getRecommended() {
  return axios({
    method: 'GET',
    url: '/api/recommend.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json'
    }
  });
}

export function getNewItem() {
  return axios({
    method: 'GET',
    url: '/api/newBook.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json'
    }
  });
}

export function getNytSeriesBookBestSeller() {
  return axios({
    method: 'GET',
    url: 'https://api.nytimes.com/svc/books/v3/lists/current/series-books.json',
    params: {
      'api-key': NYT_KEY
    }
  });
}
