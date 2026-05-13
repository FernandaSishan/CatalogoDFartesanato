const filtros = document.querySelectorAll(".filtros button");

filtros.forEach(botao => {

  botao.addEventListener("click", () => {

    filtros.forEach(btn => {
      btn.classList.remove("ativo");
    });

    botao.classList.add("ativo");

  });

});

/* BOTÃO EXPLORAR CATÁLOGO */

const botaoExplorar = document.getElementById("explorar-btn");

botaoExplorar.addEventListener("click", () => {

  const catalogo = document.getElementById("catalogo");

  catalogo.scrollIntoView({
    behavior: "smooth"
  });

});