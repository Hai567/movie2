<script>
	export let perPage;
	export let cardType;
	export let movieList;
	export let peopleList;
	export let pagination = true;
	import '@splidejs/svelte-splide/css'; // Default theme
	let splideOption = {
		rewind: true,
		gap: '1em',
		type: 'loop',
		perPage: perPage,
		perMove: 1,
		arrows: true,
		pagination: pagination,
		drag: 'free',
		snap: false
	};
	import FilmCard from '../shared/FilmCard.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import FilmCardWide from './FilmCardWide.svelte';
	import PersonCard from './PersonCard.svelte';
</script>

<div>
	<Splide hasTrack={false} options={splideOption} class="max-w-full">
		<SplideTrack>
			{#if movieList}
				{#each movieList as movie}
					{#if cardType === 'long'}
						<SplideSlide><FilmCard {movie} /></SplideSlide>
					{:else if cardType === 'wide'}
						<SplideSlide><FilmCardWide {movie} /></SplideSlide>
					{/if}
				{/each}
			{:else if peopleList != undefined || peopleList != null}
				{#each peopleList as person}
					<SplideSlide><PersonCard {person} /></SplideSlide>
				{/each}
			{/if}
		</SplideTrack>

		<div class="splide__arrows">
			{#if cardType === 'wide'}
				<button style="top: 40%" class="splide__arrow splide__arrow--prev"
					><i class="fa-solid fa-angle-left" /></button
				>
				<button style="top: 40%" class="splide__arrow splide__arrow--next"
					><i class="fa-solid fa-angle-right" /></button
				>
			{:else}
				<button class="splide__arrow splide__arrow--prev"
					><i class="fa-solid fa-angle-left" /></button
				>
				<button class="splide__arrow splide__arrow--next"
					><i class="fa-solid fa-angle-right" /></button
				>
			{/if}
		</div>
	</Splide>
</div>
