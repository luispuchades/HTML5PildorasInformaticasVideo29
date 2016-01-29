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
    var lienzo;
    //CREAR TRAZADO EN CANVAS
    //1. Indicamo que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Comenzamos el trazado
    lienzo.beginPath();
    //3. Llevamos el lápiz a las coordenadas iniciales
    lienzo.moveTo(100,200);
    //4. Especificamos las coordenadas de destino del primer punto
    lienzo.lineTo(200,200);
    //5. Especificamos las coordenadas de destino del segundo punto
    lienzo.lineTo(150,120);
    //5. Especificamos las coordenadas de destino del segundo punto
    lienzo.lineTo(100,200);
    //6. Cerramos el trazado
    lienzo.closePath();
//    6A. Cerramos el trazado con una máscara
    lienzo.clip();
    //7. Damos la orden de que dibuje una figura
//    lienzo.stroke();
    lienzo.fill();
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
