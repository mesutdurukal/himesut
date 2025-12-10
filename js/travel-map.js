// Interactive Travel Map using Leaflet

document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('travelMap');
    if (!mapElement) return;

    // Initialize map centered on a world view
    const map = L.map('travelMap').setView([30, 20], 2);

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Visited countries with coordinates and links
    const visitedPlaces = [
        { name: "Turkey", lat: 39.0, lng: 35.0, url: "content.html?category=travel&id=turkey" },
        { name: "Germany", lat: 51.1657, lng: 10.4515, url: "content.html?category=travel&id=germany" },
        { name: "Bosnia", lat: 43.9159, lng: 17.6791, url: "content.html?category=travel&id=bosnia" },
        { name: "Croatia", lat: 45.1, lng: 15.2, url: "content.html?category=travel&id=croatia" },
        { name: "France", lat: 46.2276, lng: 2.2137, url: "content.html?category=travel&id=france" },
        { name: "Italy", lat: 41.8719, lng: 12.5674, url: "content.html?category=travel&id=italy" },
        { name: "Netherlands", lat: 52.1326, lng: 5.2913, url: "content.html?category=travel&id=holland" },
        { name: "Montenegro", lat: 42.7087, lng: 19.3744, url: "content.html?category=travel&id=montenegro" },
        { name: "Spain", lat: 40.4637, lng: -3.7492, url: "content.html?category=travel&id=spain" },
        { name: "Czech Republic", lat: 49.8175, lng: 15.473, url: "content.html?category=travel&id=czech" },
        { name: "Hungary", lat: 47.1625, lng: 19.5033, url: "content.html?category=travel&id=hungary" },
        { name: "Austria", lat: 47.5162, lng: 14.5501, url: "content.html?category=travel&id=austria" },
        { name: "Belgium", lat: 50.5039, lng: 4.4699, url: "content.html?category=travel&id=belgium" },
        { name: "Portugal", lat: 39.3999, lng: -8.2245, url: "content.html?category=travel&id=portugal" },
        { name: "Japan", lat: 36.2048, lng: 138.2529, url: "content.html?category=travel&id=japan" },
        { name: "Greece", lat: 39.0742, lng: 21.8243, url: "content.html?category=travel&id=greece" },
        { name: "United States", lat: 37.0902, lng: -95.7129, url: "content.html?category=travel&id=usa" },
        { name: "Canada", lat: 56.1304, lng: -106.3468, url: "content.html?category=travel&id=canada" },
        { name: "England", lat: 52.3555, lng: -1.1743, url: "content.html?category=travel&id=england" },
        { name: "Singapore", lat: 1.3521, lng: 103.8198, url: "content.html?category=travel&id=singapore" },
        { name: "Taiwan", lat: 23.6978, lng: 120.9605, url: "content.html?category=travel&id=taiwan" },
        { name: "Thailand", lat: 15.870, lng: 100.9925, url: "content.html?category=travel&id=thailand" },
        { name: "Philippines", lat: 12.8797, lng: 121.774, url: "content.html?category=travel&id=philiphines" },
        { name: "Vietnam", lat: 14.0583, lng: 108.2772, url: "content.html?category=travel&id=vietnam" },
        { name: "Denmark", lat: 56.2639, lng: 9.5018, url: "content.html?category=travel&id=denmark" },
        { name: "Norway", lat: 60.472, lng: 8.4689, url: "content.html?category=travel&id=norway" },
        { name: "Malaysia", lat: 4.2105, lng: 101.9758, url: "content.html?category=travel&id=malaysia" }
    ];

    // Custom marker icon
    const visitedIcon = L.divIcon({
        className: 'visited-marker',
        html: '<div style="background: #e74c3c; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });

    // Add markers for each visited place
    visitedPlaces.forEach(place => {
        const marker = L.marker([place.lat, place.lng], { icon: visitedIcon }).addTo(map);
        
        // Create popup content
        let popupContent = `<strong>${place.name}</strong>`;
        if (place.url) {
            popupContent += `<br><a href="${place.url}" style="color: #4285f4;">View photos →</a>`;
        }
        
        marker.bindPopup(popupContent);
    });

    // Add a legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                <strong>${visitedPlaces.length} Countries Visited</strong>
            </div>
        `;
        return div;
    };
    legend.addTo(map);
});
