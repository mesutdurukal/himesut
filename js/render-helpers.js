// Helper functions for rendering conference logos and content

/**
 * Renders a conference logo with proper accessibility
 * @param {Object} conference - Conference object with img, alt, and url properties
 * @param {string} basePath - Base path for images (default: 'img/conferences/')
 * @returns {string} HTML string for the conference logo
 */
function renderConferenceLogo(conference, basePath = 'img/conferences/') {
    const imgTag = `<img src="${basePath}${conference.img}" alt="${conference.alt}" class="conference-logo">`;
    
    if (conference.url) {
        // Check if URL is external (starts with http) or internal
        const target = conference.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${conference.url}"${target}>${imgTag}</a>`;
    }
    
    return imgTag;
}

// Country name to ISO code mapping for flag-icon CSS
const countryToCode = {
    'Turkey': 'tr', 'Germany': 'de', 'Bosnia': 'ba', 'Croatia': 'hr',
    'France': 'fr', 'Italy': 'it', 'Netherlands': 'nl', 'Montenegro': 'me',
    'Spain': 'es', 'Czech Republic': 'cz', 'Hungary': 'hu', 'Austria': 'at',
    'Belgium': 'be', 'Portugal': 'pt', 'Japan': 'jp', 'Greece': 'gr',
    'United States': 'us', 'Canada': 'ca', 'England': 'gb', 'Singapore': 'sg',
    'Taiwan': 'tw', 'Thailand': 'th', 'Philippines': 'ph', 'Vietnam': 'vn',
    'Denmark': 'dk', 'Norway': 'no', 'Malaysia': 'my'
};

/**
 * Renders a travel icon using flag-icon CSS
 * @param {Object} travel - Travel object with name and url properties
 * @returns {string} HTML string for the travel icon
 */
function renderTravelIcon(travel) {
    const code = countryToCode[travel.name];
    if (!code) return '';
    
    const flagDiv = `<div class="flag-icon flag-icon-${code}" title="${travel.name}" style="width: 40px; height: 30px; display: inline-block; margin: 5px;"></div>`;
    
    if (travel.url) {
        return `<a href="${travel.url}">${flagDiv}</a>`;
    }
    
    return flagDiv;
}

/**
 * Renders a section of conferences
 * @param {Array} conferences - Array of conference objects
 * @param {string} containerId - ID of the container element
 * @param {string} basePath - Base path for images
 */
function renderConferenceSection(conferences, containerId, basePath = 'img/conferences/') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const html = conferences.map(conf => renderConferenceLogo(conf, basePath)).join('\n                        ');
    container.innerHTML = html;
}

/**
 * Renders all conference sections
 */
function renderAllConferences() {
    // Render upcoming
    if (typeof conferencesData !== 'undefined' && conferencesData.upcoming) {
        renderConferenceSection(conferencesData.upcoming, 'upcoming-conferences');
    }
    
    // Render by year
    if (typeof conferencesData !== 'undefined') {
        Object.keys(conferencesData).forEach(year => {
            if (year !== 'upcoming') {
                renderConferenceSection(conferencesData[year], `conferences-${year}`);
            }
        });
    }
    
    // Render podcasts
    if (typeof podcastsData !== 'undefined') {
        renderConferenceSection(podcastsData, 'podcasts');
    }
    
    // Render interviews
    if (typeof interviewsData !== 'undefined') {
        renderConferenceSection(interviewsData, 'interviews');
    }
    
    // Render books
    if (typeof booksData !== 'undefined') {
        renderConferenceSection(booksData, 'books');
    }
    
    // Render articles
    if (typeof articlesData !== 'undefined') {
        renderConferenceSection(articlesData, 'articles');
    }
    
    // Render travel
    if (typeof travelData !== 'undefined') {
        const container = document.getElementById('travel-icons');
        if (container) {
            const html = travelData.map(travel => renderTravelIcon(travel)).join('\n                                 ');
            container.innerHTML = html;
        }
    }
}

// Auto-render when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAllConferences);
} else {
    renderAllConferences();
}
