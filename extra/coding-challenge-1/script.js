'use strict';

// calcular la distancia, la velocidad y el tiempo
// Comprende la ecuación básica: D=v*t, donde D es la distancia, "v" la velocidad y "t" es el tiempo.
// Si te dan una velocidad a la cual alguien viaja y el tiempo que le lleva viajar,
// puedes usar la ecuación para calcular la distancia total recorrida.

// Challenge 1
// si un auto viaja a 60 millas (96 km/h) y el viaje tarda 2 horas, cual es la distancia total recorrida?
// Formula: Distancia=velocidad*tiempo

const velocidadAuto = 96;
const tiempoViaje = 2;
const distanciaViaje = (velocidad, tiempo) => velocidad * tiempo;
const resultadoViaje = distanciaViaje(velocidadAuto, tiempoViaje);
console.log(`La distancia recorrida es de: ${resultadoViaje}km`);

// Challenge 2
// Cuánto tiempo llevaría viajar 192km a una velocidad de 96 km/h
// Formula: Tiempo = velocidad / distancia
const kmRecorrido = 192;
const velocidadRecorrida = 96;
const tiempoDeViaje = (velocidad, tiempo) => velocidad / tiempo;
const resultadoTiempoViaje = tiempoDeViaje(kmRecorrido, velocidadRecorrida);
console.log(`El tiempo de viaje será de: ${resultadoTiempoViaje}hs`);

// Challenge 3
// Un auto viajó durante 2 horas y recorrió 192km.
// A qué velocidad viajaba el auto?
// Formula Velocidad=distancia/tiempo
const tiempoViajeAutomovil = 2;
const distanciaViajeAutomovil = 192;
const velocidadAutomovil = (distancia, tiempo) => distancia / tiempo;
const resultadoDeVelocidad = velocidadAutomovil(
  distanciaViajeAutomovil,
  tiempoViajeAutomovil
);
console.log(`La velocidad del viaje fue de: ${resultadoDeVelocidad}km/h`);
