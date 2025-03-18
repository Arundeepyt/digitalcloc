function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    
    // 24-hour format to 12-hour format conversion
    hours = hours % 12 || 12; 
    
    // Add leading zeros to minutes and seconds
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeString;
}
    
// Update clock every second
setInterval(updateClock, 1000);
    
// Initialize clock immediately
updateClock();