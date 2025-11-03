
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

const ex6 = () =>{
    //ejercicio 6}
    const nombres = new Set(["david", "david", "pedro", "juam", "pedro"]);
    alert([...nombres]);
}

const ex7 = () => {
    //ejercicio7
    const arr = [1, 2, 3, 4, 1, 3];
    const tieneDuplicados = (arr) => {       
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    alert(tieneDuplicados(arr))
};

const ex8 = () =>{
    //ejercicio8
    let map = new Map([
        ["arroz", 2.5],
        ["carne", 3.0],
        ["fideo", 5.0]
    ])
    alert("el precio total es: "+(map.get("arroz")+map.get("carne")+map.get("fideo")))
}

const ex9 = () =>{
    //ejercicio9
    let texto = prompt("Ingresa una frase:");
    let palabras = texto.split(" ");
    let mapa = new Map();

    for(let p of palabras){
        if(mapa.has(p)){
        mapa.set(p, mapa.get(p)+1);
        }else{
        mapa.set(p,1);
        }
    }
    mapa.forEach((v,k)=> res += `${k} => ${v}\n`);
    alert(res);
}

const ex10 = () =>{
    let capitales = new Map([
        ["peru", "lima"],
        ["chile", "santiago"],
        ["francia", "paris"]
    ]);

    const invertirMap = map =>{
        const invertido = new Map();
        for (let [clave, valor] of map) {
            invertido.set(valor, clave);
        }
        return invertido;
    }

    let resultado = invertirMap(capitales);
    let texto = "";
    for (let [clave, valor] of resultado) {
        texto += clave + " → " + valor + "\n";
    }
    alert(texto);
}

const ex11 = () =>{
    let auto ={
        marca : "toyota",
        modelo : "yaris",
        año : 2025,

        detalles() {
        let tex = " ";
        tex += "Marca: " + this.marca + "\n Modelo: " + this.modelo + "\n Año: " + this.año;
        alert(tex);
        }
    }
    auto.detalles();


}

const ejer12 = () =>{
    let texto = prompt("Ingresa un texto:");
    texto = texto.toLowerCase();
    let letras = {};

    for (let letra of texto) {
        if (letra !== " ") {
            letras[letra] = (letras[letra] || 0) + 1;
        }
    }

    let salida = "";
    for (let l in letras) {
        salida += l + ": " + letras[l] + "\n";
    }
    alert(salida);
}

const ejer13 = () =>{
    const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
    const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

    const combinarCatalogos = (a, b) =>{
        let combinado = { ...a };
        for (let producto in b) {
            if (combinado[producto]) {
                combinado[producto] = Math.min(combinado[producto], b[producto]);
            } else {
                combinado[producto] = b[producto];
            }
            combinado[producto] = combinado[producto].toFixed(2);
        }
        return combinado;
    }

    const resultado = combinarCatalogos(tiendaA, tiendaB);
    let texto = "";
    for (let p in resultado) {
        texto += p + ": $" + resultado[p] + "\n";
    }
    alert(texto);
}

const ejer14 = () =>{
    const listaEmpleados = [
        { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
        { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
        { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
        { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];

    const gestionarEmpleados = (empleados) =>{
        let mapa = new Map();
        for (let emp of empleados) {
            if (!mapa.has(emp.area)) {
                mapa.set(emp.area, []);
            }
            mapa.get(emp.area).push(emp.nombre);
        }
        return mapa;
    }

    const resultado = gestionarEmpleados(listaEmpleados);
    let texto = "";
    for (let [area, nombres] of resultado) {
        texto += area + ": " + nombres.join(", ") + "\n";
    }
    alert(texto);
}
