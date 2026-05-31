PERSONAL ACADEMIC WEBSITE — Mustafizur Rahman
================================================

A clean, responsive academic portfolio site built with HTML, CSS, and vanilla JS.

FILES
-----
index.html          Main page
style.css           All styles (light/dark themes, responsive)
script.js           Theme toggle, mobile menu, active nav highlighting
images/             Profile photo
documents/          CV and academic PDFs

SETUP
-----
1. Replace profile photo in images/ with your preferred headshot
2. Update CV filename in documents/ (and matching links in index.html)
3. Add research_statement.pdf and teaching_statement.pdf to documents/ when ready
4. Update publication DOI links to real URLs
5. Update GitHub project links to specific repositories
6. Customize the Teaching section with your actual courses

FEATURES
--------
- Dark/light mode with system preference detection
- Active nav highlighting via Intersection Observer
- Responsive layout (mobile, tablet, desktop)
- Open Graph + Twitter Card meta tags
- Inline SVG favicon (no extra file needed)
- DM Sans typography via Google Fonts
- Smooth scroll with proper offset for sticky header

TO CUSTOMIZE
------------
- Colors: edit CSS variables in :root and html[data-theme="dark"]
- Font: swap the Google Fonts import and --font variable
- Sections: add/remove sections in both HTML and nav links
