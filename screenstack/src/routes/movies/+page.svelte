<script>
	import Movie from '#lib/components/Movie.svelte';
	let { data } = $props();
</script>

<div class="container py-4">
	<h1 class="mb-4">Movies</h1>
	<a href="/movies/create" class="btn btn-primary mb-3">Add New Movie</a>

	<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
		{#each data.movies as movie}
			<div class="col">
				<Movie {movie} />
			</div>
		{/each}
	</div>
</div>