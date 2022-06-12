const fs = require('fs')

const removeFile = (nameFile) => {
    try {
        fs.unlinkSync(`./uploads/${nameFile}`)
    } catch (err) {
        console.log('removeFile');
        console.log(err);
    }
}

module.exports = removeFile