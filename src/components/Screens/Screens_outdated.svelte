<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import './splide-custom.css';
	import Screen from './Screen.svelte';
	import ShowMoreButton from './ShowMoreButton.svelte';
	import images from './images';
	export let content;

	let active = 0;
	let splide1;

	const items = content.items;
</script>

<section id="screens-wrap">
	<div class="screens-wrap">
		<Splide
			bind:this={splide1}
			aria-label="Benefits"
			options={{
				drag: true,
				focus: 'center',
				autoWidth: false,
				perMove: 1,
				gap: '12px',
				arrows: false,
				pagination: true,
				speed: 1000,
				wheel: true,
				waitForTransition: true,
				releaseWheel: true,
				// wheelSleep: 1000,
				// direction: 'ltr',
				breakpoints: {
					960: {
						destroy: true
					}
				}
			}}
			on:moved={(e) => {
				active = e.detail.index;
			}}
		>
			{#each items as { captions, heading }, index}
				<SplideSlide>
					<Screen {index} images={images[index]} {captions} {heading} />
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<ShowMoreButton />
</section>

<style>
	section {
		max-width: 1366px;
		width: 100%;
		margin: 0 auto;
		padding: 48px;
		position: relative;
		overflow: hidden;
		height: 100vh;
	}

	@media screen and (max-width: 1240px) {
		section {
			padding: 0 32px;
		}
		.screens-wrap {
			border-radius: 40px;
			overflow: hidden;
		}
	}

	@media screen and (max-width: 960px) {
		section {
			padding: 0 24px;
			height: auto;
		}
		.screens-wrap {
			border-radius: 0;
		}
		:global(#screen-slide-2) {
			display: none;
			opacity: 0;
			transition:
				opacity 1s ease,
				transform 1s ease;
		}
		:global(#screen-slide-2.visible) {
			display: block;
			opacity: 1;
		}
	}
</style>
