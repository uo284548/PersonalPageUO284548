function redirectToSearchResults() {
    const input = document.getElementById("searchInput").value;
    if (input) {
        // Redirige a search_results.html con el nuevo término de búsqueda en la URL
        window.location.href = `search_results.html?query=${encodeURIComponent(input)}`;
    }
}


function searchContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query')?.toLowerCase();

    if (query) {
        // Coloca el término de búsqueda en el campo de búsqueda solo una vez
        document.getElementById("searchInput").value = query;
    }

    const sections = {
        Inicio: { text: "Bienvenido a mi página personal. Aquí encontrarás información sobre mí y mis proyectos.", link: "index.html" },
        SobreMi: { text: "Hola, soy Álvaro Davila Sampedro, un apasionado de la tecnología y el desarrollo web. Actualmente, soy estudiante del Máster en Ingeniería Web en la Universidad de Oviedo. Resido en Gijón desde hace cuatro años y previamente estudié la carrera de Ingeniería Informática del Software en Oviedo.", link: "about.html" },
        Proyectos: { text: "Trabajo fin de grado: KnowMeApp, Aplicación móvil Uniovi365, Página web de mapas LoMap", link: "projects.html" },
        Contacto: { text: "Mi correo: uo284548@uniovi.com, Mi teléfono: 698110445", link: "contact.html" }
    };

    let resultsHTML = '';
    for (const section in sections) {
        if (sections[section].text.toLowerCase().includes(query)) {
            resultsHTML += `
                <div class="result-item">
                    <h2><a href="${sections[section].link}" target="_blank">Sección: ${section}</a></h2>
                    <p>${sections[section].text}</p>
                </div>
            `;
        }
    }

    if (!resultsHTML) {
        resultsHTML = '<h2>No se encontraron coincidencias.</h2>';
    }

    document.getElementById("searchResults").innerHTML = resultsHTML;
}

// Ejecutar searchContent automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", searchContent);




