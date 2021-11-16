/*hay 3 tipos de variable son=
let, const, var 
tipos de valores*/
let texto = "slgb"
let numero = 56456
let booleanos = true | false


let array = [1, "3432", true]
let json = {
    key: "value",
    nombre: "Michael",
    estudiante: "Wilmer",
    array: [],
    json: {}
}

//condicionales

//operadores logícos 

// es igual ===
// es diferente !== 
// !nega algo (negacion)
// mayor >
// menor <
//mayor o igual >=
//menor o igual <=

// y &&
// ó ||

let estudiante = "Dana"
let luks = 5000
let matematicas = 8
let español = 9

console.log(`Condicion = ${matematicas > 5 && español > 5}`)
console.log(`Condicion 2 = ${luks >= 3000}`)

if(matematicas > 5 && español > 5){
    console.log(`Felicitaciones ${estudiante}`)
}

else if(luks >= 3000){
    console.log("un gusto hacer negocios")
}
else {
    console.log("Le tocó recuperar ._. ")
}

// juanita quiere un perrito, pero la mamá solo se lo va a comprar
// cuando juanita tenga vendidas para el dia de las velitas 20 cajas de velitas
// el programa debe dicir si se le comprará el perrito o a juanita o si se le comprará
// uno de peluche jajaja

// si vendio 20 cajas y si la fecha es menor al 7 diciembre = "Perro comprado"
// si vendio menos de 20 cajas y aun no es 7 diciembre = "aun puedes continuar"
// si vendio 20 cajas pero la fecha es mayor a 7 de diciembre = "no tienes perro"
// si junita no tiene veleas para vender = "Necesito velas"
// si juanita tiene menos de 20 velas = "Me faltan velas"

let cajas_de_velas = 20
let vendidas = 20
let fecha = 7 
let velas = 20

console.log(`condicion = ${vendidas >= 20 && fecha <=7 }`)
console.log(`condicion 2 = ${vendidas < 20 && fecha < 7}`)
console.log(`condicion 3 = ${vendidas >= 20 && fecha > 7}`)
console.log(`condicion 4 = ${velas < 0}`)
console.log(`condicion 5 = ${velas < 20}`)

if(vendidas >= 20 && fecha <= 7){
    console.log("Perro comprado")
}

if(vendidas < 20 && fecha < 7){
    console.log("aún puedes continuar")
}

if(vendidas >= 20 && fecha > 7){
    console.log("No tienes perro")
}

if(velas < 0){
    console.log("Necesito velas")
}

if(velas < 20){
    console.log("me faltan velas")
}