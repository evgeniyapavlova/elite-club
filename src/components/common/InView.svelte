<script>
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView;
</script>

<div
	class="wrapper"
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%', threshold: '0.5' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<div in:fade class="box {isInView ? 'visible' : 'hidden'}">
		<slot />
	</div>
</div>

<style>
	.box {
		opacity: 0;
		transition:
			opacity 1s ease,
			transform 1s ease;

		display: block;
	}
	.visible {
		opacity: 1;
		transform: translateX(0);
	}

	.hidden {
		opacity: 0;
		transform: translateX(-100px);
	}
</style>
