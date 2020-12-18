const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

// Init middleware
// app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
// member api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started PORT${PORT}`));
