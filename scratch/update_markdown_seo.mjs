import fs from 'fs';
import path from 'path';

const contentDirs = [
  'src/content/blogs',
  'src/content/seo-blogs'
];

const linkedinUrl = 'https://media.licdn.com/dms/image/v2/D5603AQH6vX8lVgE4Jw/profile-displayphoto-scale_400_400/B56ZzZfhRKIkAg-/0/1773175449229?e=1777507200&v=beta&t=CmuyLlecdwDn82EvkgqqbR80Fwyff7kmYDiJadvEoZs';
const unsplashUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=slate-900&auto=format&fit=crop&w=1200&q=80';
const targetImage = '/mohd-altaf.png';

let updatedCount = 0;

contentDirs.forEach(dirPath => {
  const fullPath = path.join(process.cwd(), dirPath);
  if (!fs.existsSync(fullPath)) return;

  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.md'));
  
  files.forEach(file => {
    const filePath = path.join(fullPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (content.includes(linkedinUrl)) {
      content = content.split(linkedinUrl).join(targetImage);
      changed = true;
    }

    // Only replace unsplash if it's likely a profile-related post
    if (content.includes(unsplashUrl) && (content.toLowerCase().includes('altaf'))) {
      content = content.split(unsplashUrl).join(targetImage);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content);
      updatedCount++;
    }
  });
});

console.log(`Successfully updated ${updatedCount} markdown files for Image SEO.`);
