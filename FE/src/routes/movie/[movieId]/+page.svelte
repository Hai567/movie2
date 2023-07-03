<script>
	export let data;
	let { singleMovie, movieCredits, recommendedMovies, similarMovies } = data;
	let movieCast = movieCredits.cast;
	import CardSlider from '../../../shared/CardSlider.svelte';
</script>

<div style="position: relative;">
	<div
		class="intro"
		style="background-image: url({`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`});"
	>
		<div class="fade-black-top" style="height: 50%" />
		<div class="fade-black-bottom" style="height: 50%" />
		<div class="intro-container">
			<div class="intro-left">
				<div class="inline-info">
					<h2 style="width: 100%;">{singleMovie.name || singleMovie.title}</h2>
					<p class="rating">
						<i class="fa-solid fa-star star-icon" />
						{Math.round(singleMovie.vote_average * 10) / 10}
					</p>
				</div>
				<div class="inline-info">
					<div class="duration">
						<p>{Math.round(singleMovie.runtime / 60)}h{singleMovie.runtime % 60}m</p>
					</div>
					<div class="release-date">
						<p>{singleMovie.release_date}</p>
					</div>
					<ul class="genres">
						{#each singleMovie.genres as genre}
							<li>{genre.name}</li>
						{/each}
					</ul>
				</div>
				<div class="intro-left-btn-group">
					<button type="button" class="btn btn-success play"
						><i class="fa-solid fa-play" /> Play</button
					>
					<button type="button" class="btn btn-outline-light btn-lg add-playlist"
						><i class="fa-solid fa-bookmark" /> Add Playlist</button
					>
				</div>
			</div>
			<div class="intro-right btn-group">
				<button type="button" class="btn btn-outline-light btn-lg download"
					><i class="fa-solid fa-download" /> Download</button
				>
				<button type="button" class="btn btn-outline-light btn-lg share"
					><i class="fa-solid fa-share-nodes" /> Share</button
				>
			</div>
		</div>
	</div>
	<div style="width: 90%; margin: 2em auto;">
		<div class="overview section">
			<h2>Overview</h2>
			<p>{singleMovie.overview}</p>
		</div>
		<div class="credits section">
			<h2>Credits</h2>
			<div class="cast">
				<h3>Cast</h3>
				<CardSlider cardType="person" peopleList={movieCast} perPage="7" pagination={false} />
			</div>
		</div>
		<div class="recommendation section">
			<h2>Recommend Movies</h2>
			<p>
				Since you have watched {singleMovie.name || singleMovie.title}, these are recommendations
			</p>
			<CardSlider cardType="wide" perPage="4.5" movieList={recommendedMovies} />
		</div>
		<div class="similar section">
			<h2>Similar Movies</h2>
			<p>Similar movies to {singleMovie.name || singleMovie.title}</p>
			<CardSlider cardType="wide" perPage="4.5" movieList={similarMovies} />
		</div>
	</div>
</div>
<div style="width: 90%; margin: auto;" />

<style>
	.section {
		margin: 1.5em 0;
	}
	.section p {
		margin-bottom: 1em;
	}
	.overview h2,
	.credits h2 {
		margin: 1.2em 0;
		font-size: 1.2em;
	}
	.cast h3 {
		margin-bottom: 1em;
		font-size: 1.2em;
	}
	.intro {
		height: 50em;
		background-repeat: no-repeat;
		position: relative;
		background-position: center center;
		background-attachment: fixed;
		background-size: cover;
	}
	.intro-container {
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		bottom: 5%;
		padding: 5%;
	}
	.intro-left {
		line-height: 4em;
	}
	.intro-left h2 {
		font-size: 4em;
	}
	.intro-left-btn-group {
		display: flex;
		gap: 20px;
	}
	.intro-right {
		display: flex;
		align-items: flex-end;
	}
	.intro-right button,
	.intro-left button {
		padding: 0.3em 0;
		width: 10em;
	}
	.intro-right i {
		padding-right: 10px;
	}
	.inline-info {
		display: flex;
		gap: 15px;
	}
	ul.genres {
		display: flex;
		gap: 10px;
	}
	.play {
		background-color: #157347;
	}
	.rating {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0.8em 1.2em;
		background-color: black;
		border-radius: 15px;
		align-self: center;
		justify-content: flex-start;
		line-height: 0.5em;
	}
</style>
