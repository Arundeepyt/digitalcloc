function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;  
    
    // Add leading zeros
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Get date components
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' }); // Full month name
    const year = now.getFullYear();
    
    // Format the date string
    const dateString = `${month} ${day}, ${year}`;

    // Update the HTML elements
    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}
    
// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock(); // Call the function once to display the time without waiting

// Toggle Dark/Light Mode Function
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}