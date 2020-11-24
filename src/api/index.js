import { API_KEY } from '../constant';
import axios from 'axios';

const BABY = 109;
const kid = 110;

export function getBabyBestSeller() {
  return axios({
    method: 'GET',
    url: 'http://book.interpark.com/api/bestSeller.api',
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
    url: 'http://book.interpark.com/api/bestSeller.api',
    params: {
      key: API_KEY,
      categoryId: kid,
      output: 'json'
    }
  });
}

export function getRecommended() {
  return axios({
    method: 'GET',
    url: 'http://book.interpark.com/api/recommend.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json'
    }
  });
}

export function getRank() {
  return axios({
    method: 'GET',
    url: '../src/data/rentRanking.json',
    header: 'application/json'
  });
}

export function getNewItem() {
  return axios({
    method: 'GET',
    url: 'http://book.interpark.com/api/newBook.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json'
    }
  });
}
