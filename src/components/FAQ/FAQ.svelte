<script>
	import H2 from '../common/H2.svelte';
	import Accordion from '../common/Accordion.svelte';
	import SectionNoBgr from '../common/SectionNoBgr.svelte';

	const items = [
		{
			q: 'What is IQ Option Elite about?',
			a: 'IQ Option Elite is an exclusive loyalty program designed to reward our most valued members with exceptional benefits and personalized experiences. As one of our most valued clients, your exceptional engagement and loyalty have earned you a place in IQ Option Elite.'
		},
		{
			q: 'What is IQ Option Elite about?',
			a: 'IQ Option Elite is an exclusive loyalty program designed to reward our most valued members with exceptional benefits and personalized experiences. As one of our most valued clients, your exceptional engagement and loyalty have earned you a place in IQ Option Elite.'
		},
		{
			q: 'What is IQ Option Elite about?',
			a: 'IQ Option Elite is an exclusive loyalty program designed to reward our most valued members with exceptional benefits and personalized experiences. As one of our most valued clients, your exceptional engagement and loyalty have earned you a place in IQ Option Elite.'
		},
		{
			q: 'What is IQ Option Elite about?',
			a: 'IQ Option Elite is an exclusive loyalty program designed to reward our most valued members with exceptional benefits and personalized experiences. As one of our most valued clients, your exceptional engagement and loyalty have earned you a place in IQ Option Elite.'
		}
	];
</script>

<SectionNoBgr>
	<H2>Any questions left?</H2>

	<div class="faq-content">
		{#each items as item, idx}
			{#if idx === 0}
				<Accordion open {item} />
			{:else}
				<Accordion {item} />
			{/if}
		{/each}
	</div>
</SectionNoBgr>

<style>
	.faq-content {
		margin-top: 56px;
	}
</style>
