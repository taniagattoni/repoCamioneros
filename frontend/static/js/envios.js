function getIdFromUrl() {
    const route = new URL(window.location).pathname
    const pathArray = route.split('/')
    return pathArray[pathArray.length - 1]
  }
  
  // CRUD
  
  
  
  
  
  
  
  
  function getEnvios() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/envios${id}`
  
    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("paquete").value = object.paquete
        document.getElementById("destino").value = object.destino
        document.getElementById("origen").value = object.origen
  
        
        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"
  
    })
  
  }
  
  
  function listarEnvios() {
    let listEnvios = [];
    let url = 'http://localhost:3000/envios';
    fetch(url)
        .then(data => data.json())
        .then(envios => {
        listEnvios = envios;
        listEnvios.map((envios, i) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${envios.paquete}</td>
                <td>${envios.destino}</td>
                <td>${envios.origen}</td>
                
                <td>
                    <a href="/envios/editar/${envios.paquete}" class="btn btn-warning">Editar</a>
                    <a href="/envios/delete/${envios.paquete}" class="btn btn-danger">Eliminar</a>
                </td>
            `;
            document.getElementById('envios').appendChild(row);
  })
        })
        .catch(err => console.log(err));
  } 
  
  
  
  function crearEnvios() {
    // Deshabilitar botón
    disableButton(id = "guardar")
  
    // Preparar data
    const url = 'http://localhost:3000/envios/create';
    const paquete = document.getElementById("paquete")
    const destino =  document.getElementById("destino")
    const origen = document.getElementById("origen")
   
    
    const data = {
      'paquete': paquete.value,
       'destino':destino.value,
       'origen':origen.value,
     
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
   
          
  
       
   
  
  
  function editarEnvios() {
    // Deshabilitar botón
    disableButton(id = "guardar")
  
    // Preparar data
    const paquete_id = getIdFromUrl()
    const url = `http://localhost:3000/camioneros/update/${paquete_id}`
    const  paquete = document.getElementById("paquete")
    const destino =  document.getElementById("destino")
    const origen = document.getElementById("origen")
  
    const data = {
        
      'paquete': paquete.value,
      'destino':destino.value,
      'origen':origen.value,
    
    }
  
    console.log(data)
  
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/envios"
      }).catch(error => {
          console.log(error);
          document.getElementById("error").innerText = "Ocurrió un error " + error
      })
  }
  
  function eliminarEnvio(id) {
    const item = document.getElementById(id)
    const paquete = item.querySelector('.paquete').innerText
    
  
    if (confirm(`¿Desea eliminar el paquete nº "${paquete}"?`)) {
        const url = `http://localhost:3000/envios/delete/${id}`
  
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