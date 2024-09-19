<script>
	import Logo from '../common/Logo.svelte';
	import LangSwitcher from './LangSwitcher.svelte';
	import IconEliteClub from '../Benefits/svg/IconEliteClub.svelte';

	export let lang;
</script>

<header>
	<Logo />
	<div class="elite-club-icon">
		<IconEliteClub />
	</div>
	<div class="lang-switcher-wrap">
		<LangSwitcher {lang} />
	</div>
</header>

<style>
	.elite-club-icon {
		display: none;
	}
	@media screen and (min-width: 961px) {
		.elite-club-icon {
			display: block;
			position: absolute;
			left: calc(50% - 20px);
			top: calc(50% - 20px);
		}
		:global(.elite-club-icon svg) {
			width: 40px;
			height: 40px;
		}
	}
	header {
		max-width: 1366px;
		padding: 24px 48px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		position: relative;
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
