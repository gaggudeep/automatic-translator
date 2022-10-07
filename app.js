const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json())

app.post('/', async (req, res) => {

    const { challenge } = req.body

    res.send({ challenge })
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})