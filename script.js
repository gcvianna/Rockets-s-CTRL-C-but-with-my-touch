function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light-mine.png")
    img.setAttribute(
      "alt",
      "Foto de um dos operados do Forward Observations Group, usando capacete com óculos de visão noturna, camisa xadrez, equipamento militar e segurando um bolo de dinheiro na orelha."
    )
  } else {
    // se tiver sem light, manter a imagem atual
    img.setAttribute("src", "./assets/avatar-mine.png")
    img.setAttribute(
      "alt",
      "Foto de um integrante do Whitephosphor., usando óculos de visão noturna e equipamento militar, está de noite."
    )
  }
}
