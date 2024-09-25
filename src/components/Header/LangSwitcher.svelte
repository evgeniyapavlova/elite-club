<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { locales } from './locales';
	import { flags } from './flags';
	import ArrowImg from './img/arrow.svg';

	export let lang;
	let isExpanded = false;

	const currentLocaleObj = locales.find(({ code }) => code === lang);

	onMount(() => {
		function handleClick(event) {
			const targetElement = event.target;
			const wrapElement = document.getElementById('wrap-lang-switch');
			const menuElement = document.getElementById('menu-lang-switch');

			if (!wrapElement.contains(targetElement) && !menuElement.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="wrap" id="wrap-lang-switch">
	<button
		class="button-locale"
		on:click={() => (isExpanded = !isExpanded)}
		class:is-expanded={isExpanded}
	>
		<img src={flags[lang]} alt="{lang.toUpperCase()} flag" />
		{currentLocaleObj.label}
		<img class="arrow" src={ArrowImg} alt="Toggle dropdown visibility" />
	</button>

	{#if isExpanded}
		<menu id="menu-lang-switch" transition:fade>
			<div class="menu-inner">
				{#each locales as locale}
					<a class="button-locale" href="{base}/{locale.code}">
						<img src={flags[locale.code]} alt="{locale.code.toUpperCase()} flag" />
						{locale.label}
					</a>
				{/each}
			</div>
		</menu>
	{/if}
</div>

<style>
	menu {
		background: rgba(0, 0, 0, 0.15);
		cursor: pointer;
		position: absolute;
		top: 48px;
		font-weight: 600;
		margin: 0;
		padding: 0;
		width: 100%;
		border-radius: 10px;
		right: 0;
		z-index: 1001;
		padding: 8px;
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(6px);
		text-align: left;
		width: 320px;
	}
	.menu-inner {
		display: flex;
		flex-wrap: wrap;
		gap: 2px;
	}

	menu .button-locale {
		width: 150px;
	}

	.button-locale {
		color: white;
		font-size: 16px;
		font-weight: 600;
		display: inline-flex;
		gap: 8px;
		padding: 10px 16px;
		transition: background-color ease-out 0.3s;
		border-radius: 10px;
		cursor: pointer;
		align-items: center;
		justify-content: flex-start;
		text-align: left;
		text-decoration: none;
	}

	.button-locale:hover,
	.button-locale.is-expanded {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.arrow {
		transition: rotate 0.5s ease-out;
	}

	.button-locale.is-expanded .arrow {
		rotate: 180deg;
	}
	.wrap {
		position: relative;
	}
</style>
