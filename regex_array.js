// Part 1: Filtering with regex

const files = [
  'document.txt',
  'image.JPEG',
  'photo.png',
  'archive.zip',
  'logo.gif',
  'script.js',
  'family-pic.jpg',];

// Task 1: Create a function that takes an array of the filenames. 
// Use the filter() array method. 
// The filter condition should use a regular expression to identify image files. 
// Return a new array containing only the image filenames.
function filterImages(fileArray){
  return fileArray.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
}
let imageFiles = filterImages(files)
console.log(imageFiles)

console.log("=================================Border=================================")

const userData = [
  'user:john_doe, email:john.doe@example.com',
  'user:jane_smith, email:jane.smith@example.org',
  'user:mike_jones, email:mike.jones@example.net',
];

// Task 2:
// Create a function getEmails(dataArray) that takes an array of user data strings.
// Use the map() array method.
// Inside the map() callback, use a regular expression with a capturing group to find and return just the email address from each string.
// Return a new array containing only the email addresses.

function getEmails(dataArray) {
  return dataArray.map((user) => {
    const match = user.match(/email:(.+)/)
    if(match){
      return match[1];
    }else{
      return null
    }
  });
}

const emails = getEmails(userData);
console.log(emails);

console.log("=================================Border=================================")

const urls = [
  'https://www.example.com',
  'ftp://ftp.example.org',
  'http://www.anothersite.net',
  'www.invalid.com',
  'https://site-with-dash.com',
];

// Task 3:
// Create a function processUrls(urlArray) that takes an array of URLs. 
// Use a combination of array methods to first filter out the invalid URLs. 
// The filter condition should use a regex to check for a valid prefix. 
// Then, map over the remaining valid URLs. 
// For each valid URL, remove the http:// or https:// prefix. 
// Return a new array containing the cleaned-up URLs.

function processUrls(urlArray){
  return urlArray
    .filter(url => /^https?:\/\//.test(url))
    .map(url => url.replace(/^https?:\/\/(?:www\.)?/, ''));
}
const cleanedUrls = processUrls(urls);
console.log(cleanedUrls);