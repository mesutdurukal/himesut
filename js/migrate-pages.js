// Migration helper script
// This script helps extract content from existing HTML files to populate pages-data.js
// Run this in Node.js: node js/migrate-pages.js

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'pages');
const outputFile = path.join(__dirname, 'pages-data-full.js');

// Helper to extract YouTube video ID from iframe
function extractVideoId(html) {
    const match = html.match(/youtube\.com\/embed\/([^"?]+)/);
    return match ? match[1] : null;
}

// Helper to extract link info
function extractLink(html) {
    const match = html.match(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/);
    if (match) {
        return { url: match[1], text: match[2] };
    }
    return null;
}

// Helper to extract gallery images
function extractGalleryImages(html) {
    const images = [];
    
    // Try standard image gallery format first
    let regex = /<div class="(col-md-\d+)">\s*<a href="[^"]+\/([^"]+)"[^>]*>.*?<\/a>\s*([^<\n]+)/g;
    let match;
    
    while ((match = regex.exec(html)) !== null) {
        images.push({
            src: match[2],
            caption: match[3].trim(),
            size: match[1]
        });
    }
    
    // If no images found, try link gallery format (like challenges.html)
    if (images.length === 0) {
        regex = /<div class="(col-md-\d+)">\s*<a href="([^"]+\.html)"[^>]*>.*?<\/a>\s*([^<\n]+)/g;
        while ((match = regex.exec(html)) !== null) {
            images.push({
                src: 'technical/challenge.jpeg', // Default image for link galleries
                caption: match[3].trim(),
                link: match[2],
                size: match[1]
            });
        }
    }
    
    return images;
}

// Helper to extract article sections (technical content)
function extractArticleSections(html) {
    const sections = [];
    
    // Extract the banner_content section
    const contentMatch = html.match(/<div class="banner_content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/);
    if (!contentMatch) return sections;
    
    const content = contentMatch[1];
    
    // Split by media divs and extract content
    const mediaBlocks = content.split(/<div class="media">/);
    
    let currentSection = null;
    
    mediaBlocks.forEach(block => {
        // Extract heading
        const headingMatch = block.match(/<h2>([^<]+)<\/h2>/);
        if (headingMatch) {
            if (currentSection) sections.push(currentSection);
            currentSection = { heading: headingMatch[1] };
        }
        
        // Extract image
        const imgMatch = block.match(/<img src="\.\.\/img\/technical\/([^"]+)"/);
        if (imgMatch && currentSection) {
            currentSection.image = imgMatch[1];
        }
        
        // Extract text content
        const textMatch = block.match(/<div class="personal_text">\s*([\s\S]*?)\s*<\/div>/);
        if (textMatch) {
            let text = textMatch[1].trim();
            // Remove the heading if it's already captured
            text = text.replace(/<h2>[^<]+<\/h2>/, '').trim();
            if (text && currentSection) {
                currentSection.content = text;
            } else if (text && !currentSection) {
                // First section without heading
                currentSection = { content: text };
            }
        }
    });
    
    if (currentSection) sections.push(currentSection);
    
    return sections.filter(s => s.content || s.image);
}

// Determine page type and extract content
function extractPageContent(filename, html) {
    const pageId = filename.replace('.html', '');
    
    // Check if it's a simple link page (like etc.html)
    const simpleLinkMatch = html.match(/<div class="banner_content">\s*<a href="([^"]+)"[^>]*>([^<]+)<\/a>/);
    if (simpleLinkMatch) {
        return {
            type: 'link',
            title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
            url: simpleLinkMatch[1],
            text: simpleLinkMatch[2]
        };
    }
    
    // Check if it's a simple image page (like ml.html)
    const simpleImageMatch = html.match(/<div class="banner_content">[\s\S]*?<img src="\.\.\/img\/([^"]+)"[^>]*>/);
    if (simpleImageMatch && !html.includes('personal_text') && !html.includes('gallery')) {
        return {
            type: 'image',
            title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
            image: simpleImageMatch[1]
        };
    }
    
    // Check if it's a video page
    const videoId = extractVideoId(html);
    if (videoId) {
        const link = extractLink(html);
        return {
            type: 'video',
            videoId: videoId,
            title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
            ...(link && { link })
        };
    }
    
    // Check if it's a gallery page (standard format)
    if (html.includes('gallery-item')) {
        const images = extractGalleryImages(html);
        return {
            type: 'gallery',
            title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
            images: images
        };
    }
    
    // Check if it's a special gallery (like moreaboutme.html with imageGallery1)
    if (html.includes('imageGallery1') || html.includes('h_gallery_item')) {
        const images = [];
        const regex = /<img[^>]+src="\.\.\/img\/([^"]+)"[^>]*>[\s\S]*?<p>([^<]+)<\/p>/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            images.push({
                src: match[1],
                caption: match[2].trim(),
                size: 'col-md-4'
            });
        }
        if (images.length > 0) {
            return {
                type: 'gallery',
                title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
                images: images
            };
        }
    }
    
    // Otherwise it's likely an article/technical page
    const sections = extractArticleSections(html);
    if (sections.length > 0) {
        return {
            type: 'article',
            title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
            sections: sections
        };
    }
    
    // Fallback for pages we couldn't parse
    return {
        type: 'article',
        title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
        note: 'Content needs manual extraction'
    };
}

