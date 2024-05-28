function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adc imagem-light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //  se tiver sem light mode, adc imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
