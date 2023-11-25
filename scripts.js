document.addEventListener("DOMContentLoaded", function () {
    const crudForm = document.getElementById("crud-form");
    const crudList = document.getElementById("crud-list");
    
    crudForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });
    
    document.getElementById("agregar").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const carrera = document.getElementById("carrera").value;
        const nivel = document.getElementById("nivel").value;
        const participantes = document.getElementById("participantes").value;
        
        if (nombre && carrera && nivel && participantes) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${nombre}</td>
                <td>${carrera}</td>
                <td>${nivel}</td>
                <td>${participantes}</td>
                <td><button class="eliminar">Eliminar</button>
                <button class="editar">Editar</button>
                </td>
                
            `;
            
            crudList.appendChild(newRow);
            
            document.getElementById("nombre").value = "";
            document.getElementById("carrera").value = "";
            document.getElementById("nivel").value = "";
            document.getElementById("participantes").value = "";
            
            addDeleteListener(newRow);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
    
    function addDeleteListener(row) {
        const deleteButton = row.querySelector(".eliminar");

        
        deleteButton.addEventListener("click", function () {
            crudList.removeChild(row);
        });
    }
});
