function getIdFromUrl() {
  const route = new URL(window.location).pathname
  const pathArray = route.split('/')
  return pathArray[pathArray.length - 1]
}


function getCamionero() {
  const id = getIdFromUrl()
  const url = `http://localhost:3000/camioneros${id}`

  fetch(url).then(res => { return res.json() }).then(object => {
      document.getElementById("dni").value = object.dni
      document.getElementById("nombre").value = object.nombre
      document.getElementById("salario").value = object.salario
      document.getElementById("telefono").value = object.telefono
      document.getElementById("direccion").value = object.direccion
      document.getElementById("poblacion").value = object.poblacion
      
      document.getElementById("form").className = ""
      document.getElementById('spinner').className = "d-none"

  })

}


function listaCamioneros() {
  let listCamioneros = [];
  let url = 'http://localhost:3000/camioneros';
  fetch(url)
      .then(data => data.json())
      .then(camioneros => {
      listCamioneros = camioneros;
      listCamioneros.map((camionero, i) => {
          let row = document.createElement('tr');
          row.innerHTML = `
              <td>${camionero.dni}</td>
              <td>${camionero.nombre}</td>
              <td>${camionero.telefono}</td>
              <td>${camionero.direccion}</td>
              <td>${camionero.salario}</td>
              <td>${camionero.poblacion}</td>
              <td>
                  <a href="/camioneros/update/${camionero.dni}" class="btn btn-warning">Editar</a>
                   <button type="button" onclick="eliminarCamionero('${camionero.dni}')"><i class="btn btn-danger">Eliminar</i></button>
              </td>
          `;
          document.getElementById('camioneros').appendChild(row);
  
})
      })
      .catch(err => console.log(err));
     
} 


function getData(){
  let dni = document.getElementById("dni").value;
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let salario = document.getElementById("salario").value;
  let poblacion = document.getElementById("poblacion").value;
  
  
  var data = {dni : dni, nombre : nombre, telefono : telefono, direccion : direccion, salario : salario, poblacion : poblacion};
  return data;
}

function crearCamionero() {

  disableButton(id = "guardar")


  const url = 'http://localhost:3000/camioneros';
  const dni = document.getElementById("dni")
  const nombre =  document.getElementById("nombre")
  const salario = document.getElementById("salario")
  const telefono = document.getElementById( "telefono")
  const direccion = document.getElementById("direccion")
  const poblacion= document.getElementById("poblacion")
  
  const data = {
    'dni': dni.value,
     'nombre':nombre.value,
     'salario':salario.value,
     'telefono':telefono.value,
     'direccion':direccion.value,
     'poblacion': poblacion.value
}

fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

}).then(response => response.json()).then(data => {
    location.href = "/camioneros/create"
}).catch(error => {
    console.log(error);
    document.getElementById("error").innerText = "Ocurrió un error " + error
    document.getElementById('spinner').className = "d-none"
})
}
 
        

     
function getDni() {
  const url = window.location.href;
  const urlArray = url.split('/');
  const dni = urlArray[urlArray.length - 1];
  return dni;
  console.log(dni);
}


function editarCamioneros() {
  
  disableButton(id = "guardar")

 
  const id = getIdFromUrl()
  const url = `http://localhost:3000/camioneros/update`
  const dni = document.getElementById("dni")
  const nombre =  document.getElementById("nombre")
  const salario = document.getElementById("salario")
  const telefono = document.getElementById( "telefono")
  const direccion = document.getElementById("direccion")
  const poblacion= document.getElementById("poblacion")

  const data = {
      
    'dni': dni.value,
    'nombre':nombre.value,
    'salario':salario.value,
    'telefono':telefono.value,
    'direccion':direccion.value,
    'poblacion': poblacion.value
  }

  console.log(data)

  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
}).then(response => response.json()).then(data => {
    location.href = "/camioneros"
    })
     }

     function eliminarCamionero(dni) {
      if(confirm("¿Está seguro que desea eliminar el camionero?")){
      let url = `http://localhost:3000/camioneros/delete/${dni}`;
      console.log(url)
      fetch(url, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              location.href = '/camioneros';
          })
          .catch(error => console.log(error));
      }
      
      
  }