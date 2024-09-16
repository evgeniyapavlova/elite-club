<script>
	import { onMount } from 'svelte';
	import Screens from './Screens/Screens.svelte';

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

{#if translation?.screens}
	<Screens content={translation.screens} />
{/if}
