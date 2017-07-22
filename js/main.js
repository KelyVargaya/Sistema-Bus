
//Funcion para Limpiar los Imput
function limpiar(){
   document.getElementById("nombre").value="";
   document.getElementById("apellido").value="";
   document.getElementById("dni").value="";
   
}

var nroasientos;
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

var pintarcelda;
function redirect(event){
   document.getElementById("mostrar").innerHTML=(event.target.textContent);
   pintarcelda=event.target;
   nroasientos=parseInt(event.target.textContent);
    limpiar();
  // (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#ff3fc2';
    
    for (var i=0;i<asientos.length;i++){
      var d=parseInt(asientos[i].asiento)
    if(nroasientos===d){
      document.getElementById("dni").value =asientos[i].dni;
      document.getElementById("nombre").value = asientos[i].nombre;
      document.getElementById("apellido").value = asientos[i].apellido ;
       }
    }

}



var asientos = [];

function reservar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var asiento = document.getElementById("mostrar").textContent;
    var resultado = document.getElementById("resultado");
      resultado.innerHTML = "<center><H2>DATOS DEL PASAJERO REGISTRADO</H2><p><strong>Asiento Nro: </strong>" + nroasientos+"</p><p><strong>Nombre: </strong>"+nombre+ " </p><p><strong>Apellido: </strong>" +apellido+ "</p><p><strong>DNI: </strong>" + dni+ "</p></center><br>" ;
     var persona ={
      nombre:nombre,
      apellido:apellido,
      dni:dni,
      nroasientos:mostrar
    };

    asientos.push(persona);
    pintarcelda.style.backgroundColor= "#f927a9";
    limpiar();
}


function listar(){
  var pasajeros = "";
  var resultado = document.getElementById("resultado");
  for(var i=0;i<asientos.length;i++){
    pasajeros += "<p><strong>Asiento Nro: </strong>" +nroasientos + "</p><p><strong>Nombre: </strong>" + asientos[i].nombre +" </p><p><strong>Apellido: </strong>"+ asientos[i].apellido + "</p><p><strong>DNI: </strong>" + asientos[i].dni + "</p></center>";
  }
resultado.innerHTML = "<center><H2>LISTA DE PASAJEROS</H2>" +pasajeros;

}


function buscar(){
   var dni=document.getElementById("dni").value;

   for(var i=0;i<=asientos.length;i++){
      if(asientos[i] != undefined && asientos[i].dni==dni){
         document.getElementById("nombre").value=asientos[i].nombre;
         document.getElementById("apellido").value=asientos[i].apellido;
         document.getElementById("dni").value=asientos[i].dni;

      }
   }
   limpiar();
};

function cancelar(){
  var asiento = document.getElementById("mostrar").textContent;
  var resultado;
  var n = nroasientos.indexOf(asiento);
  celdas[n].style.backgroundColor = "#ffffff";
  
  for(var i = 0; i < asientos.length; i++){
    if(asiento == asientos[i].asiento){
     asientos.splice(i,1);

      alert("Asiento libre!!!");

      limpiar();

    }
  }
}
