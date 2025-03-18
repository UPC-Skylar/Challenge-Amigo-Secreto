// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo(){
    let amigo = document.querySelector('.input-name').value.trim();

    //Validamos que no haya campos vacios
    if(amigo === ''){
        alert("Ingrese un nombre válido, por favor");
        return;
    }

    if(listaDeAmigos.includes(amigo)) {
        asignarTextoElementoPorID("notificacion-salida", `${amigo} ya se agregó anteriormente, ingrese otro nombre por favor. 🙌🏻`);
    } else {
        listaDeAmigos.push(amigo);
        asignarTextoElementoPorID("notificacion-salida", `${amigo} se ha agregado exitosamente! 🤝🥳`);
    }

    crearParrafoAmigo(amigo);

    console.log(amigo);
    console.log(listaDeAmigos);

    limpiarCajaNombre();

    return;
}

function crearParrafoAmigo(amigo){
    let parrafo = document.createElement('p');
    parrafo.textContent = amigo;
    parrafo.classList.add("nombres-amigos");
    document.querySelector(".notificaciones").appendChild(parrafo);
}

function limpiarCajaNombre(){
    document.querySelector('.input-name').value = '';
    return;
}

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    document.querySelectorAll(".nombres-amigos").forEach(parrafo => parrafo.remove());

    asignarTextoElementoPorID("notificacion-salida", `El amigo secreto sorteado es: ${amigoSorteado} 🎉`);

    listaDeAmigos = [];
}

function asignarTextoElementoPorID(claseElemento, texto){
    let elementoHTML = document.getElementById(claseElemento);
    elementoHTML.innerHTML = texto;
}