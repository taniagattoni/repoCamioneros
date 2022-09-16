function disableButton(id) {
  const button = document.getElementById(id)
  button.className = button.className + " disabled"
  button.setAttribute('disabled', 'disabled')
  button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
}

function getIdFromUrl() {
  const route = new URL(window.location).pathname
  const pathArray = route.split('/')
  return pathArray[pathArray.length - 1]
}

// CRUD

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


function crearCamionero() {
  // Deshabilitar botón
  disableButton(id = "guardar")

  // Preparar data
  const url = 'http://localhost:3000/camioneros/create';
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
    location.href = "/camioneros"
}).catch(error => {
    console.log(error);
    document.getElementById("error").innerText = "Ocurrió un error " + error
})
}
 
        

     
 


function editarCamioneros() {
  // Deshabilitar botón
  disableButton(id = "guardar")

  // Preparar data
  const camionero_id = getIdFromUrl()
  const url = `http://localhost:3000/camioneros/update/${camionero_id}`
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
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamionero(id) {
  const item = document.getElementById(id)
  const nombre = item.querySelector('.nombre').innerText
  

  if (confirm(`¿Desea eliminar el camionero "${nombre}"?`)) {
      const url = `http://localhost:3000/camioneros/delete/${id}`

      fetch(url, {
          method: 'DELETE'
      }).then(response => response.json()).then(data => {
          location.href = "/camioneros"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}