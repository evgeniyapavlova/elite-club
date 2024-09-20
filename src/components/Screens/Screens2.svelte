<script>
	import { Mousewheel, Pagination } from 'swiper';
	import { onMount } from 'svelte';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import Screen from './Screen.svelte';
	import ShowMoreButton from './ShowMoreButton.svelte';

	import images from './images';
	import imagesMobile from './images_mobile';

	export let content;

	const items = content.items;

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('swiper/css/bundle');
			await import('./screens.css');
			await import('./swiper-custom.css');

			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<section id="screens-wrap">
	<div class="screens-wrap">
		<div class="screens-desktop">
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
				grabCursor
				speed={850}
				pagination={{
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="${className}">${index + 1} </span>`;
					}
				}}
			>
				{#each items as { captions, heading }, index}
					<SwiperSlide>
						<Screen
							{index}
							imagesMobile={imagesMobile[index]}
							images={images[index]}
							{captions}
							{heading}
						/>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
		<div class="screens-mobile">
			{#each items as { captions, heading }, index}
				<Screen
					withId
					{index}
					imagesMobile={imagesMobile[index]}
					images={images[index]}
					{captions}
					{heading}
				/>
			{/each}
		</div>
	</div>

	<ShowMoreButton />
</section>
