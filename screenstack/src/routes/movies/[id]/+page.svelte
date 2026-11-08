<script>
	let { data } = $props();
	let movie = $derived(data.movie);
</script>

<div class="container py-4">
	<a href="/movies">Back</a>
	{#if movie}
		<h1>{movie.title}</h1>
		<div class="row">
			<div class="col-md-3">
				<img src={movie.poster} alt={movie.title} class="img-fluid" />
			</div>
			<div class="col-md-9">
				<p>Jahr: {movie.year}</p>
				<p>Dauer: {movie.length}</p>
				<p>Cast:</p>
				<ul>
					{#each movie.actors as actor}
						<li>{actor}</li>
					{/each}
				</ul>
				<form method="POST" action="?/delete">
					<button class="btn btn-danger">Delete Movie</button>
				</form>
			</div>
		</div>
	{:else}
		<p>Film nicht gefunden.</p>
	{/if}
</div>