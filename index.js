let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("light-main");  
}

// themeButton.addEventListener("click", toggleDarkMode);

themeButton.addEventListener("change", toggleDarkMode);