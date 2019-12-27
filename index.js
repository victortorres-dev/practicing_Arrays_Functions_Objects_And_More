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

//Código Asincrono JS
//Los callback se ejecutan dentro de la funcion en la cual se les pasa para continuar una serie de rutinas
//por tanto se pasa como parametro

function sumas(a, b, callback) {
   let result = a + b; 
    callback(result); //en este caso, se pasa el resultado comoparametro a la funcion que se ejecutara para continuar la rutina
}

function resultado(result) {// se pasa el parametro result; para trabajar lo pertinente
    alert('El resultado es: ' + result)
}

sumas(7,7, resultado) //se envian los parametros a la funcion suma para que los trabaje

//Otro ejemplo practico de callbacks, simulando nuevos datos que llegan:
const paises = ['México', 'España', 'Venezuela']

//Agregar un nuevo pais
function agregarPais(paisNuevo, callback) {
    setTimeout( function() {
        paises.push(paisNuevo)
        callback();
    }, 3000)
}

//Mostrar paises
function mostrarPaises (){
    setTimeout( function() {
        let html = '';
        paises.forEach(function (pais) {
            console.log(pais)
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000 )
}

mostrarPaises();

//Integrando la funcionalidad de un callback; agregar un nuevo pais y visualizarlo nuevamente en la lista despues de 3 segundos
agregarPais('Irlanda', mostrarPaises) //la funcion es invocada sin "()"

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Promesas    ->  https://stackoverflow.com/questions/39369269/nodejs-when-to-use-promises
/*    
Si su función es (a veces) asíncrona, debe devolver una promesa.
Si su función nunca hace nada asíncrono, no hay una buena razón 
para que le devuelva una promesa, y debe evitarla. Mantenlo simple y sincrónico.
*/

//La ventaja de las promesas es que a partir de sus estados se pueden manejar acciones a partir un tiempo desconocido en la solicitud de datos p ejemplo.

//Ejemplo sencillo; se manjan dos de los tres estados de una promesa resolve y reject (el estado por defecto es pending)

const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if (descuento) {
        //Estado resuelto
        resolve('Descuento aplicado');
    } else {
        //Estado rechazado; error!
        reject('No se pudo aplicar el descuento');
    }
})

//El estado reject va de la mano con " .then " -> resultado (en este caso) es por defecto el parametro resolve recibido por "then"
aplicarDescuento.then(function(resultado){
    console.log(resultado)
}).catch(function (error) { //-> error (en este caso) es por defecto el parametro reject recibido por "catch"
    console.log(error)  
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sintaxís de las Arrow Functions

//Escritura común de una función:
let aprendiendo = function() {
    console.log('Aprendiendo javaScirpt con arrow functions');
}

aprendiendo();

// Utilizando la sintaxis de una arrow function:

//Una funcion que solo utiliza una linea no requiere las llaves " {} "
aprendiendoArrow = () => console.log('Aprendiendo javaScirpt con arrow functions (Una sola linea)');
aprendiendoArrow();

//Retorna valor:
aprendiendoArrow = () => 'Aprendiendo javaScirpt con arrow functions (Retorna valor)';
console.log(aprendiendoArrow());

//Retorna un objeto:
aprendiendoArrow = () => ({aprendiendo: 'Aprendiendo javaScirpt con arrow functions (Retorna Objeto)'})
console.log(aprendiendoArrow());

//Pase de parametros

//pasando un unico parametro:
aprendiendoArrow = parametro => `Aprendiendo javaScirpt con arrow functions, pase de paramtro ${parametro}`
console.log(aprendiendoArrow('paramtrito'));

//pasando más de un parametro:
aprendiendoArrow = (parametro1, parametro2) => `Aprendiendo javaScirpt con arrow functions, pase de paramtro ${parametro1}, ${parametro2}`
console.log(aprendiendoArrow('parametro 1', 'parametro 2'));

//  Un ejemplo practico de Arrow functions
const productos = ['Guitarra', 'Violín', 'Chancla'];

// Usando un callback tradicional
productos.forEach(function(producto){
    console.log(producto)
})

// Usando un callback con arrow functions
productos.forEach( producto => console.log('forEachArrow: ' + producto))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/* https://stackoverflow.blog/2019/09/12/practical-ways-to-write-better-javascript/ */
/* https://www.escuelajavascript.com/funciones-asincronas/ */

//Async Await

/*
Sí, async / await resuelve un problema en particular que los generadores por sí solos no pueden: 
la capacidad de esperar algún valor asincrónico dentro de un generador verdadero (uno que arroje
valores reales, no una rutina que produzca promesas o troncos en un trampolín). Estos trampolines 
coro son un truco inteligente, pero la sintaxis async / await(espera) permite que estas dos características
del lenguaje completamente distintas se vuelvan verdaderamente ortogonales. Esto es importante por derecho
propio, pero también tiene una utilidad inmediata (por ejemplo, transmisiones diferidas más elegantes que usan iteraciones for-of)
*/

/*tu declaras que parte deba ser asincrona, permitiendo detener ciertas ejecuciones hasta que una promesa por ejemplo, se cumpla; 
porque simplemente: síncrono simplemente significa que no espera a que se complete algo después de iniciarlo.*/

//await: detiene/espera la ejecucion de cierta parte hasta que (en este caso), un promise haya finalizao o se cumpla

//simulando carga desde el servidor

//esta funcion representa una solicitud de carga de datos, que podria demorar cierto tiempo: por ello conviene manejarla como asincrona
async function cargarClientes() {
    /*implemento una promesa para poder manipular los estados resuelto y rechazado; ademas de awit para manipular ciertas
    ejecuciones que deben darse hasta esperar la respuesta de la promesa*/ 
    const clientes = new Promise((resolve, reject) => {
        //simulando carga desde el servidor
        setTimeout(() => {
            resolve('AsyncAwait -> Clientes descargados')
        }, 4000);    
    })

    const error = false

    if (!error) {
        //si no ocurren errores generamos una "respuesta" que espere a la promesa "clientes" y la retornamos
        const respuesta = await clientes
        return respuesta

    } else {
        //si ocurrio un error, tambien esperamos por su "estado de error" y lo "interpretamos/capturamos" en el reject de la promesa
        await Promise.reject('AsyncAwait -> Ocurrio un error...')
    }

}

//Llamamos a la funcion cargarClientes() que implementa una promesa, por lo tanto obtenemos acceso a sus propiedades then y catch
cargarClientes()
    .then(res => console.log(res))//Por defecto then se asocia al estado "resolve" de la promesa
    .catch(error => console.log(error))//y por defecto catch esta esta asociado con el estado "reject" de la promesa


/////////////////////////////////////////////////////////////////////////////////////////////////////////