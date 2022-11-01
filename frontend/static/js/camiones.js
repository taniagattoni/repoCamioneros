function listaCamiones() {
    let listitaCamiones = [];
    let url = 'http://localhost:3000/camiones';
    fetch(url)
        .then(data => data.json())
        .then(camiones => {
        listitaCamiones = camiones;
        listitaCamiones.map((camion, i) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${camion.matricula}</td>
                <td>${camion.modelo}</td>
                <td>${camion.tipo}</td>
                <td>${camion.potencia}</td>
                <td>
                    <a href="/camiones/editar/${camion.matricula}" class="btn btn-warning">Editar</a>
                    <a href="/camiones/delete/${camion.matricula}" class="btn btn-danger">Eliminar</a>
                </td>
            `;
            document.getElementById('camiones').appendChild(row);
})
        })
        .catch(err => console.log(err));
} 

function getDataCamion() {
    let matricula = document.getElementById("matricula").value;
    let tipo = document.getElementById("tipo").value;
    let modelo = document.getElementById("modelo").value;
    let potencia = document.getElementById("potencia").value;

    var data = { matricula: matricula, tipo: tipo, modelo: modelo, potencia: potencia };
    return data;
}



function crearCamion() {
    
    let url = "http://localhost:3000/camiones";
    var data = getDataCamion();
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}



function eliminarCamion(matricula) {
    if(confirm("¿Quiere eliminar el camión?")){
    let url = `http://localhost:3000/camiones/${matricula}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
           location.href = '/camiones';
        })
        .catch(error => console.log(error));
    }
    alert("Se ha eliminado el camión");
}





function Matricula(){
    const url = window.location.href;
    const matricula = url.substring(url.lastIndexOf('/') + 1);
    return matricula;

}
 function getCamion() {
    let matricula = Matricula();
    const url = `http://localhost:3000/camiones/${matricula}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let matricula = document.getElementById("matricula");
            let tipo = document.getElementById("tipo");
            let modelo = document.getElementById("modelo");
            let potencia = document.getElementById("potencia");
            matricula.value = data.matricula;
            tipo.value = data.tipo;
            modelo.value = data.modelo;
            potencia.value = data.potencia;
        })
        .catch(error => console.log(error));
}



function editarCamion() {
    let matricula = Matricula();
    let tipo = document.getElementById("tipo").value;
    let modelo = document.getElementById("modelo").value;
    let potencia = document.getElementById("potencia").value;
    let url = `http://localhost:3000/camiones/edit/${matricula}`;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            tipo: tipo,
            modelo: modelo,
            potencia: potencia
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            location.href = '/camiones';
        })
        .catch(error => console.log(error));
}