// Traversing The DOM

const navegacon = document.querySelector('.navegacion');

// console.log(navegacon);
// console.log(navegacon.childNodes);
// console.log(navegacon.children);
// console.log(navegacon.children[0]);
// console.log(navegacon.children[0].nodeName);
// console.log(navegacon.children[0].nodeType);

// console.log(navegacon.firstElementChild);
// console.log(navegacon.lastElementChild);


// Navegar desde un padre hacia sus hijos
const card = document.querySelector('.card');

// console.log(card.children[0].src = 'https://aimm.edu/hs-fs/hubfs/rock-guitar-genre.jpg?width=719&name=rock-guitar-genre.jpg');

// card.children[0].src = '/img/hacer2.jpg'

// card.children[1].children[1].textContent = 'Música metal'

// Navegar desde el hijo hacia el padre
// console.log(card.parentElement.parentElement);


// Navegar hacia hermanos
// console.log(card);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimaCard = document.querySelector('.card:nth-child(4)');

ultimaCard.children[1].children[2].innerText = '2lp'

console.log(ultimaCard);
// console.log(ultimaCard.previousElementSibling.previousElementSibling);
