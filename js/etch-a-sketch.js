const container = document.querySelector('#container');

container.backgroundColor = 'red';
container.border = '1px solid black';
container.width = '100px';
container.height = '100px';

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(container);