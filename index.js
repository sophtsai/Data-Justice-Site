// Theme toggle functionality
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("light-main");
}

themeButton.addEventListener("change", toggleDarkMode);

// Petition form functionality
let signNowButton = document.querySelector("#sign-now-button");
let count = 3;

const addSignature = (person) => {
  
  let supportSent = document.createElement("p");
  supportSent.innerHTML = "🖊️ " + person.name + " from " + person.hometown + " supports this."

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

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

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
  if (!person.email.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Add signature and reset validation
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person); 
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

}

signNowButton.addEventListener('click', validateForm);

// Scroll animation
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll('.revealable')
let windowHeight = window.innerHeight;

const reveal = () => {
  console.log(revealableContainers.length);
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  let intervalId = setInterval(scaleImage, 500)
  
  modal.style.display = "flex";
  modalContent.innerHTML = "Thank you " + person.name + " for representing " + person.hometown + "!";

  setTimeout(() => {
  modal.style.display = "none";
  clearInterval(intervalId);
}, 4000)
}

let scaleFactor = 1;
let modalImage = document.getElementById("thanks-img");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}

let closeButton = document.getElementById("close-btn");

const closePopup = () => {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none"
}

closeButton.addEventListener("click", closePopup);