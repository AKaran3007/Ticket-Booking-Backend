const express = require("express");

const app = express();

const dbconfig = require('./db')
const moviesroute = require('./routes/moviesRoute')

app.use(express.json())

app.use('/api/movies' , moviesroute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('node server started using the nodemon'));