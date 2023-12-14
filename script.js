var cuentas = [
    { nombre: "Jair", saldo: 200, clave: "1234" },
    { nombre: "Valeria", saldo: 290, clave: "5678"},
    { nombre: "Aldair", saldo: 67, clave: "abcd" }
  ];

 var cuentaSeleccionada = null;

  function autenticar() {
   var cuentaIndice = document.getElementById('cuenta').value;
   var contrasena = document.getElementById('password').value;

   if(cuentas[cuentaIndice] && contrasena === cuentas[cuentaIndice].clave) {
      cuentaSeleccionada = cuentas[cuentaIndice];
      mostrarOperaciones();
    }else if(!cuentas[cuentaIndice]) {
      alert('No has seleccionado ninguna cuenta')
    }else {
      alert('La contraseña es incorrecta. Inténtalo nuevamente')
    }    
  }

  function mostrarOperaciones() {
    document.getElementById('log-in').style.display = "none";
    document.getElementById('operaciones').style.display = "block";
  }

  function consultarSaldo() {
    mostrarSaldo('Tu saldo actual es de $' + cuentaSeleccionada.saldo);
  }

  function ingresarSaldo(){
    var monto = prompt('Ingresa el monto que quieres depositar a tu cuenta:')
    monto = parseFloat(monto);

    if(!isNaN(monto) && monto > 0 && cuentaSeleccionada.saldo + monto <= 990) {
      cuentaSeleccionada.saldo += monto;
      mostrarSaldo('Monto depositado: $' + monto + '<br> Nuevo saldo: $' + cuentaSeleccionada.saldo)
    }else if (cuentaSeleccionada.saldo + monto > 990) {
      alert('El monto supera los límites establecidos en la cuenta, ingrese otro monto.')
    }else {
      alert('Ingresa un monto válido.');
    }
  }

  function retirarSaldo(){
    var monto = prompt('Ingresa el monto que quieres retirar de tu cuenta:')
    monto = parseFloat(monto);
    
    if(!isNaN(monto) && monto > 0 && monto <= cuentaSeleccionada.saldo && cuentaSeleccionada.saldo - monto >=10){
      cuentaSeleccionada.saldo -= monto;
      mostrarSaldo('Monto retirado: $' + monto + '<br> Nuevo saldo: $' + cuentaSeleccionada.saldo);
    }else if(cuentaSeleccionada.saldo - monto <10){
      alert('El monto que deseas retirar supera los límites de retiro, ingresa otro monto')
    }else{
      alert('Operación no válida, ingresa un monto correcto')
    }
  }

  function mostrarSaldo(mensaje) {
    document.getElementById('resultado').innerHTML = mensaje;
  }

  function cerrarSesion(){
    document.getElementById('log-in').style.display = 'block'
    document.getElementById('operaciones').style.display = 'none'
  }