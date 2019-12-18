//Objetos

const persona = {
    nombre: 'Víctor',
    apellido: 'Torres',
    edoCivil: {
        casado: false,
        soltero: true
    },
    edad: 22,
    musica: ['pop', 'pop-rock', 'trap']
}

console.log(persona.nombre + persona.edoCivil.soltero + persona.musica[1]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Arreglos de Objetos

const frutas = [
    {
        nombre:'fresa',
        caracteristicas: {
            piel: 'roja',
            sabor: 'dulce',
            continente: 'Americano'
        },
    },
    {
        nombre:'limón',
        caracteristicas: {
            piel: 'verde',
            sabor: 'ácido',
            continente: 'Asiatico'
        },
    },
    {
        nombre:'naranja',
        caracteristicas: {
            piel: 'marillo oscuro',
            sabor: '',
            continente: 'Europeo'
        },
    }
]

//Leer los datos del arreglo de objetos:

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];

    console.log(
    `Nombre: ${element.nombre}` +
    ', ' +
    `Sabor: ${element.caracteristicas.sabor}` +
    ', ' +
    `Origen: ${element.caracteristicas.continente}`
    );
    
}

/*Importante!: con la palabra reservada "const" no es posible reasignar valores al arrglor "frutas" (a deferencia de let;
  que si lo permite); sin embargo, sí es posible modificar sus valores; ejemplo: */
console.log(`Nombre: ${frutas[1].nombre = 'Piña'}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funciones

//Que impreme un valor
function sumar(a, b) {
    console.log(`resultado: ${a+b}` );
}

sumar(1,2);
sumar(1,1);

//Que retorna un  valor

function sumarAB (a,b) {
    return a+b;
}

let suma;

suma = sumarAB(5,5);
suma = sumarAB(6,6);

console.log(suma);

//Cuando no se le pasa un valor definido, podemos usar uno por defecto:

function saludar(nombre = 'Visitante') {
    return `Hola ${nombre}`;
}

let saludo;

saludo = saludar(); // -> Hola Visitante
//saludo = saludar("Víctor") // -> Hola Víctor

console.log(saludo);

//Function expressions

const restar = function (a = 3, b=2) {
    return a - b;
}

console.log(`Resta:` + restar(5, 2)); // -> 3
console.log(`Resta:` + restar(10)); // -> 8 

//IIFE -> Funciones que se invocan inmediatamente:

(function(tecnologia) {
    console.log(`Aprendiendo: ${tecnologia}`)
})('JS'); // -> Aprendiendo JS

// Metódos de propiedades -> Cuando una funcion se pone dentro de un objeto:

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con Id: ${id}`);
    }
}

musica.reproducir(15);

    //Los metodos también pueden crearse / guardarse fuera del objeto
musica.borrar = function(id) {
    console.log(`Eliminando canción con Id: ${id}`);
}
musica.borrar(20)



/////////////////////////////////////////////////////////////////////////////////////////////////////////