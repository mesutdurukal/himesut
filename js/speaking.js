// Speaking Section Logic

// State
let currentView = 'chronological';
let selectedYear = 'all';
let selectedTopic = 'all';
let searchQuery = '';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof talksData !== 'undefined' && talksData.length > 0) {
        updateStats();
        generateFilters();
        renderTalks();
        setupEventListeners();
    }
});

function updateStats() {
    const uniqueConferences = [...new Set(talksData.map(t => t.conference))];
    const uniqueCountries = [...new Set(talksData.map(t => t.country).filter(c => c !== 'Online'))];
    const recordings = talksData.filter(t => t.recording).length;

    document.getElementById('totalTalks').textContent = talksData.length;
    document.getElementById('totalConferences').textContent = uniqueConferences.length;
    document.getElementById('totalCountries').textContent = uniqueCountries.length;
    document.getElementById('totalRecordings').textContent = recordings;
}

function getYear(talk) {
    return talk.date ? new Date(talk.date).getFullYear() : null;
}

function generateFilters() {
    // Year filters
    const years = [...new Set(talksData.map(t => getYear(t)))].filter(y => y).sort((a, b) => b - a);
    const yearContainer = document.getElementById('yearFilters');
    if (yearContainer) {
        yearContainer.innerHTML = '<button class="chip active" data-year="all">All Years</button>';
        years.forEach(year => {
            yearContainer.innerHTML += `<button class="chip" data-year="${year}">${year}</button>`;
        });
    }

    // Topic filters
    const topics = [...new Set(talksData.flatMap(t => t.topics))].sort();
    const topicContainer = document.getElementById('topicFilters');
    if (topicContainer) {
        topicContainer.innerHTML = '<button class="chip active" data-topic="all">All Topics</button>';
        topics.forEach(topic => {
            topicContainer.innerHTML += `<button class="chip" data-topic="${topic}">${topic}</button>`;
        });
    }
}

function setupEventListeners() {
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            renderTalks();
        });
    });

    // Year filter
    const yearFilters = document.getElementById('yearFilters');
    if (yearFilters) {
        yearFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip')) {
                document.querySelectorAll('#yearFilters .chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                selectedYear = e.target.dataset.year;
                renderTalks();
            }
        });
    }

    // Topic filter
    const topicFilters = document.getElementById('topicFilters');
    if (topicFilters) {
        topicFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip')) {
                document.querySelectorAll('#topicFilters .chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                selectedTopic = e.target.dataset.topic;
                renderTalks();
            }
        });
    }

    // Search
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderTalks();
        });
    }
}

function filterTalks() {
    return talksData.filter(talk => {
        const talkYear = getYear(talk);
        const matchesYear = selectedYear === 'all' || talkYear == selectedYear;
        const matchesTopic = selectedTopic === 'all' || talk.topics.includes(selectedTopic);
        const matchesSearch = searchQuery === '' ||
            talk.title.toLowerCase().includes(searchQuery) ||
            talk.conference.toLowerCase().includes(searchQuery) ||
            talk.topics.some(t => t.toLowerCase().includes(searchQuery)) ||
            talk.location.toLowerCase().includes(searchQuery);
        return matchesYear && matchesTopic && matchesSearch;
    });
}

function renderTalks() {
    const container = document.getElementById('talksContainer');
    if (!container) return;

    const filteredTalks = filterTalks();

    if (filteredTalks.length === 0) {
        container.innerHTML = '<div class="no-results">No talks found matching your criteria.</div>';
        return;
    }

    let html = '';

    switch (currentView) {
        case 'chronological':
            html = renderChronological(filteredTalks);
            break;
        case 'conference':
            html = renderGrouped(filteredTalks, 'conference');
            break;
        case 'location':
            html = renderGrouped(filteredTalks, 'country');
            break;
        case 'topic':
            html = renderByTopic(filteredTalks);
            break;
        case 'year':
            html = renderGrouped(filteredTalks, 'year');
            break;
    }

    container.innerHTML = html;
}

function renderChronological(talks) {
    const sorted = [...talks].sort((a, b) => new Date(b.date) - new Date(a.date));
    return sorted.map(talk => renderTalkCard(talk)).join('');
}

function renderGrouped(talks, groupBy) {
    const groups = {};
    talks.forEach(talk => {
        const key = groupBy === 'year' ? getYear(talk) : talk[groupBy];
        if (!groups[key]) groups[key] = [];
        groups[key].push(talk);
    });

    let sortedKeys;
    if (groupBy === 'year') {
        sortedKeys = Object.keys(groups).sort((a, b) => b - a);
    } else if (groupBy === 'country') {
        // Sort alphabetically but put "Online" at the end
        sortedKeys = Object.keys(groups).sort((a, b) => {
            if (a === 'Online') return 1;
            if (b === 'Online') return -1;
            return a.localeCompare(b);
        });
    } else {
        sortedKeys = Object.keys(groups).sort();
    }

    return sortedKeys.map(key => {
        const groupTalks = groups[key].sort((a, b) => new Date(b.date) - new Date(a.date));
        return `
            <div class="group-header">${key} (${groupTalks.length})</div>
            ${groupTalks.map(talk => renderTalkCard(talk)).join('')}
        `;
    }).join('');
}

function renderByTopic(talks) {
    const groups = {};
    talks.forEach(talk => {
        talk.topics.forEach(topic => {
            if (!groups[topic]) groups[topic] = [];
            if (!groups[topic].find(t => t.title === talk.title && t.conference === talk.conference)) {
                groups[topic].push(talk);
            }
        });
    });

    const sortedKeys = Object.keys(groups).sort();

    return sortedKeys.map(key => {
        const groupTalks = groups[key].sort((a, b) => new Date(b.date) - new Date(a.date));
        return `
            <div class="group-header">${key} (${groupTalks.length})</div>
            ${groupTalks.map(talk => renderTalkCard(talk)).join('')}
        `;
    }).join('');
}

function renderTalkCard(talk) {
    const logoHtml = talk.logo ? `<img src="img/conferences/${talk.logo}" alt="${talk.conference}" class="talk-logo">` : '';
    const upcomingBadge = talk.upcoming ? '<span class="upcoming-badge">Upcoming</span>' : '';
    
    let dateDisplay = '';
    if (talk.date) {
        dateDisplay = new Date(talk.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    return `
        <div class="talk-card${talk.upcoming ? ' upcoming' : ''}">
            ${upcomingBadge}
            <div class="talk-card-content">
                <div class="talk-title">${talk.title}</div>
                <div class="talk-meta">
                    <span><i class="fa fa-microphone"></i> ${talk.conference}</span>
                    <span><i class="fa fa-map-marker"></i> ${talk.country}</span>
                    <span><i class="fa fa-calendar"></i> ${dateDisplay}</span>
                </div>
                <div class="talk-topics">
                    ${talk.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
                </div>
                ${talk.recording ? `
                    <a href="${talk.recording}" target="_blank" class="recording-link">
                        <i class="fa fa-play-circle"></i> Watch Recording
                    </a>
                ` : ''}
            </div>
            ${logoHtml}
        </div>
    `;
}
