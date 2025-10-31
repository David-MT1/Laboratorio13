
const ex3 = () =>{
//Ejercicio 3
let ejer3 = [1,2,3,4,5];
const doblarNumeros = (arreglo) =>{
    for(let i =0; i<arreglo.length;i++){
        arreglo[i]=arreglo[i]*2;
    }
    return arreglo;
}
alert(doblarNumeros(ejer3));

}

const ex4 =()=>{
//ejercicio 4
let ejer4 = [-3,-2,-1,1,2,3];
const filtrarYTransformar = arreglo =>{
    for(let i = 0; i<arreglo.length; i++){
        if(arreglo[i]<0){
            arreglo[i]=0;
        }
    }
    let suma=0;
    for(let a of arreglo){
        a = a*a;
        suma=suma+a;
    }
    alert("la suma es: "+suma);
    }
    filtrarYTransformar(ejer4);
}

const ex5 = () => {
    // Ejercicio 5
    let oracion = "sol luna estrella planeta";

    const reordenarPalabras = (texto) => {
        let palabras = texto.split(" ");
        for (let i = 0; i < palabras.length; i++) {
            palabras[i] = palabras[i].toUpperCase();
        }
        palabras.sort();
        return palabras;
    };

    let resultado = reordenarPalabras(oracion);
    alert("El arreglo ordenado es: " + resultado);
}

const ex6 = () => {
    // Ejercicio 6
    let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "María"];
    let conjuntoNombres = new Set(nombres);

    alert("Nombres sin repetidos: " + Array.from(conjuntoNombres));
};

const ex7 = () => {
    // Ejercicio 7
    let numeros = [1, 2, 3, 4, 2];

    const tieneDuplicados = (arreglo) => {
        let conjunto = new Set(arreglo);
        return conjunto.size !== arreglo.length;
    };

    let respuesta = tieneDuplicados(numeros);
    alert("¿El arreglo tiene duplicados? " + respuesta);
};

const ex8 = () => {
    // Ejercicio 8
    let productos = new Map();
    productos.set("pan", 2.5);
    productos.set("leche", 4.0);
    productos.set("queso", 6.0);
    productos.set("arroz", 3.0);

    let listaCompras = ["pan", "leche", "queso", "pan"];
    let total = 0;

    for (let item of listaCompras) {
        total += productos.get(item);
    }

    alert("El total de la compra es: S/ " + total);
};
