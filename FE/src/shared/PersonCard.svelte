<script>
	export let person;
</script>

<div class="person-card">
	<div class="person-img-container">
		<img
			src="https://image.tmdb.org/t/p/original{person.profile_path}"
			alt={person.name}
			class="person-img"
		/>
	</div>
	<div class="person-info">
		<h4><span>{person.name}</span></h4>
		<span><p>{person.character}</p></span>
	</div>
</div>

<style>
	h4 {
		font-weight: 700;
		font-size: 1.1em;
	}
	.person-img-container {
		min-width: 4em;
		max-width: 5em;
	}
	.person-img-container img {
		height: auto;
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1/ 1;
		border-radius: 50%;
	}
	.person-card {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
