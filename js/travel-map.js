// Interactive Travel Map using Leaflet

document.addEventListener('DOMContentLoaded', function() {
    // Render travel flags
    const iconsContainer = document.getElementById('travel-icons');
    if (iconsContainer && typeof travelData !== 'undefined' && typeof renderTravelIcon === 'function') {
        iconsContainer.innerHTML = travelData.map(t => renderTravelIcon(t)).join('');
    }

    const mapElement = document.getElementById('travelMap');
    if (!mapElement) return;

    // Coordinates from travelImages in travel-data.js

    // Initialize map centered on a world view
    const map = L.map('travelMap').setView([30, 20], 2);

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // travelData is loaded from data/travel-data.js

    // Custom marker icon
    const visitedIcon = L.divIcon({
        className: 'visited-marker',
        html: '<div style="background: #e74c3c; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });

    // Add markers for each visited place
    travelData.forEach(place => {
        const country = typeof travelImages !== 'undefined' && travelImages[place.name];
        if (!country || !country.coords) return;
        const coords = country.coords;
        const marker = L.marker(coords, { icon: visitedIcon }).addTo(map);
        
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
                <strong>${travelData.length} Countries Visited</strong>
            </div>
        `;
        return div;
    };
    legend.addTo(map);
});
