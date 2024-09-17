<script>
	import Logo from '../common/Logo.svelte';
	import LangSwitcher from './LangSwitcher.svelte';

	export let lang;
</script>

<header>
	<Logo />
	<div class="lang-switcher-wrap">
		<LangSwitcher {lang} />
	</div>
</header>

<style>
	header {
		max-width: 1366px;
		padding: 24px 48px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	@media screen and (max-width: 960px) {
		header {
			padding: 22px 32px;
		}
		:global(header svg) {
			height: 20px;
			width: 138px;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			padding: 22px 24px;
		}
	}

	@media screen and (max-width: 400px) {
		header {
			padding: 22px 16px;
		}
	}
</style>
