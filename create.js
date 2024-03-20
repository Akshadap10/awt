const fs = require('fs')
const fileName = 'input.txt';
const filecontent = 'Hello, this is some content for the new file!';

fs.writeFile(fileName, filecontent, 'utf8', (err) => {
    if (err) {
        console.error('Error creating input.txt');
        return;
    }

    console.log('input.txt has been successfully created with the given content.');
});