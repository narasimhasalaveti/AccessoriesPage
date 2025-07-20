// Wait for the HTML document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'dropdown'
  const dropdowns = document.querySelectorAll(".dropdown");

  // Loop through each dropdown element
  dropdowns.forEach((dropdown) => {
    // Find the dropdown menu within the current dropdown element
    const menu = dropdown.querySelector(".dropdown-menu");

    // Add an event listener for when the mouse enters the dropdown area
    dropdown.addEventListener("mouseover", () => {
      // Show the dropdown menu by setting its display style to 'block'
      menu.style.display = "block";
    });

    // Add an event listener for when the mouse leaves the dropdown area
    dropdown.addEventListener("mouseout", () => {
      // Hide the dropdown menu by setting its display style to 'none'
      menu.style.display = "none";
    });
  });
});
