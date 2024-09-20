<script>
	import { onMount } from 'svelte';
	import Intro from './Intro/Intro.svelte';
	import introBgr from './Intro2/img/intro2-bgr.webp';
	import Footer from './Footer/Footer.svelte';

	export let lang;

	let isTranslationLoading = true;
	let isTranslationLoaded = false;
	let translation = {};
	async function loadTranslations() {
		if (!isTranslationLoaded) {
			const module = await import(`../lib/translations/${lang}.js`);
			translation = module.default;
			isTranslationLoaded = true;
			isTranslationLoading = false;
		}
	}

	let Intro2Comp;
	async function loadIntro2Comp() {
		const module = await import('./Intro2/Intro2.svelte');
		Intro2Comp = module.default;
	}

	let ScreensComp;
	async function loadScreensComp() {
		const module = await import('./Screens/Screens2.svelte');
		ScreensComp = module.default;
	}

	let BenefitsComp;
	async function loadBenefitsComp() {
		const module = await import('./Benefits/Benefits.svelte');
		BenefitsComp = module.default;
	}

	let RegComp;
	async function loadRegComp() {
		const module = await import('./Registration/Registration.svelte');
		RegComp = module.default;
	}

	let FAQComp;
	async function loadFAQComp() {
		const module = await import('./FAQ/FAQ.svelte');
		FAQComp = module.default;
	}

	let FooterComp;
	async function loadFooterComp() {
		const module = await import('./Footer/Footer.svelte');
		FooterComp = module.default;
	}

	onMount(async () => {
		loadTranslations();
		loadIntro2Comp();
		loadScreensComp();
		loadBenefitsComp();
		loadRegComp();
		loadFAQComp();
		loadFooterComp();
	});
</script>

<Intro bind:isTranslationLoaded content={translation?.intro} {lang} />

<div class="intro2-bgr has-bgr" data-bgimage={introBgr}>
	<div class="divider"></div>

	{#if translation?.intro2}
		{#if Intro2Comp}
			<svelte:component this={Intro2Comp} content={translation.intro2} />
		{/if}
	{/if}

	<div class="divider"></div>

	{#if translation?.screens}
		{#if ScreensComp}
			<svelte:component this={ScreensComp} content={translation.screens} />
		{/if}
	{/if}
</div>

<div class="divider"></div>
{#if translation?.benefits}
	{#if BenefitsComp}
		<svelte:component this={BenefitsComp} content={translation.benefits} />
	{/if}
{/if}
<div class="divider"></div>

{#if translation?.registration}
	{#if RegComp}
		<svelte:component this={RegComp} content={translation.registration} {lang} />
	{/if}
{/if}

<div class="divider"></div>

{#if translation?.faq}
	{#if FAQComp}
		<svelte:component this={FAQComp} content={translation.faq} />
	{/if}
{/if}
<div class="divider"></div>

{#if translation?.footer}
	{#if FooterComp}
		<svelte:component this={FooterComp} content={translation.footer} />
	{/if}
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
