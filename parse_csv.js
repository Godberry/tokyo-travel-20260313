const fs = require('fs');

const csvContent = fs.readFileSync('人人必備的出遊行李清單｜男女適用，不分國內外 ✈️ 波琳達旅行中 - 旅遊行李清單.csv', 'utf-8');

const lines = csvContent.split('\n');

const categories = [];
let currentCategory = null;

// Parse lines starting from where checklist data appears
for (let i = 0; i < lines.length; i++) {
  // Handle CSV quoting for notes containing commas by using a simple split
  // However, typical JS split(',') breaks if quoted.
  // We can use a regex or just simple parsing because we know the structure.
  
  // A simple regex to split CSV properly
  const row = [];
  let inQuotes = false;
  let currentVal = '';
  for(let j=0; j<lines[i].length; j++){
    const char = lines[i][j];
    if(char === '"'){
      inQuotes = !inQuotes;
    } else if(char === ',' && !inQuotes){
      row.push(currentVal);
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  row.push(currentVal);
  
  // Columns 4,5,6,7,8 are Item, Qty, Check, Position, Note
  if (row.length >= 5) {
    const col4 = (row[4] || '').trim();
    const col5 = (row[5] || '').trim();
    const col6 = (row[6] || '').trim();
    const col7 = (row[7] || '').trim();
    const col8 = (row[8] || '').trim();

    // Check if it's a category header
    if (col4 && !col5 && col4 !== '項目' && !col4.includes('CC授權') && !col4.includes('點我支持')) {
      // It might be a category title
      currentCategory = {
        name: col4,
        items: []
      };
      categories.push(currentCategory);
    } 
    // Check if it's an item
    else if (col4 && col4 !== '項目' && currentCategory && col5) {
      currentCategory.items.push({
        id: col4,
        name: col4,
        quantity: col5,
        defaultChecked: col6 === '✔',
        position: col7,
        note: col8.replace(/\r/g, '')
      });
    }
  }
}

// Clean up empty categories
const validCategories = categories.filter(c => c.items.length > 0);

fs.mkdirSync('app/data', { recursive: true });
fs.writeFileSync('app/data/checklist.json', JSON.stringify(validCategories, null, 2));

console.log('Successfully parsed CSV to JSON');
console.log(`Generated ${validCategories.length} categories.`);
