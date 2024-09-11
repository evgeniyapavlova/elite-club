<script>
	import { fade } from 'svelte/transition';
	let isVisible = false;

	function handleIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				isVisible = true;
			}
		});
	}

	function observeElement(element) {
		const observer = new IntersectionObserver(handleIntersect, {
			root: null,
			threshold: 0.5
		});

		observer.observe(element);
	}
</script>

<div class="box" use:observeElement transition:fade={{ duration: 1000 }} class:hidden={!isVisible}>
	<slot />
</div>

<style>
	.hidden {
		opacity: 0;
	}
</style>
