import './info.scss';
import { getRecommended } from './api/index.js';

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
