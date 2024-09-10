// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const https = require('https');

// const jsonData = require('./toddlerbinge.games.json')

// const folderName = 'downloaded_images';
// const folderPath = path.join(__dirname, folderName);

// if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath);
// }
// function downloadImage(url, dest) {
//     const protocol = url.startsWith('https') ? https : http;
//     const file = fs.createWriteStream(dest);
//     protocol.get(url, function(response) {
//         response.pipe(file);
//     });
// }


// jsonData.forEach((item, index) => {
//     const screenshots = item.screenshots;
//     screenshots.forEach((screenshot, screenshotIndex) => {
//         const imageName = `image_${index + 1}_${screenshotIndex + 1}.png`; 
//         const imagePath = path.join(folderPath, imageName);

//         downloadImage(screenshot, imagePath);

//         console.log(`Downloading ${imageName}...`);
//     });
// });

// console.log('Images downloaded successfully.');


// 2nd code for replace name with underscore


// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const https = require('https');

// const jsonData =require('./xplore_games.Game.json')

// const outputFolder = 'screenshots';
// if (!fs.existsSync(outputFolder)) {
//     fs.mkdirSync(outputFolder);
// }

// function sanitizeFilename(filename) {
//     return filename.replace(/[\\/:"*?<>|]/g, '_'); 
// }

// function saveImage(imageUrl, imageName) {
//     const imagePath = path.join(outputFolder, imageName);
//     const file = fs.createWriteStream(imagePath);
//     const protocol = imageUrl.startsWith('https') ? https : http; 
//     protocol.get(imageUrl, function(response) {
//         response.pipe(file);
//         console.log(`Image ${imageName} saved successfully.`);
//     });
// }

// jsonData.forEach(item => {
//     const imageName = sanitizeFilename(item.name.replace(/\s/g, '_')) + '.png'; 
//     const imageUrl = item.screenshots[0]; 
//     saveImage(imageUrl, imageName);
// });

// 3 rd code without underscore

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const jsonData = require('./xplore_games.Game.json')


const outputFolder = 'sc';
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}


function sanitizeFilename(filename) {
    return filename.replace(/[\\/:"*?<>|]/g, '_'); 
}


function saveImage(imageUrl, imageName) {
    const imagePath = path.join(outputFolder, imageName);
    const file = fs.createWriteStream(imagePath);
    const protocol = imageUrl.startsWith('https') ? https : http; 
    protocol.get(imageUrl, function(response) {
        response.pipe(file);
        console.log(`Image ${imageName} saved successfully.`);
    });
}


jsonData.forEach(item => {
    const imageName = sanitizeFilename(item.name) + '.png'; 
    const imageUrl = item.screenshots[0]; 
    saveImage(imageUrl, imageName);
});

// new code to replace screenshot folder with json data secreenshot array

// Original JSON data
// const jsonData =require('./xplore_games.Game.json')
// async function fetchNewScreenshotData() {
//     const response = await fetch('./screenshots');
//     if (!response.ok) {
//       throw new Error('Failed to fetch new screenshot data');
//     }
//     return response.json();
//   }
//   function convertToScreenshotMap(data) {
//     return data.reduce((acc, item) => {
//       acc[item.name] = item.urls;
//       return acc;
//     }, {});
//   }
//   function replaceScreenshots(data, newScreenshots) {
//     return data.map(item => {
//       const newScreens = newScreenshots[item.name];
//       if (newScreens) {
//         item.screenshots = newScreens;
//       }
//       return item;
//     });
//   }
  
//   async function updateScreenshots() {
//     try {
//       const newScreenshotData = await fetchNewScreenshotData();
//       const newScreenshots = convertToScreenshotMap(newScreenshotData);
//       const updatedJsonData = replaceScreenshots(jsonData, newScreenshots);
//       console.log(updatedJsonData);
//     } catch (error) {
//       console.error('Error updating screenshots:', error);
//     }
//   }

//   updateScreenshots();
  