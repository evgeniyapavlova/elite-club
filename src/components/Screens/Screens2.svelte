<script>
	import { Mousewheel, Pagination } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css/bundle';

	import Screen from './Screen.svelte';
	import ShowMoreButton from './ShowMoreButton.svelte';
	import './swiper-custom.css';
	import images from './images';
	export let content;

	const items = content.items;
</script>

<!--
			on:slideChange={() => console.log('slide change')}
			on:swiper={(e) => console.log(e.detail[0])}
			-->
<section id="screens-wrap">
	<div class="screens-wrap">
		<Swiper
			modules={[Mousewheel, Pagination]}
			direction="horizontal"
			spaceBetween={30}
			slidesPerView={1}
			mousewheel={{
				releaseOnEdges: true,
				thresholdTime: 600,
				forceToAxis: true,
				thresholdDelta: 10
			}}
			pagination={{
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className}">${index + 1} </span>`;
				}
			}}
		>
			{#each items as { captions, heading }, index}
				<SwiperSlide>
					<Screen {index} images={images[index]} {captions} {heading} />
				</SwiperSlide>
			{/each}
		</Swiper>
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
