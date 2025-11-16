# How to Test Dynamic Pages

## ⚠️ Important: You Need a Web Server

The dynamic pages **cannot be opened directly** as files (e.g., `file:///pages/content.html`). They must be served through a web server to:
- Parse URL parameters correctly
- Load JavaScript modules properly
- Avoid CORS issues

## Quick Start: Run Local Server

### Option 1: Python (Recommended)
```bash
cd /Users/mesutdurukal/indeed/himesut
python3 -m http.server 8080
```

Then open in browser:
- **Test page**: http://localhost:8080/test-dynamic-pages.html
- **Direct link**: http://localhost:8080/pages/content.html?category=conferences&id=addo

### Option 2: PHP
```bash
cd /Users/mesutdurukal/indeed/himesut
php -S localhost:8080
```

### Option 3: Node.js (if installed)
```bash
cd /Users/mesutdurukal/indeed/himesut
npx http-server -p 8080
```

### Option 4: VS Code Live Server
If you use VS Code:
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## Testing URLs

Once the server is running, test these URLs:

### Conference Videos
```
http://localhost:8080/pages/content.html?category=conferences&id=addo
http://localhost:8080/pages/content.html?category=conferences&id=festive23
http://localhost:8080/pages/content.html?category=conferences&id=90days
```

### Travel Galleries
```
http://localhost:8080/pages/content.html?category=travel&id=turkey
http://localhost:8080/pages/content.html?category=travel&id=japan
http://localhost:8080/pages/content.html?category=travel&id=germany
```

### Technical Articles
```
http://localhost:8080/pages/content.html?category=technical&id=async
http://localhost:8080/pages/content.html?category=technical&id=docker
http://localhost:8080/pages/content.html?category=technical&id=python
```

## Why "Content not found"?

If you see "Content not found", check:

1. **Are you using a web server?**
   - ❌ `file:///Users/.../pages/content.html` - Won't work
   - ✅ `http://localhost:8080/pages/content.html` - Works

2. **Do you have URL parameters?**
   - ❌ `http://localhost:8080/pages/content.html` - Missing params
   - ✅ `http://localhost:8080/pages/content.html?category=conferences&id=addo` - Correct

3. **Is the page ID correct?**
   - Check `js/pages-data.js` for valid IDs
   - IDs are case-sensitive (use lowercase)

4. **Is the category correct?**
   - Must be: `conferences`, `travel`, or `technical`

## Browser Console Debugging

Open browser console (F12) to see errors:
```javascript
// Check if data loaded
console.log(pagesData);

// Check if function exists
console.log(typeof getPageData);

// Test getting data
console.log(getPageData('conferences', 'addo'));
```

## Production Deployment

When deploying to your web server:
- Upload all files including `js/pages-data.js` and `js/content-renderer.js`
- Update links in `index.html` and `conferences-data.js` to use the dynamic URLs
- Old links like `pages/addo.html` should become `pages/content.html?category=conferences&id=addo`

## Current Status

✅ **Server running**: http://localhost:8080  
✅ **Test page**: http://localhost:8080/test-dynamic-pages.html  
✅ **Sample page**: http://localhost:8080/pages/content.html?category=conferences&id=addo

## Stop the Server

When done testing:
```bash
# Find the process
lsof -i :8080

# Kill it
kill <PID>

# Or press Ctrl+C in the terminal where server is running
```

---

**Note**: The dynamic pages are working correctly! You just need to access them through a web server, not by opening the HTML file directly.
