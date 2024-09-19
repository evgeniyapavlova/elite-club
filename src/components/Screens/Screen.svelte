<script>
	import '@splidejs/svelte-splide/css';

	import ImageWithCaption from './ImageWithCaption.svelte';

	import Heading from './Heading.svelte';
	export let captions, images, heading, index, withId;
</script>

<section class="screen-slide" id={withId ? `screen-slide-${index}` : ''}>
	<Heading {heading} />
	<div class="screen-content">
		<ImageWithCaption image={images[0]} caption={captions[0]} />
		<ImageWithCaption isRight image={images[1]} caption={captions[1]} />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 96px);
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.screen-content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 1240px) {
		section {
			height: calc(100vh - 64px);
		}
	}

	@media screen and (max-width: 960px) {
		.screen-content {
			position: relative;
			display: flex;
			align-items: stretch;
			justify-content: space-between;
			gap: 16px;
		}

		section {
			display: block;
			text-align: left;
			height: auto;
			padding: 0;
		}
	}

	@media screen and (max-width: 480px) {
		.screen-content {
			display: flex;
			gap: 16px;

			overflow: auto;
			flex-flow: row nowrap;
			overflow-y: hidden;
			scroll-snap-type: x mandatory;
		}
	}
</style>
