<script>
	import { onMount, onDestroy } from 'svelte';
	export let movie;
	import { sortGenresOfAFilm } from '../helpers/sortGenre.mjs';
	// This 3 lines check if the data should be rendered to avoid leaking memory
	let shouldBeRendered = false; //
	onMount(() => (shouldBeRendered = true)); //
	onDestroy(() => (shouldBeRendered = false)); //
	//
</script>

{#if shouldBeRendered}
	{#await sortGenresOfAFilm(movie) then movie}
		<a href="/{movie.type}/{movie.id}" target="_self">
			<div class="film-card">
				<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
				<div class="fade-black-bottom" />
				<div class="film-card-info">
					<h3>{movie.title || movie.name}</h3>
					<div class="smaller-info">
						<p class="rating"><i class="fa-solid fa-star star-icon" /> {movie.vote_average}</p>
						<ul>
							{#each movie.genres as genre}
								<li>{genre.name}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</a>
	{/await}
{/if}

<style>
	h3 {
		font-size: 1.2em;
		display: -webkit-box;
		max-width: 200px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 0.3em;
	}
	.film-card {
		max-width: 18em;
		position: relative;
	}
	.film-card img {
		border-radius: 15px;
	}
	.film-card-info {
		color: white;
		position: absolute;
		bottom: 1.2em;
		width: 82%;
		margin: auto;
		right: 0;
		left: 0;
	}
	.smaller-info {
		display: flex;
		gap: 10px;
		line-height: 1.5em;
		align-items: center;
	}
	.smaller-info ul {
		display: flex;
		gap: 10px;
		border-left: 1px solid white;
		padding-left: 10px;
		overflow: hidden;
		list-style: none;
		position: relative;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	li {
		white-space: nowrap;
	}
	.rating {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.fade-black-bottom {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		background: linear-gradient(0deg, black 0%, #05000088 50%, #ffffff00);
	}
</style>
