<script>
	import { onMount } from 'svelte';
	import TextLink from '../common/TextLink.svelte';
	import { termsLinks } from '../../lib/utils/constants';

	export let content;
	const year = new Date().getFullYear();

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./footer.css');
			isStyleLoaded = true;
		}
	}

	onMount(() => {
		loadStyle();
	});
</script>

<footer>
	<div class="footer-links">
		<TextLink href={termsLinks.terms} alt="Terms & Conditions">{content.terms}</TextLink>
		<TextLink href={termsLinks.privacy} alt="Privacy policy">{content.privacy}</TextLink>
		<TextLink href={termsLinks.cookies} alt="Cookies policy">{content.cookies}</TextLink>
	</div>

	<div class="footer-info">
		{#each content.text as txt}
			{@html txt} <br /><br />
		{/each}
	</div>

	<div class="footer-copyright">
		<span>© IQ Option</span>
		<span>{year}</span>
	</div>
</footer>
