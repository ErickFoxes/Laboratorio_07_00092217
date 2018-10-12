let container;

container = document.getElementById("c1");
//NULL
container.innerText;
//vacio ""
container.style.backgroundColor=("#000000");
container.style.color="#fff";
container.style.width= "200PX";
container.style.height= "200PX";
container.innerHTML = '<input type="text" placeholder="Escriba su texto">';
//un input de tipo texto :v
// innerText muestra el texto contenido dentro e innerHTML muestra el contenido HTML dentro

let containers = document.getElementsByClassName("c2");
//una coleccion de los elementos que tengan la clase c2
let containerReal = document.querySelectorAll(".container");
containerReal.forEach(element => {
    element.style.backgroundColor="#009999";
});
//el cambio de color de los containers
containerReal.forEach(element => {
    element.innerHTML = '<input type="text" placeholder="Escriba su texto">';
});
//un input de tipo texto en cada elemento que tenga una clase container
// innerText muestra el texto contenido dentro e innerHTML muestra el contenido HTML dentro
let boton = document.getElementById("btn-click");
boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}
let btnCopy=document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
//Lo que se encuentre dentro de elemento con el ID textMsj se copiará y se mostrara en el otro elemento con el id showMsj