import url, { URL } from 'url';

const urlString =   'https://www.google.com/search?q=hello+world';

// urlObj
const urlObj = new URL(urlString);
console.log(urlObj);