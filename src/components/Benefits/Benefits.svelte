<script>
	import IconEliteClub from './svg/IconEliteClub.svelte';
	import SectionNoBgr from '../common/SectionNoBgr.svelte';
	import BenefitsMenu from './BenefitsMenu.svelte';
	import BenefitsTable from './BenefitsTable.svelte';
</script>

<SectionNoBgr>
	<div class="benefits-wrap">
		<div class="icon-wrap">
			<IconEliteClub />
		</div>
		<h3>
			Explore the benefits<br /> of being Elite
		</h3>

		<BenefitsMenu />

		<BenefitsTable />

		<div class="button-wrap">
			<a href="/" alt="Join the club" class="button button-small">Join the club</a>
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
