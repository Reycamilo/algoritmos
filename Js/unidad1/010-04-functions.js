const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduccion cancino con id : ${id}`);
    },

    pausar: function() {
        console.log('Pausando....');
    },

    crearPlayList : function(nombre) {
        console.log(`Playlist ${nombre} creada.`)  
    },

    reproducirPlaylist : function(nombre) {
        console.log(`Reproducionedo la playlist ${nombre}`);
        
    },
}

reproductor.reproducir(120)
reproductor.pausar()
reproductor.crearPlayList('Hacer deploy sin llorar')
reproductor.reproducirPlaylist('2024 Madiel Lara')

reproductor.borrarCancion = function(id) {
    console.log(`Cancion con id : ${id} borrada.`);
}
reproductor.borrarCancion(100)