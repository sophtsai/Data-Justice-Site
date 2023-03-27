let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-main")
  // document.getElementById("intro-section").toggle("section-dark")
}

themeButton.addEventListener("click", toggleDarkMode);