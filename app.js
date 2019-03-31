
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));