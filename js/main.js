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

function filtrarProyectos(categoria) {
  if (categoria === "todos") {
    renderGaleria(proyectos);
  } else {
    const filtrados = proyectos.filter((p) => p.categoria === categoria);
    renderGaleria(filtrados);
  }
}

const botonesFiltro = document.querySelectorAll(".filtro");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");
    filtrarProyectos(boton.dataset.filtro);
  });
});

renderGaleria(proyectos);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".hero, .sobre-mi").forEach((seccion) => {
  seccion.classList.add("fade-in");
  observer.observe(seccion);
});
