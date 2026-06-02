function crearTarjeta(proyecto) {
  return `
    <article class="tarjeta">
      <a href="${proyecto.url}">
        <div class="tarjeta__imagen">
          <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
        </div>
        <div class="tarjeta__info">
          <span class="tarjeta__categoria">${proyecto.categoria}</span>
          <h3 class="tarjeta__titulo">${proyecto.titulo}</h3>
          <p class="tarjeta__descripcion">${proyecto.descripcion}</p>
        </div>
      </a>
    </article>
  `;
}

function renderGaleria(lista) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = lista.map(crearTarjeta).join("");
}

renderGaleria(proyectos);
