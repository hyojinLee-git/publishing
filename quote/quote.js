import data from './quoteData.js';
const bg = document.querySelector('.background');
const quote = document.querySelector('.quote');
const createWidget = document.querySelector('.create-widget');
const widget = document.querySelector('.widget');

//클라이언트 width, height에 따라서 이미지 할당
const clientWidth = document.querySelector('body').clientWidth;
const clientHeight = document.querySelector('body').clientHeight;
bg.style.backgroundImage = `url(https://source.unsplash.com/random/${clientWidth}*${clientHeight}/?nature)`;

//명언 데이터에서 랜덤으로 가져오기
let num = parseInt(Math.random() * data.length);
quote.innerHTML = `${data[num].message} -${data[num].author}`;

createWidget.addEventListener('click', () => {
  widget.style.display = 'block';
});
