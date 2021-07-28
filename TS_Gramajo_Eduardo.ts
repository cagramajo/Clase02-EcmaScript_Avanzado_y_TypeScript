async function operacion(
  param1: number,
  param2: number,
  operationName: string
) {
  let resul: number = 0;
  switch (operationName) {
    case "suma":
      let { Add } = await import("./src/addClass");
      let suma = new Add(param1, param2);
      resul = suma.getResult();
      break;
    case "resta":
      let { Subtract } = await import("./src/subtractClass");
      let resta = new Subtract(param1, param2);
      resul = resta.getResult();
      break;
    default:
      break;
  }
  return resul;
}

function operaciones() {
  operacion(5,5,'suma').then(e => console.log(e));
  operacion(5,4,'resta').then(e => console.log(e));
  operacion(5,-9,'suma').then(e => console.log(e));
  operacion(5,-7,'resta').then(e => console.log(e));
  operacion(5,5,'sumas').then(e => console.log(e));
}


operaciones();