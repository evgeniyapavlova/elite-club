<script>
	import { onMount } from 'svelte';
	import { isDesktop } from '$lib/stores/isDesktop';

	import ImageWithCaption from './ImageWithCaption.svelte';

	import Heading from './Heading.svelte';
	export let captions, images, heading, index, withId, imagesMobile;

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./screen.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<section class="screen-slide" id={withId ? `screen-slide-${index}` : ''}>
	<Heading {heading} />
	<div class="screen-content">
		<ImageWithCaption image={$isDesktop ? images[0] : imagesMobile[0]} caption={captions[0]} />
		<ImageWithCaption
			isRight
			image={$isDesktop ? images[1] : imagesMobile[1]}
			caption={captions[1]}
		/>
	</div>
</section>
