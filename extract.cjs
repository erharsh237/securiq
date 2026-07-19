const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Paras Koul\\.gemini\\antigravity\\brain\\987261e9-6b1a-4c3c-8eb8-ecae24808d14\\.system_generated\\steps\\1098\\content.md', 'utf-8');

// Match words or sentences in backticks or quotes, capturing strings from the minified bundle.
const regex = /(?:`([^`]{10,200})`|"([^"]{10,200})")/g;
let match;
const found = new Set();

while ((match = regex.exec(content)) !== null) {
  const str = match[1] || match[2];
  if (str && str.length > 5 && !str.includes('function') && !str.includes('react') && !str.includes('.js') && !str.includes('__') && !str.includes('symbol')) {
    found.add(str);
  }
}

fs.writeFileSync('extracted_strings.txt', [...found].join('\n'));
console.log('Extracted strings written to extracted_strings.txt');
