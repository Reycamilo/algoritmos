
const sloganUNah = function() {
    console.log('#ProgramaPuma');
    
}

// segunda opcion
const sloganUNah2 = () => {
    console.log('#ProgramaPuma');
    
}

sloganUNah()
sloganUNah2()

const aprendiendo = function(lenguaje, tema) {
    console.log(`Aprendiendo ${lenguaje} y ${tema}`);
    
}
aprendiendo('JavaScript', 'flechas')

const aprendiendo2 = (lenguaje, tema) =>
    console.log(`Aprendiendo ${lenguaje} y ${tema}`);
    
aprendiendo2('Js', 'flechas')

// ******************************************************************************************

const reproductor = {
    reproducir : (id) => 
        console.log(`Reproduccion cancino con id : ${id}`),
    pausar: () => 
        console.log('Pausando....'),
    crearPlayList : (nombre) => 
        console.log(`Playlist ${nombre} creada.`),
    reproducirPlaylist : (nombre) => 
        console.log(`Reproducionedo la playlist ${nombre}`),

}

reproductor.reproducir(120)
reproductor.pausar()
reproductor.crearPlayList('Hacer deploy sin llorar')
reproductor.reproducirPlaylist('2024 Madiel Lara')

reproductor.borrarCancion = function(id) {
    console.log(`Cancion con id : ${id} borrada.`);
}
reproductor.borrarCancion(100)