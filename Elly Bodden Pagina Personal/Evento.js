function creaCaja(){
var contendor = document.getElementById('contenedor');
var caja = document.createElement('div');
caja.className = 'caja';
contendor.appendChild(caja);
}

var btncaja = document.getElementById('btn-caja');
btncaja.addEventListener('click', crearCaja);