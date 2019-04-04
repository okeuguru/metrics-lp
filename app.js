
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

const adminData = require('./routes/admin')
const metricsHomeRoutes = require('./routes/metrics-home')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(metricsHomeRoutes)
app.use(adminData.routes)

app.use((req, res, next) => {
    res.status(404).send('<html>Page not found $)$ error</html>')
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));