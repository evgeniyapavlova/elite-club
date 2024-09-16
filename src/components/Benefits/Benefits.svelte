<script>
	import { fly, fade } from 'svelte/transition';
	import InView from '../common/InView.svelte';
	import IconEliteClub from './svg/IconEliteClub.svelte';
	import SectionNoBgr from '../common/SectionNoBgr.svelte';
	import BenefitsMenu from './BenefitsMenu.svelte';
	import BenefitsTable from './BenefitsTable.svelte';
	let active = 0;
	const items = [
		[
			{
				label: 'IQ Options Elite Status',
				star: true,
				legend: true
			},
			{
				label: 'Elite Account Manager',
				caption:
					'Personal manager to assist you with all things trading, and keep you informed about the benefits',
				star: false,
				legend: true
			},
			{
				label: 'Exclusive Services From the Best Professionals',
				caption: 'Welth, Tax advisory, Social Media and travel management',
				star: false,
				legend: true
			}
		],
		[
			{
				label: 'EDUCATION',
				star: true,
				legend: true
			},
			{
				label: 'EDUCATION',
				caption:
					'Personal manager to assist you with all things trading, and keep you informed about the benefits',
				star: false,
				legend: true
			}
		],
		[
			{
				label: 'EXPERIENCE',
				star: true,
				legend: true
			},
			{
				label: 'EXPERIENCE',
				caption: 'EXPERIENCE',
				star: false,
				legend: true
			}
		],
		[
			{
				label: 'GIFTS',
				star: true,
				legend: true
			},
			{
				label: 'GIFTS',
				caption: 'GIFTS',
				star: false,
				legend: true
			}
		]
	];
</script>

<SectionNoBgr>
	<div class="benefits-wrap">
		<div class="icon-wrap">
			<IconEliteClub />
		</div>
		<InView>
			<h3>
				Explore the benefits<br /> of being Elite
			</h3>
		</InView>

		<BenefitsMenu bind:active />

		<InView>
			{#each items.filter((_, index) => index === active) as item (active)}
				<div class="table-wrap" in:fly={{ y: 50, duration: 700 }}>
					<BenefitsTable items={item} />
				</div>
			{/each}
		</InView>

		<div class="button-wrap">
			<a href="#registration" alt="Join the club" class="button button-small">Join the club</a>
		</div>
	</div>
</SectionNoBgr>

<style>
	.benefits-wrap {
		text-align: center;
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
</style>
