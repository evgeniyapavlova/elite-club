<script>
	import { onMount } from 'svelte';
	import Intro2 from './Intro2/Intro2.svelte';
	import Screens from './Screens/Screens.svelte';
	import Benefits from './Benefits/Benefits.svelte';
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

{#if translation?.intro2}
	<Intro2 content={translation.intro2} />
{/if}
<!-- {#if translation?.screens}
	<Screens content={translation.screens} />
{/if}

{#if translation?.benefits}
	<Benefits content={translation.benefits} />
{/if}

{#if translation?.faq}
	<Faq content={translation.faq} />
{/if} -->
