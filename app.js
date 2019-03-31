
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const metricsHomeRoutes = require('./routes/metrics-home')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(metricsHomeRoutes)
app.use(adminRoutes)

app.use((req, res, next) => {
    res.status(404).send('<html>Page not found $)$ error</html>')
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));