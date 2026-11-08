<script>
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import './styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ScreenStack</title>
</svelte:head>

<nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
	<div class="container">
		<a class="navbar-brand" href="/">ScreenStack</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Navigation umschalten"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" class:active={page.url.pathname === '/'} href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={page.url.pathname.startsWith('/movies')} href="/movies">Movies</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>