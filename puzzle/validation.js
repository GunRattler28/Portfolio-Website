import { encryptPassword } from './encryption.js';

const storedPasswords = [
  { salt: "f1e2d3c4b5a60718aabbccddeeff0011", hash: "a950f729eb6bf4813aceb1f710dd164e59dfd9459243e2dd67b8111e60b41b1d" }
];

const form = document.getElementById('form');
const inputGroup = document.querySelector('.input-group');
const layer = document.getElementById('link1');
layer.classList.add('active');
const title = document.querySelector('h1');
const codeBlock = document.getElementById('code');
const submitBtn = document.getElementById('submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value.trim();
  const { salt, hash: storedHash } = storedPasswords[0];
  const userHash = await encryptPassword(password, salt);
  if (userHash === storedHash) {
    inputGroup.className = 'input-group correct';
    alert('Password correct! Go to https://gunrattler28.github.io/Puzzle/ to do the rest of the puzzle.');
    document.getElementById('password').value = "";
  } else {
    inputGroup.className = 'input-group incorrect';
    alert('Password incorrect! Try again.');
    document.getElementById('password').value = "";
  }
});