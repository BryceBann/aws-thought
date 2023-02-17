const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-d78d6859-9c8e-4c3a-a33f-fe66d91b9d4b',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };

    return imageParams;
}

module.exports = params;