import {
  getBabyBestSeller,
  getKidBestSeller,
  getNytSeriesBookBestSeller,
  getNewItem
} from './api/index.js';
import './style.scss';

const babyPubDate = document.getElementById('babyPubDate');
const kidPubDate = document.getElementById('kidPubDate');
const seriesPubDate = document.getElementById('seriesPubDate');
const bestSellerBaby = document.getElementById('baby-Bestseller-item');
const bestSellerKid = document.getElementById('kid-Bestseller-item');
const newItem = document.getElementById('new-item');
const nytSeriesBookBestSeller = document.getElementById('nyt-series-book-bestSeller');

getBabyBestSeller()
  .then((res) => {
    babyPubDate.textContent = res.data.pubDate + ' 업데이트';

    for (let i = 0; i < 8; i++) {
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
      bestSellerBaby.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });

getKidBestSeller()
  .then((res) => {
    kidPubDate.textContent = res.data.pubDate + ' 업데이트';

    for (let i = 0; i < 8; i++) {
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
      bestSellerKid.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });

getBabyBestSeller()
  .then((res) => {
    babyPubDate.textContent = res.data.pubDate + ' 업데이트';

    for (let i = 0; i < 8; i++) {
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
      bestSellerBaby.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });

getNewItem()
  .then((res) => {
    for (let i = 0; i < 8; i++) {
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
      newItem.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });

getNytSeriesBookBestSeller()
  .then((res) => {
    seriesPubDate.textContent = res.data.results.published_date + ' 업데이트';
    for (let i = 0; i < 8; i++) {
      const div = document.createElement('div');
      const a = document.createElement('a');
      const img = document.createElement('img');
      const fadeInBox = document.createElement('div');
      const h5 = document.createElement('h5');
      const p = document.createElement('p');

      a.href = res.data.results.books[i].amazon_product_url;
      img.src = res.data.results.books[i].book_image;
      h5.textContent = res.data.results.books[i].title;
      p.textContent = res.data.results.books[i].author;

      div.classList.add('col-lg-3', 'col-md-6', 'mt-4');
      h5.classList.add('mt-4');

      a.appendChild(img);
      a.appendChild(fadeInBox);
      a.appendChild(h5);
      a.appendChild(p);
      div.appendChild(a);
      nytSeriesBookBestSeller.appendChild(div);
    }
  })
  .catch((e) => {
    console.log('ERROR!!!', e);
  });
