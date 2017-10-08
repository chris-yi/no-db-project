const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())


app.get("/api/weather/:latitude/:longitude", (req,res) => {
    // console.log(req.params)
    axios.get(`https://api.darksky.net/forecast/adbf2859b8ec51a2d93b795807e46f0d/${req.params.latitude},${req.params.longitude}`)
    .then(weather => {
        res.status(200).send(weather.data)
    })
})

app.get('/api/quotes', (req,res) => {
    axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&lang=en&format=json')
    .then(quotes => {
        // console.log(quotes)
        res.status(200).json(quotes.data)
    })
})

app.get('/api/background', (req,res) => {
    axios.get('https://api.unsplash.com/photos/random/?client_id=8fbcc20584509ecd827c9b2a227367cf8a995c16e430233c2ee8a0b795f554fd')
    .then(image => {
        console.log(image.data.urls.regular)
        res.status(200).send(image.data.urls.regular)
    })
})



app.listen(port, () => {
    console.log(`Your server is running on port ${port}`)
})