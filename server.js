const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const posts = require('./routes/posts');

const app = express();

app.use(express.json());

app.use('/api/v1/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));