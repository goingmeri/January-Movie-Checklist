const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.getElementById('progress-bar');
const counterText = document.getElementById('counter-text');

// Function to clear all boxes on page load
window.onload = function() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateProgress(); // This resets the bar and text to 0/60
};

function updateProgress() {
    const totalItems = checkboxes.length;
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // Calculate percentage for the bar width
    const percentage = (checkedItems / totalItems) * 100;

    // Update the bar width
    progressBar.style.width = percentage + "%";

    // Update the text
    counterText.innerText = `You've completed ${checkedItems}/${totalItems} items`;
}

// Add the listener to every checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});
