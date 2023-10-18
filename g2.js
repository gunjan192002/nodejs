// Here we will discuss about streams of data

const fs = require('fs');

const readStream = fs.createReadStream("./blog.txt");
readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes`);
    console.log(chunk.toString());
})