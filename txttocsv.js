// const fs = require('fs');
// const { Transform } = require('stream');

// const inputFile = 'train_data.csv';
// const outputFile = 'train_data_modified.csv';

// // Create a transform stream that replaces ':::' with ','
// const replaceStream = new Transform({
//   transform(chunk, encoding, callback) {
//     // Convert the chunk to a string and replace ':::' with ','
//     const transformedChunk = chunk.toString().replace(/:::/g, ',');
//     // Push the transformed chunk to the output
//     this.push(transformedChunk);
//     callback();
//   }
// });

// // Create a read stream for the input file
// const readStream = fs.createReadStream(inputFile);
// // Create a write stream for the output file
// const writeStream = fs.createWriteStream(outputFile);

// // Pipe the read stream through the replace stream and then into the write stream
// readStream
//   .pipe(replaceStream)
//   .pipe(writeStream)
//   .on('finish', () => {
//     console.log('File transformation completed.');
//   })
//   .on('error', (error) => {
//     console.error('An error occurred:', error);
//   });


const fs = require('fs');
const readline = require('readline');

const inputFile = 'train_data.csv';
const outputFile = 'modified_train_data.csv';
const searchString = ':::';
const replaceString = ','

// Create a readable stream to read the input file
const inputStream = fs.createReadStream(inputFile, { encoding: 'utf8' });

// Create a writable stream to write the modified content to a new file
const outputStream = fs.createWriteStream(outputFile);

// Create a readline interface to read the input file line by line
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity
});

// Event listener for each line read
rl.on('line', (line) => {
  // Replace the string and write the modified line to the output stream
  const modifiedLine = line.split(searchString).join(replaceString);
  outputStream.write(modifiedLine + '\n');
});

// Event listener when the readline interface reaches the end of the file
rl.on('close', () => {
  console.log('Replacement completed.');
  // Close the streams
  inputStream.close();
  outputStream.close();
});

// Event listener for stream errors
inputStream.on('error', (err) => {
  console.error(`Error reading input file: ${err.message}`);
});

outputStream.on('error', (err) => {
  console.error(`Error writing to output file: ${err.message}`);
});
