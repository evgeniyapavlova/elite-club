<script>
	import { onMount } from 'svelte';
	import Intro from './Intro/Intro.svelte';
	import Intro2 from './Intro2/Intro2.svelte';
	import Screens from './Screens/Screens.svelte';
	import Benefits from './Benefits/Benefits.svelte';
	import Faq from './FAQ/FAQ.svelte';
	import introBgr from './Intro2/img/intro2-bgr.webp';

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

{#if translation?.intro}
	<Intro content={translation.intro} {lang} />
{/if}

<!-- <div class="intro2-bgr has-bgr" data-bgimage={introBgr}>
	{#if translation?.intro2}
		<Intro2 content={translation.intro2} />
	{/if}
	{#if translation?.screens}
		<Screens content={translation.screens} />
	{/if}
</div>

{#if translation?.benefits}
	<Benefits content={translation.benefits} />
{/if}

{#if translation?.faq}
	<Faq content={translation.faq} />
{/if} -->

<style>
	.intro2-bgr {
		background-repeat: no-repeat;
		background-position: right 70% top 0;
	}
</style>
