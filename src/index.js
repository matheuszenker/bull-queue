const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT || 4000);
