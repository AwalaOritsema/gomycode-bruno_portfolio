const menuIcon = document.querySelector(".menu-icon")
const menuContainer = document.querySelector(".menu-container")

menuIcon.onclick = function () {
  menuContainer.style.display = "flex"
}

window.onclick = function (event) {
  const elementClicked = event.target
  // if (elementClicked !== menuContainer && elementClicked !== menuIcon) {
  //   menuContainer.style.display = "none"
  // }
}
