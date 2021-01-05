const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiParty = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const corsOption = {
//     origin: '*',
//     optionSuccessStatus: 200,
// };
// app.use(cors(corsOption));

const multiPartyMiddleware = multiParty({ uploadDir: './uploads' });
app.post('/upload', multiPartyMiddleware, (request, response) => {
    const files = request.files;
    console.log(files);
    response.json({ message: files });
});

app.use((error, request, response, next) => {
    response.json({ error: error.message })
})

app.listen(8000, () => {
    console.log('Servidor porta 8000 inicializado...');
})