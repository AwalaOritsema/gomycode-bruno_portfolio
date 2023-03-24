const menuIcon = document.querySelector(".menu-icon")
const menuContainer = document.querySelector(".menu-container")

menuIcon.onclick = function () {
  menuContainer.style.transform = "translate(0, 0)"
}

window.onclick = function (event) {
  const elementClicked = event.target
  if (
    elementClicked !== menuContainer &&
    elementClicked !== menuIcon &&
    elementClicked.parentNode !== menuContainer &&
    elementClicked.parentNode !== menuIcon
  ) {
    menuContainer.style.transform = "translate(200%, -400%)"
  }
}
