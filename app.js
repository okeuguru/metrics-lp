
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const metricsHomeRoutes = require('./routes/metrics-home')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(metricsHomeRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));