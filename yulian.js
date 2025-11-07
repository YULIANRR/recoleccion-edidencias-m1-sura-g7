let edad = null;
let tipoEntrada = null;
let opcion = "";

while (opcion !== "5") {
  opcion = prompt(
    "=== CONTROL DE ACCESO 'EVENTOTECH' ===\n" +
    "1. Registrar Edad del Asistente\n" +
    "2. Registrar Tipo de Entrada (General o VIP)\n" +
    "3. Verificar Acceso (Evento Principal)\n" +
    "4. Verificar Acceso (Zona VIP)\n" +
    "5. Salir\n\n" +
    "Ingrese una opción:"
  );

  if (opcion === "1") {
    let entradaEdad = prompt("Ingrese la edad del asistente:");
    if (entradaEdad !== null && entradaEdad !== "" && !isNaN(entradaEdad) && Number(entradaEdad) > 0) {
      edad = Number(entradaEdad);
      alert("Edad registrada correctamente: " + edad);
    } else {
      alert("Edad inválida. Debe ser un número positivo.");
    }

  } else if (opcion === "2") {
    let entradaTipo = prompt("Ingrese el tipo de entrada (General o VIP):");
    if (entradaTipo && (entradaTipo.toLowerCase() === "general" || entradaTipo.toLowerCase() === "vip")) {
      tipoEntrada = entradaTipo.toLowerCase();
      alert("Tipo de entrada registrado: " + tipoEntrada.toUpperCase());
    } else {
      alert("Tipo de entrada inválido. Debe ser 'General' o 'VIP'.");
    }

  } else if (opcion === "3") {
    if (edad === null) {
      alert("Debe registrar la edad primero (opción 1).");
    } else if (edad >= 18) {
      alert("Acceso PERMITIDO al Evento Principal.");
    } else {
      alert("Acceso DENEGADO (Menor de edad).");
    }

  } else if (opcion === "4") {
    if (edad === null || tipoEntrada === null) {
      alert("Debe registrar la edad y el tipo de entrada primero (opciones 1 y 2).");
    } else if (edad >= 18 && tipoEntrada === "vip") {
      alert("Acceso PERMITIDO a Zona VIP.");
    } else if (edad >= 18 && tipoEntrada === "general") {
      alert("Acceso DENEGADO (Requiere entrada VIP).");
    } else if (edad < 18) {
      alert("Acceso DENEGADO (Menor de edad).");
    }

  } else if (opcion === "5") {
    alert("Gracias por usar el sistema. Hasta pronto.");
  } else {
    alert("Opción inválida. Intente nuevamente.");
  }
}