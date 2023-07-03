let movieListRoute = require("./API/get/apiGet")

module.exports = (app) => {
    app.use("/api", movieListRoute)
}