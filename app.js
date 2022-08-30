const express = require('express');
const cors = require('cors');
require('./src/db/connection');

const port = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/authentication'));

app.listen(port, ()=>{

    console.log(`The Server is running at port: ${port}`);
});
