<script>
	import H2 from '../common/H2.svelte';
	import Accordion from '../common/Accordion.svelte';
	import SectionNoBgr from '../common/SectionNoBgr.svelte';
	import InView from '../common/InView.svelte';

	export let content;

	const items = content.items;
</script>

<SectionNoBgr>
	<InView><H2>{content.heading}</H2></InView>

	<div class="faq-content">
		{#each items as item, idx}
			<Accordion {item} />
		{/each}
	</div>
</SectionNoBgr>

<style>
	.faq-content {
		margin-top: 36px;
	}
</style>
