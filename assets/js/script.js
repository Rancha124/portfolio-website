document.addEventListener("DOMContentLoaded", function() {
    // Wait for the page to load
  
    // Delay in milliseconds before scrolling (adjust as needed)
    var delay = 5000;
    // Get the target element to scroll to
    var targetElement = document.getElementById("about");
  
    // Scroll to the target element after the specified delay
    setTimeout(function() {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }, delay);
  });