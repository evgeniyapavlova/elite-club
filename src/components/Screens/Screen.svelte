<script>
	import { onMount } from 'svelte';

	import ImageWithCaption from './ImageWithCaption.svelte';

	import Heading from './Heading.svelte';
	export let captions, images, heading, index, withId;

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
		<ImageWithCaption image={images[0]} caption={captions[0]} />
		<ImageWithCaption isRight image={images[1]} caption={captions[1]} />
	</div>
</section>
