console.log("Conectado");

let ingreseEdad;

while (true) {
    ingreseEdad = prompt("Escribe tu edad:");

    if (ingreseEdad === "") {
        alert("Este campo no puede estar vacío. Por favor, inténtalo de nuevo.");
    } else {
        ingreseEdad = parseInt(ingreseEdad);
        if (ingreseEdad >= 18) {
            alert("Cumple con los requisitos de edad mínima");
            break; // Salir del bucle cuando se cumplan los requisitos
        } else {
            alert("Disculpa, no cumples con la edad mínima para ingresar. Por favor, inténtalo de nuevo.");
        }
    }
}

let nombreUsuario = "";
let apellidoUsuario = "";

while (nombreUsuario === "" || apellidoUsuario === "") {
    nombreUsuario = prompt("Ingresa tu nombre:");
    apellidoUsuario = prompt("Ingresa tu apellido:");

    if (nombreUsuario === "" || apellidoUsuario === "") {
        alert("Error: Debes ingresar tu nombre y apellido, por favor inténtalo de nuevo.");
    } else if (!/^[A-Za-z]+$/.test(nombreUsuario) || !/^[A-Za-z]+$/.test(apellidoUsuario)) {
        alert("Error: Debes ingresar solo letras, por favor inténtalo de nuevo.");
        nombreUsuario = "";
        apellidoUsuario = "";
    }
}

alert("Hola " + nombreUsuario + " " + apellidoUsuario + " bienvenido a nuestra página web.");


// function saludar(nombre, apellido) {
//     console.log(`¡Hola, ${nombre} ${apellido}! ¡Bienvenido a nuestra página web!`);
// }

// let nombreUsuario = "";
// let apellidoUsuario = "";

// while (nombreUsuario === "" || apellidoUsuario === "") {
//     nombreUsuario = prompt("Ingresa tu nombre:");
//     apellidoUsuario = prompt("Ingresa tu apellido:");

//     if (nombreUsuario === "" || apellidoUsuario === "") {
//         alert("Error: Debes ingresar tu nombre y apellido, por favor inténtalo de nuevo.");
//     }
// }
// alert("Hola " + nombreUsuario + " " + apellidoUsuario + " bienvenido a nuestra página web.")
// saludar(nombreUsuario, apellidoUsuario);

function convertirPesosADolares() {
    let cantidadPesos = prompt("Ingresa la cantidad de pesos argentinos:");
    let tipoCambio = parseFloat(prompt("Ingresa el valor del dólar en pesos argentinos:"));
  
    // Validar que ambas entradas sean números válidos
    while (isNaN(cantidadPesos) || isNaN(tipoCambio)) {
      alert("Debes ingresar números válidos.");
      cantidadPesos = prompt("Ingresa la cantidad de pesos argentinos:");
      tipoCambio = parseFloat(prompt("Ingresa el valor del dólar en pesos argentinos:"));
    }
  
    // Convertir pesos a dólares utilizando el valor ingresado
    const cantidadDolares = cantidadPesos / tipoCambio;
  
    alert(`$${cantidadPesos} pesos argentinos equivalen a $${cantidadDolares.toFixed(2)} dólares.`);
  }
  
  convertirPesosADolares();
  
