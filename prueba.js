const nombres = ["Juan", "Ana", "Pedro", "María", "Luis", "Elena", "Ana", "Esteban"];

function ordenarNombresYContar(nombresDesordenados, ordenar = null){
    let ordenados, contadorAyE, contadorRepetidos, setNombresDesordenados;

    // Ordenar los elementos por orden de manera ascendente o descendente dependiendo de la condicion pasada
    if (ordenar)
        ordenados = nombresDesordenados.sort();
    else 
        ordenados = (nombresDesordenados.sort()).reverse();

    // Encontrar valores repetidos
    setNombresDesordenados = new Set(nombresDesordenados);
    contadorRepetidos = nombresDesordenados.length - setNombresDesordenados.size;

    // Contar repeticiones de nombres con inicial A y E
    contadorAyE = (nombresDesordenados.filter(nombre => nombre[0].toUpperCase() === 'A' || nombre[0].toUpperCase() === 'E')).length;

    // Crear el objeto de respuesta y guardar los datos a devolver
    let respuesta = { };

    respuesta.nombresOrdenados = ordenados;
    respuesta.repeticiones = contadorRepetidos;
    respuesta.nombresAE = contadorAyE;

    return respuesta;
}

let resultado = ordenarNombresYContar(nombres);
console.log("Nombres ordenados:", resultado.nombresOrdenados);
console.log("Nombres repetidos:", resultado.repeticiones);
console.log("Nombres que comienzan con 'A' o 'E':", resultado.nombresAE);

let resultado2 = ordenarNombresYContar(nombres, true);
console.log("Nombres ordenados:", resultado2.nombresOrdenados);
console.log("Nombres repetidos:", resultado2.repeticiones);
console.log("Nombres que comienzan con 'A' o 'E':", resultado2.nombresAE);