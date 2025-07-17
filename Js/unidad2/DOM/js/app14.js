window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollBy
    // console.log('Scorlling: ${scroliPX}');
    
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if (ubicacion.top < 1700) {
        console.log('La seccion es visible.');
        
    } else {
        console.log('La seccion no es visible.');
        
    }
    

})