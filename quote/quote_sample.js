import data from './quoteData.js';

//const text = document.querySelector('.quote');

const modalHandler = document.querySelector('.modalHandler');
const modal = document.querySelector('.modal');
const quote = document.querySelector('.quote');
const textarea = document.querySelector('textarea');
const copy = document.querySelector('.copy');
const close = document.querySelector('.close');
const colors = document.querySelectorAll('.jsColor');

//명언 띄우기
let num = parseInt(Math.random() * data.length);
quote.innerHTML = `${data[num].message} -${data[num].author}`;

colors.forEach(color =>
  color.addEventListener('click', event => {
    const color = event.target.style.backgroundColor;
    quote.style.color = color;
  }),
);

//모달창 띄우기
modalHandler.addEventListener('click', () => {
  modal.style.display = 'block';
  textarea.innerText = quote.outerHTML;
});

//클립보드에 복사 후 모달창 닫기
copy.addEventListener('click', () => {
  textarea.select();
  document.execCommand('copy');
  modal.style.display = 'none';
});

//모달창 닫기
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

// fetch('https://api.adviceslip.com/advice')
//   .then(res => res.json())
//   .then(res => {
//     //console.log(res);
//     text.innerText = res.slip.advice;
//   });
