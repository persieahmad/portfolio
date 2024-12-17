// Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');
const bodyElement = document.body;

// Check if the user has a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  bodyElement.classList.add(savedTheme);
}

// Event listener for the theme toggle button
themeToggleButton.addEventListener('click', () => {
  // Toggle dark mode class on the body
  if (bodyElement.classList.contains('dark-mode')) {
    bodyElement.classList.remove('dark-mode');
    localStorage.setItem('theme', ''); // Remove the saved theme
  } else {
    bodyElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save dark mode preference
  }
});
