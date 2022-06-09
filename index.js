const app = require('express')();
const { PORT } = require('./config');

app.use(require('body-parser').json());

app.use('/my-drive', require("./routes"));

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
});