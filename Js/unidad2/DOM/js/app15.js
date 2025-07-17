// Event bubbling = propagacion de eventos

const cardDiv = document.querySelector('.card')

const cardInfo = document.querySelector('.info')

const cardTitulo = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Click en card');
    
})

cardInfo.addEventListener('click', (e) => {
    console.log('Click en Info');
    e.stopPropagation()
})


cardTitulo.addEventListener('click', (e) => {
    console.log('Click en titulo');
    e.stopPropagation()
    
})