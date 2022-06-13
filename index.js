const app = require('express')();
const { PORT } = require('./config');
const handleError = require('./middlewares/handleError');
require('./database/initDB')();

app.use(require('body-parser').json());

app.use('/my-drive', require("./routes"));

app.use(handleError)

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
});