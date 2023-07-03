<script>
	import { onMount, onDestroy } from 'svelte';
	import { sortGenresOfMultipleFilms } from '../helpers/sortGenre.mjs';
	export let carouselData;
	// This 3 lines check if the data should be rendered to avoid leaking memory
	let shouldBeRendered = false; //
	onMount(() => {
		shouldBeRendered = true;
		console.log(123);
	}); //
	onDestroy(() => (shouldBeRendered = false)); //

	//
</script>

{#if shouldBeRendered}
	{#await sortGenresOfMultipleFilms(carouselData) then carouselData}
		<div
			id="popularCarousel"
			class="carousel slide"
			data-bs-ride="carousel"
			data-bs-interval="3000"
			touch="true"
		>
			<div class="carousel-indicators custom-carousel-indicator-container">
				<button
					type="button"
					data-bs-target="#popularCarousel"
					data-bs-slide-to="0"
					class="active custom-indicator-btn"
				/>
				{#each carouselData as film, i}
					{#if carouselData[i + 1]}
						<button
							class="custom-indicator-btn"
							type="button"
							data-bs-target="#popularCarousel"
							data-bs-slide-to={i + 1}
						/>
					{/if}
				{/each}
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="https://image.tmdb.org/t/p/original{carouselData[0].backdrop_path}"
						class="d-block w-100"
						alt={carouselData[0].name || carouselData[0].title}
					/>
					<div class="fade-black-bottom" />
					<div class="fade-black-top" style="height: 30%;" />
					<div class="carousel-caption d-none d-md-block">
						<div class="carousel-info-wrapper">
							<p class="film-type">{carouselData[0].type}</p>
						</div>
						<div class="carousel-info-wrapper">
							<h1 class="title">{carouselData[0].name || carouselData[0].title}</h1>
						</div>
						<div class="carousel-info-wrapper">
							<ul class="inline-info">
								<li>{carouselData[0].release_date}</li>
								{#each carouselData[0].genres as genre}
									<li>{genre.name}</li>
								{/each}
							</ul>
						</div>
						<div class="carousel-info-wrapper">
							<p class="overview">{carouselData[0].overview}</p>
						</div>
						<div class="carousel-info-wrapper btn-group">
							<button type="button" class="btn btn-outline-light"
								><i class="fa-solid fa-play" />Watch</button
							>
							<button type="button" class="btn btn-outline-light"
								><i class="fa-solid fa-bookmark" />Watchlist</button
							>
						</div>
					</div>
				</div>
				{#each carouselData as film, i}
					{#if carouselData[i + 1]}
						<div class="carousel-item">
							<img
								src="https://image.tmdb.org/t/p/original{carouselData[i + 1].backdrop_path}"
								class="d-block w-100"
								alt={carouselData[i + 1].name || carouselData[i + 1].title}
							/>
							<div class="fade-black-bottom" />
							<div class="fade-black-top" style="height: 30%;" />
							<div class="carousel-caption d-none d-md-block">
								<div class="carousel-info-wrapper">
									<p class="film-type">{carouselData[i + 1].type}</p>
								</div>
								<div class="carousel-info-wrapper">
									<h1 class="title">{carouselData[i + 1].name || carouselData[i + 1].title}</h1>
								</div>
								<div class="carousel-info-wrapper">
									<ul class="inline-info">
										<li>{carouselData[i + 1].release_date}</li>
										{#each carouselData[i + 1].genres as genre}
											<li>{genre.name}</li>
										{/each}
									</ul>
								</div>
								<div class="carousel-info-wrapper">
									<p class="overview">{carouselData[i + 1].overview}</p>
								</div>
								<div class="carousel-info-wrapper btn-group">
									<button type="button" class="btn btn-outline-light"
										><i class="fa-solid fa-play" />Watch</button
									>
									<button type="button" class="btn btn-outline-light"
										><i class="fa-solid fa-bookmark" />Watchlist</button
									>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<h1 style="color: white !important; font-size: 3em !important;">Hello</h1>
	{/await}
{/if}

<style>
	.carousel-item {
		transition: 0.6s;
	}
	.custom-carousel-indicator-container {
		margin: 0 3% 0 0;
		justify-content: right;
		bottom: 3%;
	}
	.custom-indicator-btn {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-right: 5px;
		margin-left: 5px;
	}
	.carousel-caption {
		max-width: 50% !important;
		text-align: left;
		top: 40%;
		left: 6%;
	}
	.carousel-info-wrapper {
		padding: 0.5em;
	}
	ul.inline-info {
		display: flex;
		gap: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	li {
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.film-type {
		display: inline-block;
		padding: 0.75em 1.75em;
		background-color: black;
		border-radius: 30px;
		text-transform: capitalize;
		margin-bottom: 1em;
	}
	.btn-group button {
		width: 10em;
	}
	.btn-group button i {
		padding-right: 1em;
	}
	@media all and (max-width: 1026px) {
		p.overview {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2; /* number of lines to show */
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.carousel-caption {
			top: 30%;
		}
	}
</style>
