<script>
	import { onMount } from 'svelte';
	// import Header from '../components/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';

	import './styles.css';

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('../lib/styles/fonts.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<div class="app">
	<!-- <Header /> -->
	<slot />
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
