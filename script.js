/*

El DOM = document object model  modelo objeto del documento 

Objeto en Javascript, por lo tanto va a tener propiedades y comportamientos asociados.

atributos y funciones (métodos)


Es en forma más sencilla una variable en JS que va a traer una abstracción de mi documento de HTML
*/



let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Martha Natalia')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Desarrollo web')
    .pauseFor(2500)
    .deleteChars(14)
    .start();

