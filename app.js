//Creación del array para almacenar los nombres
let amigos = [];

//Implementación de la función para agregar amigos
function agregarAmigo(){
    //Captura del valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    //Validación de entrada
    if (nombreAmigo === ""){
        alert ("Ingrese el nombre de un amigo o amiga.");
        return;
    }

    if (amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya se encuentra ingresado al listado`);
        return;
    }
    //Actualización del array
    amigos.push(nombreAmigo);
    //Limpieza y actualización del campo de entrada
    inputAmigo.value = "";
    actualizarLista();
}

//Implementación de la función para actualizar lista de amigos
function actualizarLista(){
    //Obtención del elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    //Limpieza de la lista existente
    listaAmigos.innerHTML = "";
    //Bucle para recorrer el arreglo y creación y asignación de nuevos elementos
    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement ('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Implementación de la función para el sorteo del amigo secreto
function sortearAmigo(){
    //Validación de disponibilidad de nombres para el sorteo    
if(amigos.length === 0){ 
    alert ("No hay amigos disponibles para sorteo");
    return;
    }
    //Generación del índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtención del nombre ganador
    const amigoSorteado = amigos[indiceAleatorio];
    //Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}