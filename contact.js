// Google Maps Initialization
function initMap() {
    const location = { lat: 8.9806, lng: 38.7578 }; // Latitude and Longitude for the specified location (Addis Ababa)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});


// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('active');  // Toggle the 'active' class to show/hide the sidebar
}
