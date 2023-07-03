require('dotenv').config()
let PORT = process.env.PORT || 3000
let express = require("express")
let app = express()
let routeManager = require("./routes/routeManager")
let cors = require("cors")

app.use(cors())
routeManager(app)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})