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
			<div>
				<div class="card" style="width: auto;">
					<img
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						class="card-img-top"
						alt={movie.name || movie.title}
					/>
					<div class="card-body">
						<p class="card-text name">{movie.title || movie.name}</p>
						<div class="movie-info">
							<p class="card-text rating">
								<i class="fa-solid fa-star star-icon" />
								{Math.round(movie.vote_average * 10) / 10}
							</p>
							<ul class="genres">
								{#each movie.genres as genre}
									<li>{genre.name}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</a>
	{/await}
{/if}

<style>
	.card {
		border: none;
		border-radius: 0;
		background: none;
	}
	.card img {
		border-radius: 15px;
		width: 110%;
	}
	.card-body {
		color: white;
		padding-top: 0.5em;
		padding-left: 0;
		padding-right: 0;
		line-height: 1.5em;
	}
	.movie-info {
		display: flex;
		gap: 10px;
	}
	p.name {
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 1em;
	}
	p.rating {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	ul {
		display: flex;
		gap: 10px;
		border-left: 1px solid white;
		padding-left: 10px;
		overflow: hidden;
	}
	li {
		white-space: nowrap;
	}
</style>
