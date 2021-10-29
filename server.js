const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./public/routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');

app.use(express.static("public"));


// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


const { animals } = require("./data/animals.json");

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});