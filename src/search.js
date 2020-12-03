import './search.scss';
import { KAKAO_KEY } from './constant.js';
import axios from 'axios';
import { goToInfo } from './info.js';

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
      let searchItemArr = res.data.documents;
      return getSearchResult(searchItemArr);
    })
    .catch((e) => {
      console.log('search error', e);
    });
});

const getSearchResult = (bookTitles) => {
  const htmlString = bookTitles
    .map((book) => {
      return `<table width="100%">
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
                    
                        <h1 class="book-title">
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

  const resultTitles = document.querySelectorAll('h1');
  for (let title of resultTitles) {
    title.onclick = (e) => {
      const clickedTitle = e.target.innerText;
      console.log(clickedTitle);
      goToInfo(clickedTitle);
      window.location.href = 'http://localhost:8080/info.html';
    };
  }
};
