<script>
	import { onMount } from 'svelte';
	import Screens from './Screens/Screens.svelte';
	import Faq from './FAQ/FAQ.svelte';

	export let lang;

	let isTranslationLoaded = false;
	let translation = {};
	let isMobile = false;

	async function loadTranslations() {
		if (!isTranslationLoaded) {
			const module = await import(`../lib/translations/${lang}.js`);
			translation = module.default;
			isTranslationLoaded = true;
		}
	}

	onMount(() => {
		loadTranslations();
		if (window.innerWidth <= '480') {
			isMobile = true;
		}
	});
</script>

<!-- {#if translation?.screens}
	<Screens content={translation.screens} />
{/if} -->

{#if translation?.faq}
	<Faq content={translation.faq} />
{/if}
