// Redirección por categoría
document.querySelector("#filter-category").addEventListener("change", function () {
    const selectedCategory = this.value;
    const recipes = document.querySelectorAll(".recipe-card");

    recipes.forEach(recipe => {
        const category = recipe.dataset.category;
        if (category === selectedCategory || selectedCategory === "all") {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
});

// Campo de búsqueda
document.querySelector("#search-bar").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe-card");

    recipes.forEach(recipe => {
        const title = recipe.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
});

// Paginación
let currentPage = 1;
const recipesPerPage = 5;

function showPage(page) {
    const recipes = document.querySelectorAll(".recipe-card");
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    recipes.forEach((recipe, index) => {
        recipe.style.display = index >= (page - 1) * recipesPerPage && index < page * recipesPerPage ? "block" : "none";
    });

    document.querySelector("#prev-page").disabled = page === 1;
    document.querySelector("#next-page").disabled = page === totalPages;
}

document.querySelector("#prev-page").addEventListener("click", function () {
    if (currentPage > 1) showPage(--currentPage);
});

document.querySelector("#next-page").addEventListener("click", function () {
    showPage(++currentPage);
});

// Botón imprimir
document.querySelector("#print-recipe").addEventListener("click", function () {
    window.print();
});

// Botón compartir en redes sociales
document.querySelector("#share-recipe").addEventListener("click", function () {
    alert("Compartir en redes sociales próximamente...");
});

// Validación de formulario
document.querySelector("#contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    if (!email.includes("@") || name === "" || message === "") {
        alert("Por favor, completa los campos correctamente.");
        return;
    }

    // Enviar datos (simulación)
    alert("Formulario enviado exitosamente.");
});
