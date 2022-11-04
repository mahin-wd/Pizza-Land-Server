const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv');

app.use(cors());
app.use(express.json());

app.get('/', (res, req) => {
    res.send('Pizza server is running')
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})