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

//Manejo de errores con try y catch
/* La declaración try-catch debe ejecutarse solo en las secciones de código
donde sospecha que pueden ocurrir errores, y debido a la abrumadora cantidad
de circunstancias posibles, no puede verificar completamente si se producirá
un error o cuándo lo hará. En este último caso, sería apropiado usar try-catch. */

try {
    console.log('try permite probar un bloque de código en busca de errores.')
    llamandoAunaFuncionDeterminada();
} catch (error) {
    console.log('catch permite manejar el error, en este caso deberia decir que la funcion llamada en try no esta definida: ')
    console.log('error: ' + error);
} finally {
    console.log('finally permite ejecutar código, después de intentar y atrapar, independientemente del resultado (es decir, si hay o no error).')
}

obtenerClientes();

function obtenerClientes() {
    console.log('Descargando');

    setTimeout( function() {
        console.log('Descarga Completada')
    }, 3000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 https://openwebinars.net/blog/errores-comunes-en-javascript/
 */
//Creando Objetos y la palabra this:
//En JS, this se establece en tiempo de ejecucion

//Object literal
//this -> importante para poder acceder a los atributos/propiedades de un objeto
//this -> es una referencia al objeto desde el que se llama la funcion

const cliente = {
    nombre: 'Juan',
    saldo: 500,
    tipo: 'Normal',
    tipoCliente: function() {
        let tipo;
        if (this.saldo >= 5000) {
            tipo = 'Premium'
        } else if(this.saldo >= 1000) {
            tipo = 'Gold'            
        } else {
            tipo = 'Normal'
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente())

//Método alternativo con paso de parametros
/* http://www.etnassoft.com/2012/01/12/el-valor-de-this-en-javascript-como-manejarlo-correctamente/ */

function MiCliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipo = function(edad) {
        let tipo;
        if (this.saldo >= 5000) {
            tipo = 'Premium'
        } else if(this.saldo >= 1000) {
            tipo = 'Gold'            
        } else {
            tipo = 'Normal'
        }

        return tipo;
    }
}

const persona2 = new MiCliente('Jose', 5000);
const persona3 = new MiCliente('Fersita', 2500);

console.log(persona2);
console.log(`persona3: ${persona3.tipo()}`);

//otra practica sobre this
function test(){
  console.log( this === window);
}

test(); // true

console.log( this === window );  // true

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Prototypes
/*En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos. 
Cada objeto tiene una propiedad privada (referida como su [[Prototype]]) que mantiene 
un enlace a otro objeto llamado su prototipo. Ese objeto prototipo tiene su propio prototipo, 
y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es null. Por definición, 
null no tiene prototipo, y actúa como el enlace final de esta cadena de prototipos.*/

function LiverpoolCliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

LiverpoolCliente.prototype.tipoClienteLiverpool = function() {
    let tipo;
    if (this.saldo >= 5000) {
        tipo = 'Premium';
    } else if(this.saldo >= 1000) {
        tipo = 'Gold';            
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

LiverpoolCliente.prototype.saldoActual = function () {
    return `Hola: ${this.nombre}, tu saldo actual es de: ${this.saldo}`
}

//Retirar saldo
LiverpoolCliente.prototype.retirarSaldo = function (cantidadDeRetiro) {
    return this.saldo -= cantidadDeRetiro;
}


const clienteLiverpool1 = new LiverpoolCliente('Vic', 1000)
console.log(clienteLiverpool1)
console.log(`Nommbre: ${clienteLiverpool1.nombre}, Tipo: ${clienteLiverpool1.tipoClienteLiverpool()}`)

//Ejecutando retiro
clienteLiverpool1.retirarSaldo(100);
console.log(clienteLiverpool1.saldoActual())

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Clases ECMASCRIPT6 
//y atributos estaticos -> usados cuando no se requiere crear una nueva instancia, unicamente se quiere
// acceder a una propiedad o metodo de la clase, pasando unicamente el <nombre de la clase>.<el metodo estatico>

class ClienteES6 {
    constructor (nombreES6, apellidoES6, saldoES6) {
        this.nombreES6 = nombreES6;
        this.apellidoES6 = apellidoES6;
        this.saldoES6 = saldoES6;
    }

    imprimirSaldo() {
        return `Hola ${this.nombreES6}, tu saldo actual es de: ${this.saldoES6}`;
    }

    //atributo estatico
    static saludarES6 (nameSaludo) {
        this.nameSaludo = nameSaludo;
        return `Bienvenido a tu cajero ${this.nameSaludo}`;
    }
}

const cliententeES6 = new ClienteES6('VictorES6', 'TorresES6', 0);
console.log(cliententeES6.imprimirSaldo());

//probando atributo estatico
//console.log(cliententeES6.saldoES6()); // -> error
console.log(ClienteES6.saludarES6('VicES6')); 

/////////////////////////////////////////////////////////////

//Herencia en clases con JavaScript
/*
la finalidad de la herencia es precisamente heredar los métodos y propiedades del padre.
Todos los objetos que extiendan de una Clase padre heredarán sus propiedades y sus métodos.
Fíjarse en que se llama al constructor del padre mediante super para asignar las propiedades
de éste, y luego, en cada objeto particular se asignan las propiedades que no están en el padre.
*/

//     https://es.stackoverflow.com/questions/167596/ejercicio-de-herencia-en-javascript/

class EmpresaES6 extends ClienteES6 {
    constructor (nombreES6, saldoES6, telefonoES6, tipoES6) {
        //Heredamos el constructor del padre
        super (nombreES6, saldoES6);
        //propiedades que no estan en el padre (propias de esta clase)
        this.telefonoES6 = telefonoES6;
        this.tipoES6 = tipoES6
    }

    static saludarES6 (nombreEmpresaToSaludoES6){
        this.nombreEmpresaToSaludoES6 = nombreEmpresaToSaludoES6;
        return `Bienvenido empresa: ${this.nombreEmpresaToSaludoES6}`;
    }

    verDatos(saldoES6) {
        this.saldoES6 = saldoES6;
        console.log(this.saldoES6);
        return ` ->>> ${this.nombreES6}, saldo: ${this.saldoES6}, tipo: ${this.tipoES6}, TEL: ${this.telefonoES6}`
    }
}

const empresita = new EmpresaES6('Mariachi.io', 1000, 250085, 'COnstrucción');

console.log(empresita.verDatos(8500))
console.log(EmpresaES6.saludarES6('Mariachi.IO'))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////