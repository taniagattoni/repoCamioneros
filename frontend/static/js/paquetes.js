
function getIdFromUrl() {
    const route = new URL(window.location).pathname
    const pathArray = route.split('/')
    return pathArray[pathArray.length - 1]
  }
  

function getPaquete() {
    const id = getIdFromUrl()
    const url = `http://localhost:3000/paquete${id}`
  
    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("codigoPaquete").value = object.codigoPaquete
        document.getElementById("descripcion").value = object.descripcion
        document.getElementById("destinatario").value = object.destinatario
  
        
        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"
  
    })
  
  }
  
  
  function listaPaquete() {
    let listarPaquete = [];
    let url = 'http://localhost:3000/paquetes';
    fetch(url)
        .then(data => data.json())
        .then(paquete => {
            listarPaquete = paquete;
            listarPaquete.map((paquete, i) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${paquete.codigoPaquete}</td>
                <td>${paquete.descripcion}</td>
                <td>${paquete.destinatario}</td>
                
                <td>
                    <a href="/paquete/edit/${paquete.codigoPaquete}" class="btn btn-warning" > Editar </a>
                    <a href="/paquete/delete/${paquete.codigPaquete}" class="btn btn-danger" > Eliminar </a>
                </td>
            `;
            document.getElementById('paquete').appendChild(row);
  })
        })
        .catch(err => console.log(err));
  } 
  
  
  
  function crearPaquete() {
    var data = getPaquete()
    let url = "http://localhost:3000/paquetes/create";
  
      fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  
      }).then(response => response.json()).then(data => {
      location.href = "/paquete"
      }).catch(error => {
      console.log(error);
      document.getElementById("error").innerText = "Ocurrió un error " + error
      })
  
   
          
      function getCodigo(){
        let url = window.location.href;
        const urlArray = url.split("/");
        const codigo = urlArray[urlArray.length - 1];
        return codigo;
    }
       
   
  
  
    function editarPaquete() {

    disableButton(id = "guardar")
  
    // Preparar data
    const paquete_id = getIdFromUrl()
    const url = `http://localhost:3000/paquete/update/${paquete_id}`
    const  codigoPaquete = document.getElementById("codigoPaquete")
    const descripcion =  document.getElementById("descripcion")
    const destinatario = document.getElementById("destinatario")
  
    const data = {
        
      'codigoPaquete': codigoPaquete.value,
      'descripcion':descripcion.value,
      'destinatario':destinatario.value,
    
    }
  
    console.log(data)
  
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/paquete"
      }).catch(error => {
          console.log(error);
          document.getElementById("error").innerText = "Ocurrió un error " + error
      })
  }}
  
  function eliminarPaquete () {
    const item = document.getElementById(id)
    const paquete = item.querySelector('.paquete').innerText
    
  
    if (confirm(`¿Desea eliminar el paquete nº "${codigoPaquete}"?`)) {
        const url = `http://localhost:3000/paquete/delete/${id}`
  
        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/paquete"
          }).catch(error => {
              console.log(error);
              document.getElementById("error").innerText = "Ocurrió un error " + error
          })
      }
  }