const nombre = prompt("Ingrese su nombre:");
const contraseña = prompt("Ingrese su contraseña:");

if (nombre === "julian" && contraseña === "123") {
    // Acceso permitido
    alert("Bienvenido al sistema Tango");

    const stock = [
        { nombre: 'Mouse' },
        { nombre: 'Teclado' },
        { nombre: 'Monitor' },
        { nombre: 'CPU' },
        { nombre: 'Memoria RAM' },
        { nombre: 'Disco Duro' },
        { nombre: 'Tarjeta Gráfica' },
        { nombre: 'Impresora' }
    ];

    // mostrar el stock ordenado
    function mostrarStock() {
        const stockOrdenado = stock.sort((a, b) => a.nombre.localeCompare(b.nombre));
        let mensaje = `La cantidad de artículos es: ${stock.length}\n\nStock ordenado:\n`;
        stockOrdenado.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre}\n`;
        });
        alert(mensaje);
    }

    // nuevo artículo al stock
    function agregarArticulo() {
        const nuevoArticulo = prompt("Ingrese el nombre del nuevo artículo:");
        if (nuevoArticulo) {
            stock.push({ nombre: nuevoArticulo }); // Agregar como objeto
            alert(`El artículo "${nuevoArticulo}" ha sido agregado al stock.`);
        } else {
            alert("No se ingresó un artículo válido.");
        }
    }

    // Mostrar el stock inicial
    mostrarStock();

    // Preguntar nuevo artículo
    const deseaAgregar = confirm("¿Desea agregar un nuevo artículo al stock?");
    if (deseaAgregar) {
        agregarArticulo(); // Agregar el nuevo artículo
        mostrarStock(); // Mostrar el stock actualizado 
    }

    
} else {
    // Acceso denegado
    alert("Acceso denegado. Nombre o contraseña incorrectos.");
}
