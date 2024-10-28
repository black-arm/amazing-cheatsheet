
const fs = require('fs');

// Get the URL from the command line argument
const url = process.argv[2];
const filename = process.argv[3];

if (!url) {
  console.error('Please provide a URL as a command-line argument');
  process.exit(1);
}

// Function to extract anchor tags
async function extractAnchorsFromURL(url, filename) {
  try {
    // Fetch the webpage content
    const response = await fetch(url);
    const html = await response.text();

    const anchorRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
    let matches;
    const anchors = [];
    
    // Loop through all matches
    while ((matches = anchorRegex.exec(html)) !== null) {
      const href = matches[1]; // href value
      const text = matches[2].replace(/<[^>]+>/g, '').trim()
      anchors.push({ text, href });
    }
    // Write the data to a JSON file
    const outputFileName = `${__dirname}/../public/json/${filename}.json`;
    fs.writeFileSync(outputFileName, JSON.stringify(anchors, null, 2));

    console.log(`Anchor data has been written to ${outputFileName}`);
  } catch (error) {
    console.error('Error fetching or processing the webpage:', error);
  }
}

extractAnchorsFromURL(url, filename);
