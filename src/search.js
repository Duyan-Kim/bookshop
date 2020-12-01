import './search.scss';
import { API_KEY, BABY } from './constant.js';
import axios from 'axios';

const searchBar = document.getElementById('searchBar');
const searchResult = document.getElementById('search-result');
let bookArr = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  const filterTitle = bookArr.filter((book) => {
    return book.title.includes(searchString);
  });
  console.log(searchString);
  console.log(filterTitle);
});

function searchData() {
  return axios({
    method: 'GET',
    url: '/api/search.api',
    params: {
      key: API_KEY,
      categoryId: BABY,
      output: 'json',
      inputEncoding: 'euc-kr'
    }
  });
}

searchData()
  .then((res) => {
    let bookArr = res.data.item;
    return getSearchResult(bookArr);
  })
  .catch((e) => {
    console.log('search error', e);
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
                    <img src="${book.coverLargeUrl}">
                </td>
                <td>
                    <a href="" class="search-link">
                        <h1 class="book-title">
                            ${book.title}
                        </h1>
                        <p class="book-price">
                            ${book.priceStandard}
                        </p>
                        <p class="book-author">
                            ${book.author}
                        </p>
                        <span class="book-publisher">
                            ${book.publisher}
                        </span>
                        <span class="book-publish-date">
                            ${book.pubDate}
                        </span>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>`;
    })
    .join('');
  searchResult.innerHTML = htmlString;
};
