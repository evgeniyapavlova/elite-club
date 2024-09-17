<script>
	import InView from '../common/InView.svelte';
	export let content;
</script>

<section>
	<InView>
		<h2>{content}</h2>
	</InView>
</section>

<style>
	section {
		max-width: 1100px;
		padding: 256px 84px;
		margin: 0 auto;
	}
	h2 {
		background: var(--text-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 88px;
		line-height: 104px;
	}
	@media screen and (max-width: 1240px) {
		section {
			padding-top: 224px;
			padding-bottom: 224px;
		}
		h2 {
			font-size: 72px;
			line-height: 88px;
		}
	}
	@media screen and (max-width: 960px) {
		h2 {
			font-size: 40px;
			line-height: 48px;
		}
		section {
			padding: 208px 80px;
			max-width: 600px;
		}
	}
	@media screen and (max-width: 600px) {
		section {
			padding: 184px 56px;
		}
	}
	@media screen and (max-width: 400px) {
		section {
			padding: 136px 32px;
		}
	}
</style>
