function operacion(num1, num2, num3, num4) {
    const suma1 = num1 + num2;
    const suma2 = num3 + num4;
    const resultado = suma1 * suma2;
    if (resultado > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!")
    }
  }
  
  operacion(10, 40, 60, 40);
  operacion(1, 2, 3, 4);