<script>
	import { onMount } from 'svelte';
	import InView from '../common/InView.svelte';
	export let image,
		caption,
		isRight = false;

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./image.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<div class="screen-image image image-{isRight ? 'right' : 'left'}  has-bgr" data-bgimage={image}>
	<div class="caption caption-{isRight ? 'right' : 'left'}">
		<InView>{caption}</InView>
	</div>
</div>
