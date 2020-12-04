import './info.scss';
import { getRecommended } from './api/index.js';
import { KAKAO_KEY } from './constant.js';
import axios from 'axios';

const recommendItem = document.getElementById('recommend-item');

getRecommended()
  .then((res) => {
    for (let i = 0; i < 4; i++) {
      const div = document.createElement('div');
      const a = document.createElement('a');
      const img = document.createElement('img');
      const fadeInBox = document.createElement('div');
      const h5 = document.createElement('h5');
      const p = document.createElement('p');

      a.href = res.data.item[i].link;
      img.src = res.data.item[i].coverLargeUrl;
      h5.textContent = res.data.item[i].title;
      p.textContent = res.data.item[i].author;

      div.classList.add('col-lg-3', 'col-md-6', 'mt-4');
      h5.classList.add('mt-4');

      a.appendChild(img);
      a.appendChild(fadeInBox);
      a.appendChild(h5);
      a.appendChild(p);
      div.appendChild(a);
      recommendItem.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });

const bookInfoDiv = document.getElementById('book-info-div');
const summary = document.getElementById('summary');

export function goToInfo(name) {
  function getInfo() {
    return axios({
      method: 'GET',
      url: 'https://dapi.kakao.com/v3/search/book',
      headers: { Authorization: KAKAO_KEY },
      params: {
        query: name,
        target: 'title'
      }
    });
  }

  getInfo().then((res) => {
    const infoHtml = `<div class="col-12 col-lg-5">
          <img src="../img/cover1.jpg">
        </div>
          <div class="col-12 col-lg-7">
              <div class="book-info-text">
                  <h1 class="title">
                      ${res.title}
                  </h1>
                  <hr>
                  <table>
                      <colgroup>
                          <col width="110">
                          <col width="200">
                      </colgroup>
                      <tr>
                          <td><span class="price">${res.price}</span></td>
                      </tr>
                      <tr>
                          <th scope="row">저자</th>
                          <td><span class="author">${res.authors}</span></td>
                      </tr>
                      <tr>
                          <th scope="row">출판사</th>
                          <td><span class="publisher">${res.publisher}</span></td>
                      </tr>
                      <tr>
                          <th scope="row">발행일</th>
                          <td><span class="publish-date">${res.dateTime}</span></td>
                      </tr>
                      <tr>
                          <td class="shoppingBtn"><a href="#">자세히</a></td>
                      </tr>
    
                      </tbody>
                  </table>
              </div>
           </div>`;

    bookInfoDiv.innerHTML = infoHtml;
    summary.innerText = `${res.content}`;
  });
}
