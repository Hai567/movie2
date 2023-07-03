export let load = async ({ fetch }) => {
	let fetchCarousel = async () => {
		let raw = await fetch("http://localhost:3000/api/carousel")
		let carouselData = await raw.json()
		return carouselData 
	}
	let fetchPopularMovies = async () => {
		let raw = await fetch("http://localhost:3000/api/movie/popular?page=1")
		let moviesData = await raw.json()
		return moviesData 
	}
	let fetchJustReleaseMovies = async () => {
		let raw = await fetch("http://localhost:3000/api/movie/just_release_2")
		let moviesData = await raw.json()
		return moviesData 
	}
	let fetchUpcomingMovies = async () => {
		let raw = await fetch("http://localhost:3000/api/movie/upcoming")
		let moviesData = await raw.json()
		return moviesData 
	}
	let fetchMoviesReleasedThisYear = async () => {
		let raw = await fetch("http://localhost:3000/api/movie/released_this_year")
		let moviesData = await raw.json()
		return moviesData 
	}
	let fetchTopRatedSeries = async () => {
		let raw = await fetch("http://localhost:3000/api/series/top_rated")
		let moviesData = await raw.json()
		return moviesData 
	}
	let fetchSeriesReleasedThisYear = async () => {
		let raw = await fetch("http://localhost:3000/api/series/released_this_year")
		let seriesData = await raw.json()
		return seriesData 
	}
	let fetchKoreanSeries = async () => {
		let raw = await fetch("http://localhost:3000/api/series/KR")
		let seriesData = await raw.json()
		return seriesData 
	}

	return {
		carouselData: fetchCarousel(),
		popularMovies: fetchPopularMovies(),
		justReleaseMovies: fetchJustReleaseMovies(),
		upcomingMovies: fetchUpcomingMovies(),
		topRatedSeries: fetchTopRatedSeries(),
		moviesReleasedThisYear: fetchMoviesReleasedThisYear(),
		seriesReleasedThisYear: fetchSeriesReleasedThisYear(),
		koreanSeries: fetchKoreanSeries()
	}

}

export let ssr = true 
export let csr = false 