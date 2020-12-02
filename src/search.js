import './search.scss';
import { KAKAO_KEY } from './constant.js';
import axios from 'axios';

const form = document.getElementById('form');
const searchResult = document.getElementById('search-result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  function searchData() {
    return axios({
      method: 'GET',
      url: 'https://dapi.kakao.com/v3/search/book',
      headers: { Authorization: KAKAO_KEY },
      params: {
        query: searchTerm,
        target: 'title'
      }
    });
  }
  searchData()
    .then((res) => {
      console.log(res.data.documents);
      let searchItemArr = res.data.documents;
      return getSearchResult(searchItemArr);
    })
    .catch((e) => {
      console.log('search error', e);
    });
});

const getSearchResult = (bookTitles) => {
  const htmlString = bookTitles
    .map((book, index) => {
      return `<table width="100%" id=book-info${index}>
        <tbody>
            <colgroup>
                <col width="350">
                <col width="700">
            </colgroup>
            <tr>
                <td>
                    <img src="${book.thumbnail}">
                </td>
                <td>
                    
                        <h1 class="book-title" id=book-${index}>
                            ${book.title}
                        </h1>
                        <p class="book-price">
                            정가 ${book.price}원
                        </p>
                        <p class="book-author">
                            ${book.authors}
                        </p>
                        <span class="book-publisher">
                            ${book.publisher}
                        </span>
                        <span class="book-publish-date">
                            ${book.datetime}
                        </span>
                    
                </td>
            </tr>
        </tbody>
    </table>`;
    })
    .join('');
  searchResult.innerHTML = htmlString;
};
