import { generateWindowList } from './listGen.js';

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

async function getDummyJSON() {
  const response = await fetch('https://dummyJson.com/users');
  const json = await response.json();
  console.log(json.users);
  users = json.users;
  return json.users;
}

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  //if one of the users is in the array and the password is correct then log in
  users.forEach(user => {
    if (user.username === username && user.password === password) {
      console.log('logged in');
    }else{
      console.log('user is not admin');
      console.log(user.username, user.password, username, password)
    }
  })
});
