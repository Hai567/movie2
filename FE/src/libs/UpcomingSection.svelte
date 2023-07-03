<script>
	import { onMount, onDestroy } from 'svelte';
	import CardSliderWithBackground from '../shared/CardSliderWithBackground.svelte';
	export let upcomingMovies;
	let currentActiveMovie = upcomingMovies[0];
	let cardSliderWithBackgroundHandler = (e) => {
		// get the index of current active slide
		currentActiveMovie = e.detail;
	};
	import { sortGenresOfAFilm } from '../helpers/sortGenre.mjs';
	// This 3 lines check if the data should be rendered to avoid leaking memory
	let shouldBeRendered = false; //
	onMount(() => (shouldBeRendered = true)); //
	onDestroy(() => (shouldBeRendered = false)); //
	//
</script>

{#if shouldBeRendered}
	{#await sortGenresOfAFilm(currentActiveMovie) then currentActiveMovie}
		<div
			class="upcoming-container"
			style="background-image: url({`https://image.tmdb.org/t/p/original${currentActiveMovie.backdrop_path}`});"
		>
			<div class="upcoming-info">
				<div class="intro">
					<h2 class="main-section-heading upcoming-info-full">Upcoming Movies</h2>
					<p class="upcoming-info-full">Our Upcoming Movies You May Like</p>
				</div>

				<h1 class="upcoming-info-full">{currentActiveMovie.title || currentActiveMovie.name}</h1>
				<div class="upcoming-smaller-info upcoming-info-full">
					<p class="rating">
						<i class="fa-solid fa-star star-icon" />
						{currentActiveMovie.vote_average}
					</p>
					<p class="release-date">{currentActiveMovie.release_date}</p>
					<ul class="genres">
						{#each currentActiveMovie.genres as genre}
							<li>{genre.name}</li>
						{/each}
					</ul>
				</div>
				<p class="upcoming-info-full overview">{currentActiveMovie.overview}</p>
				<div class="button">
					<button />
				</div>
			</div>
			<CardSliderWithBackground
				{currentActiveMovie}
				on:slideChange={(e) => {
					// Handle slide on change, both click and drag
					cardSliderWithBackgroundHandler(e);
				}}
				cardType="long"
				perPage="3.5"
				movieList={upcomingMovies}
			/>
		</div>
		<div
			class="fade-black-top"
			style="height: 20% !important;
        background: linear-gradient(180deg, #181A18 0%, #ffffff00)"
		/>
		<div
			class="fade-black-bottom"
			style="height: 20% !important;
        background: linear-gradient(0deg, #181A18 0%, #ffffff00)"
		/>
	{/await}
{/if}

<style>
	.intro {
		position: absolute;
		top: 10%;
		margin-bottom: 2em;
		z-index: 1;
	}
	.upcoming-container {
		position: relative;
		display: grid;
		grid-template-columns: 40% 60%;
		height: 50em;
		background-repeat: no-repeat;
		background-position: center 20%;
		background-attachment: fixed;
		background-size: cover;
		align-items: center;
	}
	.upcoming-info {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 80%;
		margin: auto;
		margin-top: 40%;
	}
	.upcoming-info h1 {
		margin: 1em 0;
	}
	.upcoming-info-full {
		width: 100%;
	}
	.genres {
		display: flex;
		gap: 5px;
	}
	.upcoming-smaller-info {
		display: flex;
		gap: 10px;
	}
	.release-date {
		padding: 0 10px;
		border-left: 1px solid white;
		border-right: 1px solid white;
	}
	.overview {
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
