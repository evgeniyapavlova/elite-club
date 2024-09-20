<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import SectionNoBgr from '../common/SectionNoBgr.svelte';
	import InView from '../common/InView.svelte';
	import IconEliteClub from './svg/IconEliteClub.svelte';
	import BenefitsMenu from './BenefitsMenu.svelte';
	import BenefitsTable from './BenefitsTable.svelte';
	import BenefitsTableMobile from './BenefitsTableMobile.svelte';
	import { checkmarks } from './checkmarks';
	import BenefitsMenuMobile from './BenefitsMenuMobile.svelte';
	import benefitsBgr from './img/benefits-bgr.webp';

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./css/benefits.css');
			isStyleLoaded = true;
		}
	}

	let active = 0;

	export let content;

	const { items_services, items_education, items_experience, items_gifts, menuItems, button } =
		content;

	const items = [
		{ id: 0, list: items_services },

		{ id: 1, list: items_education },
		{ id: 2, list: items_experience },
		{ id: 3, list: items_gifts }
	];

	const targetId = 'benefits-button';
	let isScrolledToElement = false;

	onMount(() => {
		loadStyle();

		const target = document.getElementById(targetId);

		const handleScroll = () => {
			const rect = target.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.bottom > windowHeight && rect.top < windowHeight * 1.7) {
				isScrolledToElement = true;
			} else {
				isScrolledToElement = false;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="benefits-bgr has-bgr" data-bgimage={benefitsBgr}>
	<SectionNoBgr id="benefits">
		<div class="benefits-wrap">
			<div class="icon-wrap">
				<IconEliteClub />
			</div>

			<InView><h3>{@html content.heading}</h3></InView>

			<div class="benefits-menu benefits-menu-desktop">
				<BenefitsMenu {menuItems} bind:active />
			</div>

			<InView>
				{#each items.filter((_, index) => index === active) as { id, list } (active)}
					<div class="table-wrap" in:fly={{ y: 50, duration: 700 }}>
						<div class="table-desktop table">
							<BenefitsTable checkmarks={checkmarks[id]} items={list} thead={content.thead} />
						</div>

						<div class="table-mobile table">
							<BenefitsTableMobile checkmarks={checkmarks[id]} items={list} thead={content.thead} />
						</div>
					</div>
				{/each}
			</InView>

			<div class="button-wrap" id="benefits-button">
				<a href="#registration" alt="Join the club" class="button button-small"
					><span>{button}</span></a
				>
			</div>
		</div>
	</SectionNoBgr>
</div>
<div class="benefits-menu benefits-menu-mobile" class:is-visible={isScrolledToElement}>
	<BenefitsMenuMobile bind:active />
</div>
