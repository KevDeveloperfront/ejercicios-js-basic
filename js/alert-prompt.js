// crea un script de js que simule un cajero automatico
//el cajero automatico debe poseer las siguientes caracteristicas y permitir las siguientes operaciones
// 1. Depositar dinero
// 2. Retirar dinero  
// 3. Mostrar balance
// 4. culminar la sesion

// Las opciones depositar y retirar deben incremetar y reducir respectivamente una variable destinada a almacenar el balance
// del usuario. el cual debe poder ser visualizado a traves de la opcion mostrar balance

// la opcion de culminar la sesion debe cerrar el script

// el programa debe responder correctamente si el usuario ingresa una opcion invalidad y solicitar un nuevo ingreso de la información

// diseñar algoritmo que validen si el usuario esta introduciendo numeros y que den una respuesta adecuada en caso de que no lo haga.

// generar alertas adecuadas en caso de que el usuario intente retirar mas de lo que tiene en su cuenta

//iniciamos el viaje
// Creamos la variable balance
let balance = 0;

// Login del usuario - usuaro admin y pass 1234
let user = prompt("Ingrese su usuario:");
let pass = prompt("Ingrese su contraseña:");
if (user !== "admin" || pass !== "1234") {
  alert("Credenciales inválidas. Sesión terminada.");
} else {
  let option;
  do {
    option = prompt("Bienvenido al cajero automático. ¿Qué deseas hacer?\ 1. Depositar\ 2. Retirar\ 3. Mostrar balance\ 4. Cerrar sesión");
    option = parseInt(option);

    // Validación de opción inválida
    while (option < 1 || option > 4) {
      alert("Opción inválida. Intente nuevamente.");
      option = prompt("Bienvenido al cajero automático. ¿Qué deseas hacer?\ 1. Depositar\ 2. Retirar\ 3. Mostrar balance\ 4. Cerrar sesión");
      option = parseInt(option);
    }
    //pasamos a las operaciones con switch
    switch (option) {
      //operacion de deposito, utilizamos numeros de punto flotante por si se necesita poner centavitos, y vamos a comprobar si el deposito es positivo sino dar una alerta
      case 1:
        let deposit = parseFloat(prompt("Ingrese la cantidad a depositar: "));
        while (deposit <= 0) {
          alert("Entrada inválida. Debe ser un número positivo.");
          deposit = parseFloat(prompt("Ingrese la cantidad a depositar (número positivo):"));
        }
        balance += deposit;
        alert("Depósito exitoso. Nuevo balance: " + balance);
        break;
      // operacion de retiro, utilizamos numeros de punto flotante por si se necesita poner centavitos, y vamos a comprobar si el retiro es positivo sino dar una alerta  
      case 2:
        let withdraw = parseFloat(prompt("Ingrese la cantidad a retirar: "));
        while (withdraw <= 0) {
          alert("Entrada inválida. Debe ser un número positivo.");
          withdraw = parseFloat(prompt("Ingrese la cantidad a retirar (número positivo):"));
        }
        //vamos hacer la validacion de si el retiro es mayor al balance para dar una alerta que esta pobre y debe trabajar mas para poder retirar
        if (withdraw > balance) {
          alert("No tienes suficiente saldo.");
        } else {//sino, si realmente hay plata porque cayo la quincena, se hace el retiro y se actualiza el balance
          balance -= withdraw;
          alert("Retiro exitoso. Nuevo balance: " + balance);
        }
        break;
      // operacion de mostrar balance, mostraremos un alerta con la variable balance
      case 3:
        alert("Tu balance actual es: " + balance);
        break;
      // operacion de cerrar sesion, y con esto cerramos el loop en teoria xD, damos una alert para despedirnos del usuario
      case 4:
        alert("Sesión cerrada. ¡Hasta pronto!");
        break;
    }
  //sino se cumple la condicion se sigue el loop, el usuario debe marcar la opcion 4 para cerrar la sesion   
  } while (option !== 4);
}
// este si lo probe, en chrome me da problemas pero en opera funciona perfecto, no se que tenga que ver.