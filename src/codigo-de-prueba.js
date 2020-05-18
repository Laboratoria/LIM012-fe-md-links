// funcion recursiva
// base = 5* multiplo =2

// dividir 12 / 4 (dividendo = 12 y el divisor = 4)
// 12 - 4 -> 8   |
// 8 - 4 -> 4    |
// 4 - 4 -> 0    |
// 0 - 4 -> -4   0 // el caso base seria donde el dividendo es menor que el divisor y ya no se puede realizar la operacion
// eslint-disable-next-line consistent-return
const dividir = (dividendo, divisor) => { // (12,4)
  if (dividendo < divisor) { // (12 <  4 ) -> false
    return 0;
    // console.log('soy el caso base');
  }
  return 1 + dividir(dividendo - divisor, divisor);
  // console.log('caso recursivo');
};
// console.log(dividir(30, 10));


const contar = (n) => {
  for (let i = n; i >= 1; i--) {
    // console.log(i);
  }
};
// console.log(contar(5));

const contar2 = (n) => {
  if (n > 0) { // limite de la recursividad
    // console.log(`hola${n}`);
    contar2(n - 1);
  }
};
// console.log(contar2(6));
