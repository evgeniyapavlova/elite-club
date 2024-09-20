<script>
	import { onMount } from 'svelte';
	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./show-more-button.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
	let isVisible = false;

	function handleClick() {
		const lastSlide = document.getElementById('screen-slide-2');

		const lastSlideClasses = lastSlide.classList;
		if (lastSlideClasses.contains('visible')) {
			lastSlideClasses.remove('visible');
			isVisible = false;
		} else {
			lastSlideClasses.add('visible');
			isVisible = true;
		}
	}
</script>

{#if !isVisible}
	<button class="show-more-button" on:click={handleClick}> +&nbsp;&nbsp;&nbsp;Show more </button>
{/if}
