<script>
	import { onMount } from 'svelte';
	export let data;
	import CardSlider from '../shared/CardSlider.svelte';
	import Carousel from '../libs/Carousel.svelte';
	import UpcomingSection from '../libs/UpcomingSection.svelte';
	let {
		popularMovies,
		justReleaseMovies,
		carouselData,
		upcomingMovies,
		moviesReleasedThisYear,
		topRatedSeries,
		seriesReleasedThisYear,
		koreanSeries
	} = data;
</script>

<main>
	<div class="">
		<Carousel {carouselData} />
	</div>
	<div style="width: 90%; margin: auto;">
		<div class="movie-just-release main-sections">
			<h2 class="main-section-heading">Just Release</h2>
			<div>
				<CardSlider cardType="long" perPage="6.5" movieList={justReleaseMovies} />
			</div>
		</div>
		<div class="recommendation-films main-sections">
			<h2 class="main-section-heading">Recommendation Films</h2>
			<p style="text-align: center;">
				You don't have any recommendation film yet, add films to watchlist to see more!
			</p>
		</div>
		<div class="upcoming main-sections">
			<UpcomingSection {upcomingMovies} />
		</div>

		<div class="popular-movies main-sections">
			<h2 class="main-section-heading">Popular Movies</h2>
			<CardSlider cardType="wide" perPage="4.5" movieList={popularMovies} />
		</div>
		<div class="top-rated-series main-sections">
			<h2 class="main-section-heading">Top Rated Series</h2>
			<CardSlider cardType="wide" perPage="4.5" movieList={topRatedSeries} />
		</div>
		<div class="released-this-year main-sections">
			<h2 class="main-section-heading">Released This Year</h2>
			<div style="width: 96%; margin-left: auto;">
				<h2 class="main-section-heading">Movies</h2>
				<CardSlider cardType="wide" perPage="4.5" movieList={moviesReleasedThisYear} />
				<h2 class="main-section-heading">Series</h2>
				<CardSlider cardType="wide" perPage="4.5" movieList={seriesReleasedThisYear} />
			</div>
		</div>
		<div class="korean-series main-sections">
			<h2 class="main-section-heading">Korean Series</h2>
			<CardSlider cardType="wide" perPage="4.5" movieList={koreanSeries} />
		</div>
	</div>
</main>
<s-head>
	<script type="module" src="/js/cardWithBackgroundSlider.js"></script>
</s-head>

<style>
	.main-sections {
		margin: 4em 0;
	}
	.main-section-heading {
		font-size: 1.5em;
		margin: 1.5em 0;
	}
	.upcoming {
		position: relative;
	}
</style>
