import { API_KEY } from "../constant.js";

const baby = 109;
const kid = 110;

export function getBabyBestSeller() {
  return axios({
    method: "GET",
    url: "http://book.interpark.com/api/bestSeller.api",
    params: {
      key: API_KEY,
      categoryId: baby,
      output: "json",
    },
  });
}

export function getKidBestSeller() {
  return axios({
    method: "GET",
    url: "http://book.interpark.com/api/bestSeller.api",
    params: {
      key: API_KEY,
      categoryId: kid,
      output: "json",
    },
  });
}

export function getRecommended() {
  return axios({
    method: "GET",
    url: "http://book.interpark.com/api/recommend.api",
    params: {
      key: API_KEY,
      categoryId: 109,
      output: "json",
    },
  });
}
