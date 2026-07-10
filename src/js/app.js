// Selectores
const btnMenu = document.querySelector('#menu');

// Listeners
document.addEventListener('DOMContentLoaded', abrirMenu);
btnMenu.addEventListener('click', () => {
    opcion = '';
    abrirMenu();
});

// Variables
let opcion = '';

// Functions
function abrirMenu() {

    while(opcion !== '3') {
        opcion = prompt('Elige una opcion\n1- Iniciar Sesion\n2- Sumar Dos Numeros\n3- Salir del menu');

        if(opcion === '3' || opcion === null) {
            alert('Adios Nos Vemos!');
            break;
        };

        switch(opcion) {
            case '1':
                iniciarSesion();
                break;
            case '2':
                sumarNumeros();
                break;
            default:
                alert('Opcion No Valida');
        };
    };
};

function iniciarSesion() {
    const usuario = 'Sebastian';
    const password = 'CoderHouse777';
    const passwordInput = prompt(`Saludos ${usuario}, ingrese su password`);

    if(password === passwordInput) {
        alert('Felicidades Ingresaste Correctamente');
        opcion = '3';
    } else if(passwordInput === null) {
        alert('Adios Nos Vemos!');
    } else {
        alert('Credenciales Invalidas');
        iniciarSesion();
    };
};

function sumarNumeros() {
    const numeroA = '15';
    const numeroB = 15;
    const sumarMensaje = confirm('Vas a Sumar NumeroA y NumeroB, Quieres Continuar?');

    switch(sumarMensaje) {
        case true:
            procesarNumeros(numeroA, numeroB);
            break;
        case false:
            alert('Adios Nos Vemos!');
            break;
        default:
            alert('Opcion No valida');
    };
};

function procesarNumeros(numeroA, numeroB) {
    const validacion = confirm('Estos Numeros, no son iguales, quieres transformarlos a Numbers?');

    if(validacion === false) {
        alert('Ok, Nos Vemos!');
        abrirMenu();
    } else {
        const parseNumeroA = parseInt(numeroA);
        const resultado = parseNumeroA + numeroB;

        alert(`El Resultado de la suma es ${resultado} :)`);
        opcion = '3';
    };
};