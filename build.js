const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the build
console.log('Running Parcel build...');
execSync('npm run build', { stdio: 'inherit' });
console.log('Build completed.');

// Copy any additional files needed to the dist directory
// For example, if you need to copy static assets:
// fs.copyFileSync('src/assets/some-file.png', 'dist/assets/some-file.png');

// Create a simple vercel.json in the dist directory if needed
const vercelConfigPath = path.join(__dirname, 'dist', 'vercel.json');
const vercelConfig = {
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
};

fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
console.log('Created vercel.json in dist directory.'); 