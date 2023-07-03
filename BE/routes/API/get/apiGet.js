let express = require("express")
let router = express.Router()

router.get("/movie/popular", async (req, res) => {
    let pageQuery = req.query.page
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad&page=${pageQuery}`)
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})

router.get("/carousel", async (req, res) => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})

router.get("/movie/just_release_2", async (req, res) => {
    Promise.all([
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad"),
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad&page=2"),
      ])
        .then( ([raw1, raw2]) => {
            return Promise.all([raw1.json(), raw2.json()])
        } )
        .then(([page1, page2]) => {
            res.json((page1.results).concat((page2.results)))
        })
        .catch(err => console.log(err.message))
})

router.get("/movie/upcoming", async (req, res) => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})

router.get("/movie/released_this_year", async (req, res) => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad&primary_release_year=2023")
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})
router.get("/movie/:movieId", async (req, res) => {
    let movieId = req.params.movieId
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad`)
        .then( raw =>  raw.json() )
        .then(movie => {
            res.json(movie)
        })
        .catch(err => console.log(err.message))
})
router.get("/movie/:movieId/credits", async (req, res) => {
    let movieId = req.params.movieId
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad`)
        .then( raw =>  raw.json() )
        .then(credits => {
            res.json(credits)
        })
        .catch(err => console.log(err.message))
})
router.get("/movie/:movieId/recommendations", async (req, res) => {
    let movieId = req.params.movieId
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad`)
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})
router.get("/movie/:movieId/similar", async (req, res) => {
    let movieId = req.params.movieId
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad`)
        .then( raw =>  raw.json() )
        .then(movies => {
            res.json(movies.results)
        })
        .catch(err => console.log(err.message))
})


router.get("/series/top_rated", async (req, res) => {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
        .then( raw =>  raw.json() )
        .then(series => {
            res.json(series.results)
        })
        .catch(err => console.log(err.message))
})
router.get("/series/released_this_year", async (req, res) => {
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad&primary_release_year=2023")
        .then( raw =>  raw.json() )
        .then(series => {
            res.json(series.results)
        })
        .catch(err => console.log(err.message))
})
router.get("/series/:fromCountry", async (req, res) => {
    let country = req.params.fromCountry
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad&with_origin_country=${country}`)
        .then( raw =>  raw.json() )
        .then(series => {
            res.json(series.results)
        })
        .catch(err => console.log(err.message))
})



module.exports = router