let sortGenres = async (film) => {
    let tvGenresRaw = await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
    let tvGenres = await tvGenresRaw.json()
    tvGenres = await tvGenres.genres
    let movieGenresRaw = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
    let movieGenres = await movieGenresRaw.json()
    movieGenres = await movieGenres.genres
    let tvGenreIds = []
    let movieGenreIds = []
    let genres = []
    let type

    await tvGenres.forEach(genre => {
        tvGenreIds.push(genre.id)
    })
    await movieGenres.forEach(genre => {
        movieGenreIds.push(genre.id)
    })

    film.genre_ids.forEach(id => {
        if (tvGenreIds.includes(id)){
            type = "tv"
        }else{
            type = "movie"
        }
        if (movieGenreIds.includes(id)){
            movieGenres.forEach(fixedGenre => {
                if (id === fixedGenre.id){
                    genres.push(fixedGenre)
                }
            })
        }else{
            tvGenres.forEach(fixedGenre => {
                if (id === fixedGenre.id){
                    genres.push(fixedGenre)
                }
            })
        }
    })
    film.type = type
    film.genres = genres
}


export default sortGenres