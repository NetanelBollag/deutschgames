const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Paths
const distDir = path.join(__dirname, 'dist');
const htmlFile = path.join(distDir, 'index.html');
const jsFile = path.join(distDir, 'bundle.js');
const outputFile = path.join(__dirname, 'index.html');

// Read the files
const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const jsContent = fs.readFileSync(jsFile, 'utf8');

// Replace the script tag with an inline script
let inlinedHtml = htmlContent.replace(
  /<script.*?src=".*?bundle\.js".*?><\/script>/,
  `<script>${jsContent}</script>`
);

// Write the combined file
fs.writeFileSync(outputFile, inlinedHtml);

// Remove the dist directory
rimraf.sync(distDir);

console.log(`
✅ Successfully created a single HTML file!
📁 Location: ${outputFile}
📝 You can copy this file to your Android device.
💣 Removed dist directory.
`); 