<script>
	import { onMount } from 'svelte';
	import InView from '../common/InView.svelte';
	export let content;
	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./intro2.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<section class="intro-2">
	<InView>
		<h2>{content}</h2>
	</InView>
</section>
