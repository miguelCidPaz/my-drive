const fs = require('fs')

const downloadFile = (name_file) => {
    try {
        return fs.readFileSync(`./uploads/${name_file}`)
    } catch (err) {
        console.log('downloadFile');
        console.log(err);
    }

}

module.exports = downloadFile