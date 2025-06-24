// import fs from 'fs';
import fs from 'fs/promises'

// readFile() - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - Synchronous Version
// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);

// readFile() - Promise .then()
// fs.readFile('./text.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// readFile() - async/await
// const readFile = async () => {
//     try {
//         const data = await fs.readFile('./text.txt', 'utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };
// readFile();

// writeFile() -async/await
// const writeFile = async () => {
//     try {
//         await fs.writeFile('./text.txt', 'This is write text to text.tx file');
//         console.log('Text has been written to...');  
//     } catch (error) {
//         console.log(error);
//     }
// };
// writeFile();

// appendFile() - async/await
const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\nThis is append text to file');
        console.log('text has been appent to...');        
    } catch (error) {
        console.log(error);
    }
}
appendFile();