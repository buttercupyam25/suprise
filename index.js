"use strict";

const titleElement = document.querySelector(".text")
const buttons = document.querySelector(".buttoncontainer");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const yesimg = document.querySelector(".img");

const maxImage = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function() {
   if (play) {
      noCount++;
      const imageIndex = Math.min(noCount, maxImage);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
      if (noCount === maxImage) {
        play = false;
      }
    }
  });

function handleYesClick() {
   titleElement.innerHTML = "See you on Feb14 <i class='bx bx-happy-heart-eyes'></i>";
   buttons.classList.add("hidden");
   changeImage("yes");
}

function resizeYesButton() {
   const computedStyle = window.getComputedStyle(yesButton);
   const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
   const newFontSize = fontSize * 1.3;    
 
   yesButton.style.fontSize = `${newFontSize}px`;
 }

 function generateMessage(noCount) {
   const messages = [
     "No",
     "Are you sure?",
     "Babe please",
     "Don't do this to me :(",
     "You're breaking my heart",
     "I'm gonna cry...",
   ];
 
   const messageIndex = Math.min(noCount, messages.length - 1);
   return messages[messageIndex];
 }

 function changeImage(image) {
   yesimg.src = `img/human-${image}.jpg`;
}

 function updateNoButtonText() {
   noButton.innerHTML = generateMessage(noCount);
 }

