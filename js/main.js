import { generateWindowList, username, password } from './listGen.js';

class windowItem {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}

const numberOfImages = 6;

const itemArray = generateWindowList(numberOfImages);
const mainContent = document.querySelector('main');

function focusWindow(element) {
  Array.from(document.getElementsByClassName('windowItem')).forEach(elements => {
    elements.classList.toggle('hidden');
  });
  element.classList.toggle('focus');
  element.classList.toggle('hidden');
  mainContent.classList.toggle('focus');
  console.log("this is blurred")
}

mainContent.innerHTML = itemArray.map(item => {
  return `<div class="windowItem">
                <img src="/images/${item.image}" alt="${item.name}">
                <div class="windowDescription">${item.name}</div>
                <div class="windowPrice">${item.price}</div>
            </div>`
}).join('');


const windowItems = document.querySelectorAll('.windowItem');

windowItems.forEach(item => {
  item.addEventListener('click', () => {
    focusWindow(item);
  });
});

const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('show');
});


document.getElementById('loginForm').addEventListener('submit', (event) => {
  const usernameForm = document.getElementById('username').value;
  const passwordForm = document.getElementById('password').value;
  const errorMessage = document.querySelector('.errorMessage');
  event.preventDefault();
  if (usernameForm === "admin" && passwordForm === "MEGASAFE") {
    errorMessage.value = "bien joue voici le site secret : https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    errorMessage.classList.add('show');
    // console.log('nom d\'utilisateur n\'est pas : ' + admin +  " et mot de passe n'est pas : " + password);
  }
});
