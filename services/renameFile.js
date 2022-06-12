const fs = require('fs')

const renameFile = (name, nameExt) => {
    try {
        fs.renameSync(`./uploads/${name}`, `./uploads/${nameExt}`)
        console.log('file renamed');
    } catch (err) {
        console.log('renameFile');
        console.log(err);
    }
}

module.exports = renameFile