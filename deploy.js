import { publish } from 'gh-pages';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
import { join } from 'path';

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read token from .env file manually
const loadEnv = () => {
  try {
    const envPath = join(__dirname, '.env');
    const envContent = readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        envVars[key] = value;
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('Error reading .env file:', error.message);
    return {};
  }
};

const env = loadEnv();
const token = env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
const username = 'Vaninath-09'; // Updated to match package.json homepage

// Validate token
if (!token) {
  console.error('GitHub token not found. Make sure GITHUB_TOKEN is set in your .env file');
  process.exit(1);
}

// Configure GitHub Pages options
const options = {
  repo: `https://${token}@github.com/${username}/sri-vaninath.git`,
  branch: 'gh-pages',
  dotfiles: true,
  message: 'Auto-deploy via gh-pages',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  },
  silent: false, // Enable logging
  add: true, // Add files not found in the previous version
};

// Deploy
console.log('Deploying to GitHub Pages...');
console.log(`Repository: ${username}/sri-vaninath`);
console.log(`Base path: ${process.env.BASE_PATH || '/sri-vaninath/'}`);

publish('dist', options, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    if (err.message && err.message.includes('authentication')) {
      console.error('This appears to be an authentication error. Your GitHub token may be invalid or expired.');
      console.error('Please update your GITHUB_TOKEN in the .env file or repository secrets.');
    }
    process.exit(1);
  } else {
    console.log('Deployment complete!');
    console.log('Your site should be available at:');
    console.log(`https://${username}.github.io/sri-vaninath/`);
  }
});
