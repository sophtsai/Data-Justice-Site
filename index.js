// Theme toggle functionality
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("light-main");
}

themeButton.addEventListener("change", toggleDarkMode);

// Petition form functionality
let signNowButton = document.querySelector("#sign-now-button");
let count = 3;

const addSignature = () => {
  let name = document.getElementById('name').value;
  let hometown = document.getElementById('hometown').value;
  let email = document.getElementById('email').value;

  let supportSent = document.createElement("p");
  supportSent.innerHTML = "🖊️ " + name + " from " + hometown + " supports this."

  let supportList = document.querySelector(".signatures");
  supportList.appendChild(supportSent);

  document.getElementById('counter').remove();
  count = count + 1;

  let sigCount = document.createElement("p");
  sigCount.innerHTML = "🖊️ " + count + " people have signed this petition and support this cause.";
  sigCount.setAttribute('id', 'counter');

  let sigCountShow = document.querySelector(".countShow");
  sigCountShow.appendChild(sigCount);

}

// Petition form validation functionality
const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // Check if any input is less than 2 characters
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Check if email input consists of .com
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Add signature and reset validation
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

}


signNowButton.addEventListener('click', validateForm);