// Categorize pages
function categorizePage(filename) {
    const travelPages = ['turkey', 'japan', 'germany', 'france', 'italy', 'spain', 'portugal', 
                        'greece', 'croatia', 'bosnia', 'montenegro', 'holland', 'belgium', 
                        'austria', 'czech', 'hungary', 'denmark', 'norway', 'england', 
                        'usa', 'canada', 'singapore', 'taiwan', 'thailand', 'vietnam', 
                        'philiphines', 'malaysia'];
    
    const technicalPages = [
        // Core technical topics
        'async', 'bdd', 'docker', 'github', 'java', 'javascript', 'python',
        'selenium', 'playwright', 'api', 'performance',
        'typescript', 'html', 'gradle', 'maven', 'testng', 'junit', 'pytest',
        // Additional technical pages
        'allure', 'annotations', 'apache', 'architecture', 'benchmarking', 'binary', 
        'binarysearch', 'codingextra', 'consequtive', 'cron', 'crypto',
        'dataprovider', 'dayofweek', 'detectmissing', 'email', 'environment', 'freestyle',
        'galen', 'gauge', 'gradlemain', 'gradlesingletest', 'gradlesuite', 
        'gradletest', 'graphql', 'htmlunit', 'java8', 'javaadvanced', 'javabasics',
        'javainter', 'jenkinsparameters', 'jenkinssetup', 'jersey', 'jira', 'jmeter',
        'junitmain', 'karate', 'localrepo', 'locators', 'longestsequence',
        'mavenmain', 'mavensingletest', 'mavensuite', 'maventest', 'maveneclipse', 'mockito', 'parametrized',
        'pipeline', 'pipenv', 'poll', 'postman', 'publishpackage', 'pytestfixture',
        'pythonbasics', 'pythonexecution', 'pythonlog', 'pythonml', 'pythonsetup',
        'readyapi', 'repo', 'reporting', 'restassured', 'restful', 's3', 'selenide',
        'serenity', 'setup', 'softassertion', 'sqs', 'subset', 'suite', 'testinput',
        'testnghtmlout', 'testngmain', 'testngxml', 'xray',
        // Specific technical articles
        'cicd', 'cicdflow', 'flow', 'cloudwatch', 'cypress101', 'cypress102', 'cypress201',
        'googleapi', 'grafana', 'challenges'
    ];
    
    // Conference pages that might be confused with technical
    const conferencePages = ['javadayist', 'valid', 'valid_ml', 'valid_smell', 
                             'etc'];
    
    const pageId = filename.replace('.html', '');
    const pageIdLower = pageId.toLowerCase();
    
    if (travelPages.includes(pageId)) return 'travel';
    if (conferencePages.includes(pageId)) return 'conferences';
    if (technicalPages.includes(pageId) || technicalPages.includes(pageIdLower)) return 'technical';
    
    // Default to conferences for everything else
    return 'conferences';
}

// Main migration function
function migratePages() {
    // Exclude personal/special pages that shouldn't be in the directory
    const excludedPages = ['ml.html', 'moreaboutme.html'];
    const files = fs.readdirSync(pagesDir).filter(f => 
        f.endsWith('.html') && 
        f !== 'content.html' && 
        !excludedPages.includes(f)
    );
    
    const data = {
        conferences: {},
        travel: {},
        technical: {}
    };
    
    files.forEach(filename => {
        try {
            const filepath = path.join(pagesDir, filename);
            const html = fs.readFileSync(filepath, 'utf8');
            const pageId = filename.replace('.html', '');
            const category = categorizePage(filename);
            const content = extractPageContent(filename, html);
            
            data[category][pageId] = content;
            
            console.log(`Processed: ${filename} -> ${category}`);
        } catch (err) {
            console.error(`Error processing ${filename}:`, err.message);
        }
    });
    
    // Write output
    const output = `// Auto-generated pages data
// Generated on: ${new Date().toISOString()}

const pagesData = ${JSON.stringify(data, null, 4)};

// Helper function to get page data
function getPageData(category, pageId) {
    if (pagesData[category] && pagesData[category][pageId]) {
        return pagesData[category][pageId];
    }
    return null;
}
`;
    
    fs.writeFileSync(outputFile, output);
    console.log(`\nMigration complete! Output written to: ${outputFile}`);
    console.log(`Total pages processed: ${files.length}`);
    console.log(`- Conferences: ${Object.keys(data.conferences).length}`);
    console.log(`- Travel: ${Object.keys(data.travel).length}`);
    console.log(`- Technical: ${Object.keys(data.technical).length}`);
}

// Run migration
migratePages();
