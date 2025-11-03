const icons = document.querySelectorAll(".section-1-icons i");
let currentIconIndex = 0; // Start with the first icon (0-indexed)

// Initialize the first icon with the 'change' class
if (icons.length > 0) {
  icons[currentIconIndex].classList.add("change");
}

setInterval(() => {
  // Remove 'change' class from the current icon
  if (icons.length > 0) {
    // Check to ensure icons exist
    icons[currentIconIndex].classList.remove("change");
  }

  // Move to the next icon
  currentIconIndex++;

  // If we've gone past the last icon, loop back to the first one
  if (currentIconIndex >= icons.length) {
    currentIconIndex = 0;
  }

  // Add 'change' class to the new current icon
  if (icons.length > 0) {
    // Check to ensure icons exist
    icons[currentIconIndex].classList.add("change");
  }
}, 1000);
