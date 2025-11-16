// Script to help update old page links to new dynamic URLs
// This is a helper to show you what needs to be updated

const fs = require('fs');
const path = require('path');

// Map of old HTML files to their categories
const pageCategories = {
    // Travel pages
    turkey: 'travel', japan: 'travel', germany: 'travel', france: 'travel',
    italy: 'travel', spain: 'travel', portugal: 'travel', greece: 'travel',
    croatia: 'travel', bosnia: 'travel', montenegro: 'travel', holland: 'travel',
    belgium: 'travel', austria: 'travel', czech: 'travel', hungary: 'travel',
    denmark: 'travel', norway: 'travel', england: 'travel', usa: 'travel',
    canada: 'travel', singapore: 'travel', taiwan: 'travel', thailand: 'travel',
    vietnam: 'travel', philiphines: 'travel', malaysia: 'travel',
    
    // Technical pages
    async: 'technical', bdd: 'technical', docker: 'technical', github: 'technical',
    java: 'technical', javascript: 'technical', python: 'technical', selenium: 'technical',
    cypress: 'technical', playwright: 'technical', api: 'technical', cicd: 'technical',
    performance: 'technical', typescript: 'technical', html: 'technical',
    gradle: 'technical', maven: 'technical', testng: 'technical', junit: 'technical',
    pytest: 'technical', java8: 'technical', javaadvanced: 'technical',
    javabasics: 'technical', javadayist: 'technical', javainter: 'technical',
    gradlemain: 'technical', gradlesingletest: 'technical', gradlesuite: 'technical',
    gradletest: 'technical', htmlunit: 'technical', mavenEclipse: 'technical',
    mavenmain: 'technical', mavensingletest: 'technical', mavensuite: 'technical',
    maventest: 'technical', pytestfixture: 'technical', pythonbasics: 'technical',
    pythonexecution: 'technical', pythonlog: 'technical', pythonml: 'technical',
    pythonsetup: 'technical', testnghtmlout: 'technical', testngmain: 'technical',
    testngxml: 'technical', junitmain: 'technical'
};

// Function to convert old URL to new URL
function convertUrl(oldUrl) {
    if (!oldUrl || !oldUrl.includes('.html')) {
        return oldUrl; // Not an HTML link, skip
    }
    
    // Extract page ID from URL
    const match = oldUrl.match(/pages\/([^.]+)\.html/);
    if (!match) return oldUrl;
    
    const pageId = match[1];
    const category = pageCategories[pageId] || 'conferences';
    
    return `pages/content.html?category=${category}&id=${pageId}`;
}

// Example: Show conversions for common pages
console.log('=== Example URL Conversions ===\n');

const examples = [
    'pages/addo.html',
    'pages/turkey.html',
    'pages/async.html',
    'pages/festive23.html',
    'pages/japan.html',
    'pages/python.html'
];

examples.forEach(oldUrl => {
    const newUrl = convertUrl(oldUrl);
    console.log(`OLD: ${oldUrl}`);
    console.log(`NEW: ${newUrl}`);
    console.log('');
});

// Generate update instructions for conferences-data.js
console.log('\n=== Instructions for conferences-data.js ===\n');
console.log('Find and replace patterns:\n');

console.log('1. For conference pages (most common):');
console.log('   FIND:    url: "pages/PAGENAME.html"');
console.log('   REPLACE: url: "pages/content.html?category=conferences&id=PAGENAME"\n');

console.log('2. For travel pages:');
console.log('   FIND:    url: "pages/turkey.html"');
console.log('   REPLACE: url: "pages/content.html?category=travel&id=turkey"\n');

console.log('3. For technical pages:');
console.log('   FIND:    url: "pages/async.html"');
console.log('   REPLACE: url: "pages/content.html?category=technical&id=async"\n');

// Try to read and analyze conferences-data.js
try {
    const dataFile = path.join(__dirname, 'conferences-data.js');
    const content = fs.readFileSync(dataFile, 'utf8');
    
    // Find all .html URLs
    const htmlUrls = content.match(/url:\s*"pages\/[^"]+\.html"/g) || [];
    
    if (htmlUrls.length > 0) {
        console.log(`\n=== Found ${htmlUrls.length} old HTML URLs in conferences-data.js ===\n`);
        console.log('Sample URLs that need updating:');
        htmlUrls.slice(0, 10).forEach(url => {
            console.log(`  ${url}`);
        });
        
        if (htmlUrls.length > 10) {
            console.log(`  ... and ${htmlUrls.length - 10} more`);
        }
    } else {
        console.log('\n✅ No old HTML URLs found in conferences-data.js - already updated!');
    }
} catch (err) {
    console.log('\nNote: Could not read conferences-data.js');
}

console.log('\n=== Recommendation ===');
console.log('For now, KEEP the old URLs. The fallback system will handle them.');
console.log('Update links gradually as you test the dynamic pages on GitHub Pages.');
