import { API_KEY } from '../constant';
import axios from 'axios';

const Kakao_KEY = 'KakaoAK 1193b096ba6b9f1eabda27c0cf04e2d8';
const BABY = 109;
const kid = 110;
//const NYT_KEY = 'huSM1GjyK83CI4bZdJFVgYf1ZBm59m03';

const inputValue = document.getElementById('inputValue');

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

export function getNytPictureBookBestSeller() {
  return axios({
    method: 'GET',
    url:
      'https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?api-key=huSM1GjyK83CI4bZdJFVgYf1ZBm59m03'
    //params: {
    //  api-key: KEY,
    //}
  });
}

export function getNytSeriesBookBestSeller() {
  return axios({
    method: 'GET',
    url:
      'https://api.nytimes.com/svc/books/v3/lists/current/series-books.json?api-key=huSM1GjyK83CI4bZdJFVgYf1ZBm59m03'
    //params: {
    //  api-key: KEY,
    //}
  });
}

export function getNytMiddleGradeBookBestSeller() {
  return axios({
    method: 'GET',
    url:
      'https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-hardcover.json?api-key=huSM1GjyK83CI4bZdJFVgYf1ZBm59m03'
    //params: {
    //  api-key: KEY,
    //}
  });
}

export function getNytYoungAdultBookBestSeller() {
  return axios({
    method: 'GET',
    url:
      'https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=huSM1GjyK83CI4bZdJFVgYf1ZBm59m03'
    //params: {
    //  api-key: KEY,
    //}
  });
}

export function getSearchResult() {
  return axios({
    method: 'GET',
    url: 'https://dapi.kakao.com/v3/search/book?target=title',
    params: {
      Authorization: Kakao_KEY,
      query: inputValue
    }
  });
}
