// Interactive Travel Map using Leaflet

document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('travelMap');
    if (!mapElement) return;

    // Capital city coordinates lookup
    const capitalCoords = {
        'Turkey': [39.93, 32.86], 'Germany': [52.52, 13.40], 'Bosnia': [43.86, 18.41],
        'Croatia': [45.81, 15.98], 'France': [48.86, 2.35], 'Italy': [41.90, 12.50],
        'Netherlands': [52.37, 4.90], 'Montenegro': [42.44, 19.26], 'Spain': [40.42, -3.70],
        'Czech Republic': [50.08, 14.44], 'Hungary': [47.50, 19.04], 'Austria': [48.21, 16.37],
        'Belgium': [50.85, 4.35], 'Portugal': [38.72, -9.14], 'Japan': [35.68, 139.69],
        'Greece': [37.98, 23.73], 'United States': [38.91, -77.04], 'Canada': [45.42, -75.70],
        'England': [51.51, -0.13], 'Singapore': [1.35, 103.82], 'Taiwan': [25.03, 121.57],
        'Thailand': [13.76, 100.50], 'Philippines': [14.60, 120.98], 'Vietnam': [21.03, 105.85],
        'Denmark': [55.68, 12.57], 'Norway': [59.91, 10.75], 'Malaysia': [3.14, 101.69]
    };

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
        const coords = capitalCoords[place.name];
        if (!coords) return;
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
