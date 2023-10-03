import { generateWindowList } from './listGen.js';

class windowItem {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}

const mainContent = document.querySelector('main');
const numberOfImages = 6;

const itemArray = generateWindowList(numberOfImages);

mainContent.innerHTML = itemArray.map(item => {
  return `<div class="windowItem" onClick="focusWindow(this)">
                <img src="/images/${item.image}" alt="${item.name}">
                <div class="windowDescription">${item.name}</div>
                <div class="windowPrice">${item.price}</div>
            </div>`
}).join('');

function focusWindow(element) {
  Array.from(document.getElementsByClassName('windowItem')).forEach(elements => {
    elements.classList.toggle('hidden');
  });
  element.classList.toggle('focus');
  element.classList.toggle('hidden');
  document.querySelector("main").classList.toggle('focus');
  console.log("this is blurred")
}

