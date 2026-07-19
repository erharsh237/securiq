const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Paras Koul\\.gemini\\antigravity\\brain\\987261e9-6b1a-4c3c-8eb8-ecae24808d14\\.system_generated\\steps\\1098\\content.md', 'utf-8');

const regex = /(?:`([^`]{15,200})`|"([^"]{15,200})")/g;
const found = new Set();
let match;

while ((match = regex.exec(content)) !== null) {
  const s = match[1] || match[2];
  if (s && !s.includes('react') && !s.includes('http') && !s.includes('function') && s.includes(' ') && !s.includes('return ') && !s.includes('import ') && !s.includes('<path')) {
    found.add(s.trim());
  }
}

fs.writeFileSync('content_strings.txt', [...found].filter(s => s.length > 0).join('\n'));
