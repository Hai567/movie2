export const load = ({ params, fetch }) => {
    let movieId = params.movieId
    let fetchSingleMovie = async () => {
        let raw = await fetch(`http://localhost:3000/api/movie/${movieId}`)
		let movieData = await raw.json()
		return movieData 
    }
    let fetchMovieCredits = async () => {
        let movieId = params.movieId
        let raw = await fetch(`http://localhost:3000/api/movie/${movieId}/credits`)
		let movieData = await raw.json()
		return movieData 
    }
    let fetchRecommendedMovies = async () => {
        let movieId = params.movieId
        let raw = await fetch(`http://localhost:3000/api/movie/${movieId}/recommendations`)
		let movieData = await raw.json()
		return movieData 
    }
    let fetchSimilarMovies = async () => {
        let movieId = params.movieId
        let raw = await fetch(`http://localhost:3000/api/movie/${movieId}/similar`)
		let movieData = await raw.json()
		return movieData 
    }


    return {
        singleMovie: fetchSingleMovie(),
        movieCredits: fetchMovieCredits(),
        recommendedMovies: fetchRecommendedMovies(),
        similarMovies: fetchSimilarMovies()
    }
}