<script>
	export let perPage;
	export let cardType;
	export let movieList;
	export let currentActiveMovie;
	import FilmCard from '../shared/FilmCard.svelte';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	import { onMount } from 'svelte';

	if (cardType === undefined || cardType === null) {
		cardType = 'long';
	}

	let splide; // Variable to hold the Splide instance

	// Initialize Splide when the component is mounted on the client-side
	onMount(() => {
		splide = new Splide('#splide', {
			rewind: true,
			gap: '1em',
			type: 'loop',
			perPage: perPage,
			perMove: 1,
			arrows: true,
			pagination: true,
			drag: 'free',
			snap: false
		});
		// Handle on slide change
		splide.on('active', () => {
			const currentActiveSlide = splide.index; // Get the index of the active slide
			currentActiveMovie = movieList[currentActiveSlide];
			dispatch('slideChange', currentActiveMovie);
		});
		splide.mount();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.0.9/dist/css/splide.min.css"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.0.9/dist/js/splide.min.js"
		defer
	></script>
</svelte:head>

<div>
	<div id="splide" class="splide max-w-full">
		<div class="splide__track">
			<ul class="splide__list">
				{#each movieList as movie}
					<li class="splide__slide">
						<FilmCard {movie} />
					</li>
				{/each}
			</ul>
		</div>

		<div class="splide__arrows">
			<button class="splide__arrow splide__arrow--prev">
				<i class="fa-solid fa-angle-left" />
			</button>
			<button class="splide__arrow splide__arrow--next">
				<i class="fa-solid fa-angle-right" />
			</button>
		</div>
	</div>
</div>
