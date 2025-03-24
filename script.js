document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioLibro');
    const tbody = document.querySelector('.tabla-inventario tbody');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const autor = document.getElementById('autor').value;
        const editorial = document.getElementById('editorial').value;
        const precio = parseFloat(document.getElementById('precio').value).toFixed(2);
        const codigo = document.getElementById('codigo').value;
        const stock = document.getElementById('stock').checked ? 'Disponible' : 'Agotado';
        
        // Crear nueva fila
        const nuevaFila = document.createElement('tr');
        if (!document.getElementById('stock').checked) {
            nuevaFila.classList.add('no_stock');
        }
        
        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${autor}</td>
            <td>${editorial}</td>
            <td>$${precio}</td>
            <td>${codigo}</td>
            <td>${stock}</td>
        `;
        
        // Agregar a la tabla
        tbody.appendChild(nuevaFila);
        
        // Limpiar formulario
        formulario.reset();
    });
    
    // Validación  para código de inventario
    document.getElementById('codigo').addEventListener('input', function(e) {
        const codigo = e.target.value.toUpperCase();
        e.target.value = codigo.replace(/[^A-Z0-9]/g, '');
    });
});
