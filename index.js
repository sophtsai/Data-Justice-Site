// Theme toggle functionality
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("light-main");  
}

themeButton.addEventListener("change", toggleDarkMode);

// Petition Form functionality
let signNowButton = document.querySelector("#sign-now-button");

const addSignature = () => {
  let name = document.getElementById('name').value;
  let hometown = document.getElementById('hometown').value;
  let email = document.getElementById('email').value;

  let supportSent = document.createElement("p");
  supportSent.innerHTML = "🖊️ " + name + " from " + hometown + " supports this."

  let supportList = document.querySelector(".signatures");
  supportList.appendChild(supportSent);
}

signNowButton.addEventListener("click", addSignature);

