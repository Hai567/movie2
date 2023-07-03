let tvGenres = []
let movieGenres = []
let tvGenreIds = []
let movieGenreIds = []
let fetchGenres = async () => {
    let tvGenresRaw = await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
    tvGenres = await tvGenresRaw.json()
    tvGenres = await tvGenres.genres
    let movieGenresRaw = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad")
    movieGenres = await movieGenresRaw.json()
    movieGenres = await movieGenres.genres

    await tvGenres.forEach(genre => {
        tvGenreIds.push(genre.id)
    })
    await movieGenres.forEach(genre => {
        movieGenreIds.push(genre.id)
    })
}

let sortGenresOfAFilm = async (film) => {
    await fetchGenres()
    let genres = []
    let type

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
    return film
}
let sortGenresOfMultipleFilms = async (films) => {
    await fetchGenres()
    films.forEach(film =>  {
        let genres = []
        let type
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
        return film
    })
    return films
}

export {sortGenresOfAFilm, sortGenresOfMultipleFilms}
  