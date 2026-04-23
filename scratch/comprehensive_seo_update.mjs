import fs from 'fs';
import path from 'path';

const searchId = '1773175449229';
const targetImage = '/mohd-altaf.png';

const walk = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        walk(fullPath, callback);
      }
    } else {
      callback(fullPath);
    }
  });
};

let updatedCount = 0;

walk(process.cwd(), (filePath) => {
  const ext = path.extname(filePath);
  if (!['.md', '.js', '.tsx', '.ts'].includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Regex to match the entire LinkedIn URL containing the ID
  const linkedinRegex = new RegExp('https:\\/\\/media\\.licdn\\.com\\/dms\\/image\\/v2\\/[^\\/\\s]+\\/[^\\/\\s]+\\/[^\\/\\s]+\\/0\\/' + searchId + '[^"\'\\s]*', 'g');
  
  if (linkedinRegex.test(content)) {
    content = content.replace(linkedinRegex, targetImage);
    changed = true;
  }

  // Also replace the unsplash placeholder in files related to Altaf
  const unsplashUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=slate-900&auto=format&fit=crop&w=1200&q=80';
  if (content.includes(unsplashUrl) && (content.toLowerCase().includes('altaf'))) {
    content = content.split(unsplashUrl).join(targetImage);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    updatedCount++;
  }
});

console.log(`Successfully updated ${updatedCount} files across the codebase for Image SEO.`);
