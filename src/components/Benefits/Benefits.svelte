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

	let active = 0;

	export let content;

	const { items_services, items_education, items_experience, items_gifts } = content;

	const items = [
		{ id: 0, list: items_services },

		{ id: 1, list: items_education },
		{ id: 2, list: items_experience },
		{ id: 3, list: items_gifts }
	];

	const targetId = 'benefits-button';
	let isScrolledToElement = false;

	onMount(() => {
		const target = document.getElementById(targetId);

		const handleScroll = () => {
			const rect = target.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.bottom > windowHeight && rect.top < windowHeight * 1.7) {
				isScrolledToElement = true;
			} else {
				isScrolledToElement = false;
			}
			// if (rect.top >= 0 && rect.bottom < 0) {
			// 	isScrolledToElement = true;
			// } else {
			// 	isScrolledToElement = false;
			// }
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
				<BenefitsMenu bind:active />
			</div>

			<InView>
				{#each items.filter((_, index) => index === active) as { id, list }, index (active)}
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
					><span>Join the club</span></a
				>
			</div>
		</div>
	</SectionNoBgr>
</div>
<div class="benefits-menu benefits-menu-mobile" class:is-visible={isScrolledToElement}>
	<BenefitsMenuMobile bind:active />
</div>

<style>
	:global(.table-wrap ul) {
		padding-inline-start: 21px;
		list-style-type: square;
	}
	.benefits-bgr {
		background-repeat: no-repeat;
		background-position: 50% top;
	}

	.benefits-menu,
	.table {
		display: none;
	}
	@media screen and (max-width: 600px) {
		.benefits-bgr {
			background: none !important;
		}

		.table-mobile {
			display: block;
		}
		.benefits-menu-mobile {
			display: block;
			position: sticky;
			width: 100%;
			bottom: 24px;
			z-index: 2;
			left: -24px;
			transition:
				opacity 0.2s ease-out,
				height 0.4s ease-out,
				transform 1s ease;
			opacity: 0;
			transform: translateY(50px);
			height: 0;
		}
		.benefits-menu-mobile.is-visible {
			opacity: 1;
			transform: translateY(0);
			height: 63px;
		}
	}

	@media screen and (max-width: 400px) {
		.benefits-menu-mobile {
			left: -16px;
		}
	}
	@media screen and (min-width: 601px) {
		.benefits-menu-desktop {
			display: block;
		}
		.table-desktop {
			display: block;
		}
	}
	h3 {
		color: white;
		letter-spacing: -0.7px;
	}

	.benefits-wrap {
		text-align: center;
		color: var(--graphite-500);
		position: relative;
	}
	h3 {
		font-size: 58px;
		line-height: 1.24;
	}
	.icon-wrap {
		margin-bottom: 8px;
	}
	.button {
		width: auto;
	}
	.button-wrap {
		margin-top: 48px;
	}

	@media screen and (max-width: 600px) {
		.button-wrap {
			margin-top: 32px;
		}
		h3 {
			font-size: 40px;
			line-height: 48px;
			text-align: left;
			margin-bottom: 56px;
		}
		.icon-wrap {
			text-align: left;
		}
	}
</style>
