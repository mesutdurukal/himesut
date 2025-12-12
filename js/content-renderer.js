// Content renderer for dynamic pages
// Handles rendering of video, gallery, and article content types

// Parse URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || 'conferences',
        id: params.get('id') || ''
    };
}

// Show friendly error message and redirect
function showNotFoundError(pageId) {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="media">
            <div class="media-body">
                <div class="personal_text" style="text-align: center; padding: 40px 20px;">
                    <h2>Page Not Available</h2>
                    <p style="margin: 20px 0;">The page "${pageId}" is currently being updated.</p>
                    <p style="color: #666;">Redirecting you to the home page...</p>
                    <div style="margin-top: 30px;">
                        <a href="index.html" class="btn btn-primary" style="padding: 10px 30px; background: #0066cc; color: white; text-decoration: none; border-radius: 4px;">Go to Home Now</a>
                    </div>
                </div>
            </div>
        </div>`;
    
    // Auto-redirect after 3 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}

// Render video content (YouTube embeds)
function renderVideo(data) {
    let html = `
        <div class="media">
            <div class="d-flex">
                <iframe src="https://www.youtube.com/embed/${data.videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
        </div>`;
    
    if (data.link) {
        html += `
        <div class="media-body">
            <div class="personal_text">
                <a href="${data.link.url}" target="_blank">${data.link.text}</a><br>
            </div>
        </div>`;
    }
    
    return html;
}

// Render gallery content (image galleries)
function renderGallery(data) {
    let html = '<div class="whole-wrap"><div class="container"><div class="section-top-border"><div class="row gallery-item">';
    
    data.images.forEach(img => {
        // Check if it's a link gallery (has link property) or image gallery
        if (img.link) {
            // Link gallery (like challenges.html)
            html += `
                <div class="${img.size}">
                    <a href="${img.link}" class="img-gal">
                        <div class="single-gallery-image" style="background: url(img/${img.src});"></div>
                    </a>
                    ${img.caption}
                </div>`;
        } else {
            // Standard image gallery - check if src already has folder path
            const imgPath = img.src.includes('/') ? img.src : `travel/${img.src}`;
            html += `
                <div class="${img.size}">
                    <a href="img/${imgPath}" class="img-gal">
                        <div class="single-gallery-image" style="background: url(img/${imgPath});"></div>
                    </a>
                    ${img.caption}
                </div>`;
        }
    });
    
    html += '</div></div></div></div>';
    return html;
}

// Render article content (technical tutorials)
function renderArticle(data) {
    let html = '';
    
    data.sections.forEach(section => {
        if (section.heading) {
            html += `
            <div class="media">
                <div class="media-body">
                    <div class="personal_text">
                        <h2>${section.heading}</h2>
                    </div>
                </div>
            </div><br>`;
        }
        
        if (section.image) {
            html += `
            <div class="media">
                <div class="d-flex">
                    <img src="img/technical/${section.image}" alt="">
                </div>
            </div><br>`;
        }
        
        if (section.content) {
            html += `
            <div class="media">
                <div class="media-body">
                    <div class="personal_text">
                        ${section.content}
                    </div>
                </div>
            </div>`;
        }
    });
    
    return html;
}

// Show directory of all available pages
function showDirectory() {
    let html = `
        <div class="media">
            <div class="media-body">
                <div class="personal_text">
                    <h1 style="margin-bottom: 30px;">Available Pages Directory</h1>
                </div>
            </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 20px;">`;
    
    // Group pages by category
    const categories = {
        'Conferences & Talks': 'conferences',
        'Travel Galleries': 'travel',
        'Technical Articles': 'technical'
    };
    
    Object.keys(categories).forEach(categoryName => {
        const categoryKey = categories[categoryName];
        const pages = articlesData[categoryKey];
        
        if (pages) {
            const pageIds = Object.keys(pages).sort();
            
            html += `
                <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #0066cc; margin-top: 0; margin-bottom: 20px; font-size: 1.3em;">${categoryName} (${pageIds.length})</h2>
                    <div style="display: flex; flex-direction: column; gap: 8px;">`;
            
            pageIds.forEach(pageId => {
                const page = pages[pageId];
                const url = `content.html?category=${categoryKey}&id=${pageId}`;
                const title = page.title || pageId;
                const typeIcon = page.type === 'video' ? '📹' : 
                                page.type === 'gallery' ? '🖼️' : 
                                page.type === 'link' ? '🔗' : 
                                page.type === 'image' ? '🖼️' : '📄';
                
                html += `
                    <a href="${url}" style="display: block; padding: 10px 12px; background: white; border-radius: 4px; text-decoration: none; color: #333; border-left: 3px solid #0066cc; transition: all 0.3s; font-size: 0.9em;">
                        <span style="margin-right: 8px;">${typeIcon}</span>
                        <span>${title}</span>
                    </a>`;
            });
            
            html += `
                    </div>
                </div>`;
        }
    });
    
    html += `</div>`;
    
    document.getElementById('dynamic-content').innerHTML = html;
    document.title = 'Pages Directory - Mesut';
}

// Load and render content based on URL parameters
function loadContent() {
    const { category, id } = getUrlParams();
    
    // If no parameters, show directory instead of redirecting
    if (!id) {
        showDirectory();
        return;
    }
    
    // Check articles data first, then travel data
    let data = getArticleData(category, id);
    if (!data && category === 'travel' && typeof getTravelPageData === 'function') {
        data = getTravelPageData(id);
    }
    
    if (!data) {
        // Try to redirect to old HTML file as fallback
        const oldPageUrl = `${id}.html`;
        
        // Check if old page exists by trying to fetch it
        fetch(oldPageUrl, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // Old page exists, redirect to it
                    window.location.href = oldPageUrl;
                } else {
                    // Show friendly error and redirect to home after 3 seconds
                    showNotFoundError(id);
                }
            })
            .catch(() => {
                // Network error or page doesn't exist
                showNotFoundError(id);
            });
        return;
    }
    
    let content = '';
    
    switch(data.type) {
        case 'video':
            content = renderVideo(data);
            break;
        case 'gallery':
            content = renderGallery(data);
            break;
        case 'article':
            content = renderArticle(data);
            break;
        case 'link':
            content = `
                <div class="media">
                    <div class="media-body">
                        <div class="personal_text" style="text-align: center; padding: 40px 20px;">
                            <h2>${data.title}</h2>
                            <div style="margin-top: 30px;">
                                <a href="${data.url}" target="_blank" class="btn btn-primary" style="padding: 15px 40px; background: #0066cc; color: white; text-decoration: none; border-radius: 4px; font-size: 1.1em;">
                                    ${data.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;
        case 'image':
            content = `
                <div class="media">
                    <div class="d-flex">
                        <img src="img/${data.image}" alt="${data.title}">
                    </div>
                </div>`;
            break;
        default:
            content = '<p>Unknown content type</p>';
    }
    
    document.getElementById('dynamic-content').innerHTML = content;
    
    // Update page title
    if (data.title) {
        document.title = data.title + ' - Mesut';
    }
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
} else {
    loadContent();
}
