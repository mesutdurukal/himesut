// Travel images data - just the images array per country
const travelImages = {
    "Turkey": [
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
    ],
    "Germany": [
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
    ],
    "Bosnia": [
        { "src": "travel/travel_sarajevo.jpg", "caption": "Sarajevo" },
        { "src": "travel/travel_mostar.jpg", "caption": "Mostar" },
        { "src": "travel/travel_pocitelj.jpg", "caption": "Počitelj" }
    ],
    "Croatia": [
        { "src": "travel/travel_dubrovnik.jpg", "caption": "Dubrovnik" },
        { "src": "travel/travel_split.jpg", "caption": "Split" },
        { "src": "travel/travel_zagreb.jpg", "caption": "Zagreb" }
    ],
    "France": [
        { "src": "travel/travel_paris.jpg", "caption": "Paris" },
        { "src": "travel/travel_nice.jpg", "caption": "Nice" },
        { "src": "travel/travel_cannes.jpg", "caption": "Cannes" },
        { "src": "travel/travel_monaco.jpg", "caption": "Monaco" },
        { "src": "travel/travel_eze.jpg", "caption": "Eze" },
        { "src": "travel/travel_colmar.jpg", "caption": "Colmar" },
        { "src": "travel/travel_lille.jpg", "caption": "Lille" },
        { "src": "travel/travel_bord.jpg", "caption": "Bordeaux" }
    ],
    "Italy": [
        { "src": "travel/travel_rome.jpg", "caption": "Rome" },
        { "src": "travel/travel_florence.jpg", "caption": "Florence" },
        { "src": "travel/travel_milan.jpg", "caption": "Milan" },
        { "src": "travel/travel_pisa.jpg", "caption": "Pisa" },
        { "src": "travel/travel_como.jpg", "caption": "Como" }
    ],
    "Netherlands": [
        { "src": "travel/travel_amsterdam.jpg", "caption": "Amsterdam" },
        { "src": "travel/travel_utrecht.jpg", "caption": "Utrecht" }
    ],
    "Montenegro": [
        { "src": "travel/travel_kotor.jpg", "caption": "Kotor" },
        { "src": "travel/travel_budva.jpg", "caption": "Budva" },
        { "src": "travel/travel_perast.jpg", "caption": "Perast" }
    ],
    "Spain": [
        { "src": "travel/travel_barcelona.jpg", "caption": "Barcelona" },
        { "src": "travel/travel_madrid.jpg", "caption": "Madrid" },
        { "src": "travel/travel_valencia.jpg", "caption": "Valencia" },
        { "src": "travel/travel_malaga.jpg", "caption": "Malaga" }
    ],
    "Czech Republic": [
        { "src": "travel/travel_prag.jpg", "caption": "Prague" }
    ],
    "Hungary": [
        { "src": "travel/travel_budapest.jpg", "caption": "Budapest" }
    ],
    "Austria": [
        { "src": "travel/travel_vienna.jpg", "caption": "Vienna" },
        { "src": "travel/travel_hall.jpg", "caption": "Hallstatt" }
    ],
    "Belgium": [
        { "src": "travel/travel_brussels.jpg", "caption": "Brussels" },
        { "src": "travel/travel_brugge.jpg", "caption": "Bruges" }
    ],
    "Portugal": [
        { "src": "travel/travel_lisbon.jpg", "caption": "Lisbon" }
    ],
    "Japan": [
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
    ],
    "Greece": [
        { "src": "travel/travel_athens.jpg", "caption": "Athens" },
        { "src": "travel/travel_santorini.jpg", "caption": "Santorini" },
        { "src": "travel/travel_mykonos.jpg", "caption": "Mykonos" },
        { "src": "travel/travel_thess.jpg", "caption": "Thessaloniki" }
    ],
    "United States": [
        { "src": "travel/travel_sf.jpg", "caption": "San Francisco" },
        { "src": "travel/travel_austin.jpg", "caption": "Austin" },
        { "src": "travel/travel_yosemite.jpg", "caption": "Yosemite" }
    ],
    "Canada": [
        { "src": "travel/travel_montreal.jpg", "caption": "Montreal" }
    ],
    "England": [
        { "src": "travel/travel_manchester.jpg", "caption": "Manchester" }
    ],
    "Singapore": [
        { "src": "travel/travel_singapore.jpg", "caption": "Singapore" }
    ],
    "Taiwan": [
        { "src": "travel/travel_taiwan.jpg", "caption": "Taiwan" }
    ],
    "Thailand": [
        { "src": "travel/travel_bangkok.jpg", "caption": "Bangkok" }
    ],
    "Philippines": [
        { "src": "travel/travel_manila.jpg", "caption": "Manila" }
    ],
    "Vietnam": [
        { "src": "travel/travel_hochi.jpg", "caption": "Ho Chi Minh" },
        { "src": "travel/travel_phuquoc.jpg", "caption": "Phu Quoc" }
    ],
    "Denmark": [
        { "src": "travel/travel_copenhagen.jpg", "caption": "Copenhagen" }
    ],
    "Norway": [
        { "src": "travel/travel_oslo.jpg", "caption": "Oslo" },
        { "src": "travel/travel_bergen.jpg", "caption": "Bergen" }
    ],
    "Malaysia": [
        { "src": "travel/travel_kl.jpg", "caption": "Kuala Lumpur" }
    ]
};

// Helper to get travel page data with type/title added dynamically
function getTravelPageData(country) {
    if (!travelImages[country]) return null;
    return {
        type: "gallery",
        title: country,
        images: travelImages[country].map(img => ({ ...img, size: "col-md-4" }))
    };
}

// Generate travelData array with URLs from travelImages keys
const travelData = Object.keys(travelImages).map(name => ({
    name,
    url: `articles.html?category=travel&id=${name}`
}));
