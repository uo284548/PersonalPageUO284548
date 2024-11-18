function redirectToSearchResults() {
    const input = document.getElementById("searchInput").value;
    if (input) {
        // Redirige a search_results.html con el nuevo término de búsqueda en la URL
        window.location.href = `search_results.html?query=${encodeURIComponent(input)}`;
    }
}


function searchContent() {
    // Obtiene los parámetros de la URL (e.g., ?query=algo) para extraer el término de búsqueda
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query')?.toLowerCase(); // Convierte el término de búsqueda a minúsculas

    // Si hay un término de búsqueda, lo coloca en el campo de búsqueda en la página
    if (query) {
        document.getElementById("searchInput").value = query;
    }

    // Define las secciones disponibles en la página y su contenido
    const sections = {
        Inicio: { text: "Bienvenido a mi página personal. Aquí encontrarás información sobre mí y mis proyectos.", link: "index.html" },
        SobreMi: { text: "Hola, soy Álvaro Davila Sampedro, un apasionado de la tecnología y el desarrollo web. Actualmente, soy estudiante del Máster en Ingeniería Web en la Universidad de Oviedo. Resido en Gijón desde hace cuatro años y previamente estudié la carrera de Ingeniería Informática del Software en Oviedo.", link: "about.html" },
        Proyectos: { text: "Trabajo fin de grado: KnowMeApp, Aplicación móvil Uniovi365, Página web de mapas LoMap", link: "projects.html" },
        Contacto: { text: "Mi correo: uo284548@uniovi.com, Mi teléfono: 698110445", link: "contact.html" }
    };

    // Variable para almacenar los resultados que coincidan con el término de búsqueda
    let resultsHTML = '';
    
    // Recorre cada sección y busca coincidencias con el término de búsqueda en el texto de la sección
    for (const section in sections) {
        if (sections[section].text.toLowerCase().includes(query)) {
            // Si encuentra coincidencias, agrega un elemento HTML con el resultado
            resultsHTML += `
                <div class="result-item">
                    <h2><a href="${sections[section].link}" target="_blank">Sección: ${section}</a></h2>
                    <p>${sections[section].text}</p>
                </div>
            `;
        }
    }

    // Si no hay resultados, muestra un mensaje indicando que no hubo coincidencias
    if (!resultsHTML) {
        resultsHTML = '<h2>No se encontraron coincidencias.</h2>';
    }

    // Verifica que el elemento con id "searchResults" exista antes de intentar modificar su contenido
    if (document.getElementById("searchResults")) {
        document.getElementById("searchResults").innerHTML = resultsHTML;
    }
}

// Ejecuta la función searchContent automáticamente cuando se carga la página
document.addEventListener("DOMContentLoaded", searchContent);





