function toggleMode() {
  const html = document.documentElement

  /* jeito que explica o que esta sendo feito
 
 if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  /*automatico da programação*/
  html.classList.toggle("light")

  //pegar a tag img
  
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode pegar a nova img
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se não tiver light mode permanece a mesma img
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
