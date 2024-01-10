const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is some text';
container.appendChild(content);
const p = document.createElement('p');
p.style.color = 'red';
content.classList.add('p');
p.textContent = "hey i'm red!";
container.appendChild(p);
const h3 = document.createElement('h3');
h3.style.color = 'blue';
content.classList.add('h3');
h3.textContent = "i'm a blue h3";
container.appendChild(h3);