// Travel data - images, flag ISO code, and map coordinates per country
const travelImages = {
    "Turkey": {
        code: 'tr', coords: [39.93, 32.86],
        images: [
            { "src": "travel/travel_istanbul.jpg", "caption": "Istanbul" },
            { "src": "travel/travel_kapadokya.jpg", "caption": "Cappadocia" },
            { "src": "travel/travel_bodrum.jpg", "caption": "Bodrum" },
            { "src": "travel/travel_alacati.jpg", "caption": "Alaçatı" },
            { "src": "travel/travel_kas.jpg", "caption": "Kaş" },
            { "src": "travel/travel_datca.jpg", "caption": "Datça" },
            { "src": "travel/travel_safranbolu.jpg", "caption": "Safranbolu" },
            { "src": "travel/travel_antakya.jpg", "caption": "Antakya" },
            { "src": "travel/travel_adana.jpg", "caption": "Adana" },
            { "src": "travel/travel_alanya.jpg", "caption": "Alanya" },
            { "src": "travel/travel_demre.jpg", "caption": "Demre" },
            { "src": "travel/travel_golyazi.jpg", "caption": "Gölyazı" },
            { "src": "travel/travel_sigacik.jpg", "caption": "Sığacık" },
            { "src": "travel/travel_assos.jpg", "caption": "Assos" },
            { "src": "travel/travel_adatepe.jpg", "caption": "Adatepe" },
            { "src": "travel/travel_sdere.jpg", "caption": "Şirince" },
            { "src": "travel/travel_kkuyu.jpg", "caption": "Kızkalesi" }
        ]
    },
    "Germany": {
        code: 'de', coords: [52.52, 13.40],
        images: [
            { "src": "travel/travel_berlin.jpg", "caption": "Berlin" },
            { "src": "travel/travel_munich.jpg", "caption": "Munich" },
            { "src": "travel/travel_hamburg.jpg", "caption": "Hamburg" },
            { "src": "travel/travel_frankfurt.jpg", "caption": "Frankfurt" },
            { "src": "travel/travel_cologne.jpg", "caption": "Cologne" },
            { "src": "travel/travel_heidel.jpg", "caption": "Heidelberg" },
            { "src": "travel/travel_nurn.jpg", "caption": "Nuremberg" },
            { "src": "travel/travel_bamberg.jpg", "caption": "Bamberg" },
            { "src": "travel/travel_bremen.jpg", "caption": "Bremen" },
            { "src": "travel/travel_hannover.jpg", "caption": "Hannover" },
            { "src": "travel/travel_erlangen.jpg", "caption": "Erlangen" },
            { "src": "travel/travel_leipzig.jpg", "caption": "Leipzig" },
            { "src": "travel/travel_potsdam.jpg", "caption": "Potsdam" },
            { "src": "travel/travel_stutgart.jpg", "caption": "Stuttgart" },
            { "src": "travel/travel_neu.jpg", "caption": "Neuschwanstein" }
        ]
    },
    "Bosnia": {
        code: 'ba', coords: [43.86, 18.41],
        images: [
            { "src": "travel/travel_sarajevo.jpg", "caption": "Sarajevo" },
            { "src": "travel/travel_mostar.jpg", "caption": "Mostar" },
            { "src": "travel/travel_pocitelj.jpg", "caption": "Počitelj" }
        ]
    },
    "Croatia": {
        code: 'hr', coords: [45.81, 15.98],
        images: [
            { "src": "travel/travel_dubrovnik.jpg", "caption": "Dubrovnik" },
            { "src": "travel/travel_split.jpg", "caption": "Split" },
            { "src": "travel/travel_zagreb.jpg", "caption": "Zagreb" }
        ]
    },
    "France": {
        code: 'fr', coords: [48.86, 2.35],
        images: [
            { "src": "travel/travel_paris.jpg", "caption": "Paris" },
            { "src": "travel/travel_nice.jpg", "caption": "Nice" },
            { "src": "travel/travel_cannes.jpg", "caption": "Cannes" },
            { "src": "travel/travel_monaco.jpg", "caption": "Monaco" },
            { "src": "travel/travel_eze.jpg", "caption": "Eze" },
            { "src": "travel/travel_colmar.jpg", "caption": "Colmar" },
            { "src": "travel/travel_lille.jpg", "caption": "Lille" },
            { "src": "travel/travel_bord.jpg", "caption": "Bordeaux" },
            { "src": "travel/travel_strasbourg.jpg", "caption": "Strasbourg" }
        ]
    },
    "Italy": {
        code: 'it', coords: [41.90, 12.50],
        images: [
            { "src": "travel/travel_rome.jpg", "caption": "Rome" },
            { "src": "travel/travel_florence.jpg", "caption": "Florence" },
            { "src": "travel/travel_milan.jpg", "caption": "Milan" },
            { "src": "travel/travel_pisa.jpg", "caption": "Pisa" },
            { "src": "travel/travel_como.jpg", "caption": "Como" }
        ]
    },
    "Netherlands": {
        code: 'nl', coords: [52.37, 4.90],
        images: [
            { "src": "travel/travel_amsterdam.jpg", "caption": "Amsterdam" },
            { "src": "travel/travel_utrecht.jpg", "caption": "Utrecht" },
            { "src": "travel/travel_eindhoven.jpg", "caption": "Eindhoven" }
        ]
    },
    "Montenegro": {
        code: 'me', coords: [42.44, 19.26],
        images: [
            { "src": "travel/travel_kotor.jpg", "caption": "Kotor" },
            { "src": "travel/travel_budva.jpg", "caption": "Budva" },
            { "src": "travel/travel_perast.jpg", "caption": "Perast" }
        ]
    },
    "Spain": {
        code: 'es', coords: [40.42, -3.70],
        images: [
            { "src": "travel/travel_barcelona.jpg", "caption": "Barcelona" },
            { "src": "travel/travel_madrid.jpg", "caption": "Madrid" },
            { "src": "travel/travel_valencia.jpg", "caption": "Valencia" },
            { "src": "travel/travel_malaga.jpg", "caption": "Malaga" }
        ]
    },
    "Czech Republic": {
        code: 'cz', coords: [50.08, 14.44],
        images: [
            { "src": "travel/travel_prag.jpg", "caption": "Prague" }
        ]
    },
    "Hungary": {
        code: 'hu', coords: [47.50, 19.04],
        images: [
            { "src": "travel/travel_budapest.jpg", "caption": "Budapest" }
        ]
    },
    "Austria": {
        code: 'at', coords: [48.21, 16.37],
        images: [
            { "src": "travel/travel_vienna.jpg", "caption": "Vienna" },
            { "src": "travel/travel_hall.jpg", "caption": "Hallstatt" }
        ]
    },
    "Belgium": {
        code: 'be', coords: [50.85, 4.35],
        images: [
            { "src": "travel/travel_brussels.jpg", "caption": "Brussels" },
            { "src": "travel/travel_bruges.png", "caption": "Bruges" },
            { "src": "travel/travel_antwerp.png", "caption": "Antwerp" },
            { "src": "travel/travel_mechelen.jpeg", "caption": "Mechelen" },
            { "src": "travel/travel_ghent.jpeg", "caption": "Ghent" }
        ]
    },
    "Portugal": {
        code: 'pt', coords: [38.72, -9.14],
        images: [
            { "src": "travel/travel_lisbon.jpg", "caption": "Lisbon" }
        ]
    },
    "Japan": {
        code: 'jp', coords: [35.68, 139.69],
        images: [
            { "src": "travel/travel_tokyo.jpg", "caption": "Tokyo" },
            { "src": "travel/travel_kyoto.jpg", "caption": "Kyoto" },
            { "src": "travel/travel_osaka.jpg", "caption": "Osaka" },
            { "src": "travel/travel_nara.jpg", "caption": "Nara" },
            { "src": "travel/travel_fuji.jpg", "caption": "Mt. Fuji" },
            { "src": "travel/travel_hakone.jpg", "caption": "Hakone" },
            { "src": "travel/travel_nikko.jpg", "caption": "Nikko" },
            { "src": "travel/travel_kobe.jpg", "caption": "Kobe" },
            { "src": "travel/travel_hokkaido.jpg", "caption": "Hokkaido" },
            { "src": "travel/travel_sapporo.jpg", "caption": "Sapporo" },
            { "src": "travel/travel_okinawa.jpg", "caption": "Okinawa" },
            { "src": "travel/travel_chiba.jpg", "caption": "Chiba" },
            { "src": "travel/travel_izu.jpg", "caption": "Izu" },
            { "src": "travel/travel_shimoda.jpg", "caption": "Shimoda" },
            { "src": "travel/travel_shirakawa.jpg", "caption": "Shirakawa-go" },
            { "src": "travel/travel_niigata.jpg", "caption": "Niigata" },
            { "src": "travel/travel_kagoshima.jpg", "caption": "Kagoshima" },
            { "src": "travel/travel_yamanashi.jpg", "caption": "Yamanashi" },
            { "src": "travel/travel_usagishima.jpg", "caption": "Usagishima" }
        ]
    },
    "Greece": {
        code: 'gr', coords: [37.98, 23.73],
        images: [
            { "src": "travel/travel_athens.jpg", "caption": "Athens" },
            { "src": "travel/travel_santorini.jpg", "caption": "Santorini" },
            { "src": "travel/travel_mykonos.jpg", "caption": "Mykonos" },
            { "src": "travel/travel_thess.jpg", "caption": "Thessaloniki" }
        ]
    },
    "United States": {
        code: 'us', coords: [38.91, -77.04],
        images: [
            { "src": "travel/travel_sf.jpg", "caption": "San Francisco" },
            { "src": "travel/travel_austin.jpg", "caption": "Austin" },
            { "src": "travel/travel_yosemite.jpg", "caption": "Yosemite" }
        ]
    },
    "Canada": {
        code: 'ca', coords: [45.42, -75.70],
        images: [
            { "src": "travel/travel_montreal.jpg", "caption": "Montreal" }
        ]
    },
    "England": {
        code: 'gb', coords: [51.51, -0.13],
        images: [
            { "src": "travel/travel_manchester.jpg", "caption": "Manchester" }
        ]
    },
    "Singapore": {
        code: 'sg', coords: [1.35, 103.82],
        images: [
            { "src": "travel/travel_singapore.jpg", "caption": "Singapore" }
        ]
    },
    "Taiwan": {
        code: 'tw', coords: [25.03, 121.57],
        images: [
            { "src": "travel/travel_taiwan.jpg", "caption": "Taiwan" }
        ]
    },
    "Thailand": {
        code: 'th', coords: [13.76, 100.50],
        images: [
            { "src": "travel/travel_bangkok.jpg", "caption": "Bangkok" }
        ]
    },
    "Philippines": {
        code: 'ph', coords: [14.60, 120.98],
        images: [
            { "src": "travel/travel_manila.jpg", "caption": "Manila" }
        ]
    },
    "Vietnam": {
        code: 'vn', coords: [21.03, 105.85],
        images: [
            { "src": "travel/travel_hochi.jpg", "caption": "Ho Chi Minh" },
            { "src": "travel/travel_phuquoc.jpg", "caption": "Phu Quoc" }
        ]
    },
    "Denmark": {
        code: 'dk', coords: [55.68, 12.57],
        images: [
            { "src": "travel/travel_copenhagen.jpg", "caption": "Copenhagen" }
        ]
    },
    "Norway": {
        code: 'no', coords: [59.91, 10.75],
        images: [
            { "src": "travel/travel_oslo.jpg", "caption": "Oslo" },
            { "src": "travel/travel_bergen.jpg", "caption": "Bergen" }
        ]
    },
    "Malaysia": {
        code: 'my', coords: [3.14, 101.69],
        images: [
            { "src": "travel/travel_kl.jpg", "caption": "Kuala Lumpur" }
        ]
    },
    "Romania": {
        code: 'ro', coords: [44.43, 26.10],
        images: [
            { "src": "travel/travel_bucharest.jpg", "caption": "Bucharest" }
        ]
    },
    "Luxembourg": {
        code: 'lu', coords: [49.61, 6.13],
        images: [
            { "src": "travel/travel_luxembourg.jpg", "caption": "Luxembourg" }
        ]
    }
};

// Helper to get travel page data with type/title added dynamically
function getTravelPageData(country) {
    if (!travelImages[country]) return null;
    return {
        type: "gallery",
        title: country,
        images: travelImages[country].images.map(img => ({ ...img, size: "col-md-4" }))
    };
}

// Generate travelData array with URLs from travelImages keys
const travelData = Object.keys(travelImages).map(name => ({
    name,
    url: `articles.html?category=travel&id=${name}`
}));
