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
		padding: 96px 84px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h2 {
		font-size: 88px;
		line-height: 104px;
	}
	@media screen and (max-width: 1240px) {
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
			padding: 80px;
			max-width: 600px;
			min-height: auto;
		}
	}

	@media screen and (max-width: 400px) {
		section {
			padding: 64px 32px;
		}
	}
</style>
