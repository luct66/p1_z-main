/*3.1. La primera vez que 
se ingrese a la página web, el “Formulario para solicitar 
Vianda” debe estar oculto y 
solo se debe mostrar la sección de la tabla “Mis pedidos d
e Viandas”.*/

var formulario = document.getElementById("formulario")

formulario.style.display ='none'

indice=1

var listaviandas = []

class Vianda{
    constructor(frecuencia,tipomenu,itemainculir,fechainicio,cantidad){
        this.frecuencia=frecuencia;
        this.tipomenu=tipomenu
        this.itemainculir=itemainculir
        this.fechainicio=fechainicio
        this.cantidad=cantidad
    }
}

function nuevavianda(){
    formulario.style.display =''
}


function sumar(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}


function controlformulario(event){

event.preventDefault();

var itemsentrada = document.getElementById("entrada").checked;
var itemsplato = document.getElementById("platoprincipal").checked;
var itemspostre = document.getElementById("postre").checked;
var items = true; 
    if(itemsentrada == false && itemsplato== false && itemspostre== false){
        alert("Debe seleccionar un items")
        items= false
            }
var entrada = document.querySelector('input[name="item"]:checked').value;

var fecha = document.getElementById("fechainicio").value;
let fechaInicio=document.getElementById("fechainicio").value;
let fechaActual = new Date();
let fechaMasCinco = sumar(fechaActual,5);
//console.log(fechaMasCinco);
let mes = (fechaMasCinco.getMonth()+1).toString()
let dia = fechaMasCinco.getDate().toString();
let bandera = false;

let fechaActualComparar = fechaMasCinco.getFullYear() + "-" + mes + "-" +dia;

if(fechaInicio<fechaActualComparar){
    alert("La fecha de inicio dada debe por lo menos 5 días posterior a la fecha actual");

    return bandera;
}

var cantidad = document.getElementById("cantidad").value;
var frecuencia = document.getElementById("frecuencia").value;
var tipomenu = document.querySelector('input[name="tipomenu"]:checked').value;
    
if (frecuencia != null && tipomenu != null && entrada != null && cantidad != null && fecha != null){
    var vianda = new Vianda(frecuencia,tipomenu,entrada,fecha,cantidad);
    
    const table=document.getElementById("tablapedidos");
    const tr=document.createElement("tr");
    listaviandas.push(vianda);

    listaviandas.forEach(vianda => {
        tr.innerHTML=`
       
    <td>${vianda.frecuencia}</td>
    <td>${vianda.tipomenu}</td>
    <td>${vianda.itemainculir}</td>
    <td>${vianda.fechainicio}</td>
    <td>${vianda.cantidad}</td>
      <td>${"PENDIENTE"}</td>
    
    <td><a class="btn btn-danger"  id="eliminar${indice}">Eliminar</a></td>
    `
    
    table.appendChild(tr)
    });
    
    
    const eliminar = document.getElementById(`eliminar${indice}`);
        eliminar.addEventListener('click', (event) =>{
            event.target.parentNode.parentNode.remove();
            listaviandas.pop(vianda);
        })
    
    indice++;
    
    
    }
}


