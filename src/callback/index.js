const saludar = nombre => {
  console.log(`severo ${nombre}`);
}

const echandoUnCallback = (nombre, callback) => {
  return callback(nombre)
}

echandoUnCallback('judas', saludar);

const suma = (num1, num2) => {
  return num1 + num2;
}

const resta = (num1, num2) => {
  return num1 - num2;
}

const callbackDeOperaciones = (num1, num2, callback) => {
  const num1trans = num1 * 5;
  const num2trans = num2 / 5;
  return callback(num1trans, num2trans);
}

setTimeout(() => console.log(callbackDeOperaciones(2, 3, resta)), 2000);
console.log(callbackDeOperaciones(2, 3, suma));

function grettings(name, otherName, num) {
  console.log(`Sup ${name}, what's wrong with ${otherName}. You know it's time for ${num}`);
}

setTimeout(grettings, 2000, 'bro', 'bruh', 420);