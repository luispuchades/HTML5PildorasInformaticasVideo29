///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS IV
 * Origin: Video29.html ==> Crear trazados
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var i,
        lienzo;
    //CREAR TRAZADO EN CANVAS
    //1. Indicamo que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Comenzamos el trazado
    lienzo.beginPath();
    //3. Llevamos el lápiz a las coordenadas iniciales
    lienzo.moveTo(100,200);
    //4. Especificamos las coordenadas de destino del primer punto
    lienzo.lineTo(200,200);
    //5. Especificamos las coordenadas de destino de los siguientes puntos
    lienzo.lineTo(200,100);
    lienzo.lineTo(100,100);
    lienzo.lineTo(100,200);
    //6. Cerramos el trazado con una máscara
    lienzo.clip();
    
    // Generamos líneas
    for (i = 0; i < 250; i = i + 5) {
        lienzo.beginPath();
        lienzo.moveTo(100,i);
        lienzo.lineTo(200,i);
        lienzo.closePath();
        lienzo.stroke();
        
    }
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
