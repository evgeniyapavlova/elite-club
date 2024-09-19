<script>
	import { onMount } from 'svelte';
	import Intro from './Intro/Intro.svelte';
	import Intro2 from './Intro2/Intro2.svelte';
	import Screens from './Screens/Screens.svelte';
	import Benefits from './Benefits/Benefits.svelte';
	import Faq from './FAQ/FAQ.svelte';
	import introBgr from './Intro2/img/intro2-bgr.webp';
	import Registration from './Registration/Registration.svelte';
	import Footer from './Footer/Footer.svelte';

	export let lang;

	let isTranslationLoaded = false;
	let translation = {};
	let isMobile = false;
	let isTranslationLoading = true;

	async function loadTranslations() {
		if (!isTranslationLoaded) {
			const module = await import(`../lib/translations/${lang}.js`);
			translation = module.default;
			isTranslationLoaded = true;
			isTranslationLoading = false;
		}
	}

	onMount(() => {
		loadTranslations();
		if (window.innerWidth <= '480') {
			isMobile = true;
		}
	});
</script>

<Intro bind:isTranslationLoaded content={translation?.intro} {lang} />

<div class="intro2-bgr has-bgr" data-bgimage={introBgr}>
	<div class="divider"></div>
	{#if translation?.intro2}
		<Intro2 content={translation.intro2} />
	{/if}
	<div class="divider"></div>
	{#if translation?.screens}
		<Screens content={translation.screens} />
	{/if}
</div>

<div class="divider"></div>
{#if translation?.benefits}
	<Benefits content={translation.benefits} />
{/if}
<div class="divider"></div>

{#if translation?.registration}
	<Registration content={translation.registration} {lang} />
{/if}

<div class="divider"></div>

{#if translation?.faq}
	<Faq content={translation.faq} />
{/if}
<div class="divider"></div>

{#if translation?.footer}
	<Footer content={translation.footer} />
{/if}

<style>
	.intro2-bgr {
		background-repeat: no-repeat;
		background-position: right 70% top 0;
	}
	.divider {
		width: 100%;
		height: 160px;
	}
	@media screen and (max-width: 1240px) {
		.divider {
			height: 128px;
		}
	}
	@media screen and (max-width: 600px) {
		.divider {
			height: 104px;
		}
	}
	@media screen and (max-width: 400px) {
		.divider {
			height: 72px;
		}
	}
</style>
