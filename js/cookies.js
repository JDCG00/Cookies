/**
 *   Descripción principal del fichero.
 *   Descripción secundaria.
 *   @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'

console.log('Cargado JS')

window.onload = iniciar

function iniciar() {
    console.log(document.cookie);
    let fechaCaducidad = new Date()
    fechaCaducidad.setDate(fechaCaducidad.getDate() + 30)
    document.cookie = 'usuario=Juan Diego;expires=' + fechaCaducidad

}