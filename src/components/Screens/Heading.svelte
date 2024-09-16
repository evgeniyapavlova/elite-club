<script>
	import { divideStringToThreeLines } from '../../lib/utils/divideStringToThreeLines';
	import InView from '../common/InView.svelte';
	export let heading;
</script>

<div class="screen-heading">
	<InView>
		{@html divideStringToThreeLines(heading)}
	</InView>
</div>

<style>
	.screen-heading {
		font-size: 58px;
		font-weight: 600;
		line-height: 72px;
		position: relative;
		z-index: 1;
	}

	@media screen and (max-width: 960px) {
		.screen-heading {
			font-size: 24px;
			line-height: 32px;
			margin: 56px 0 24px;
		}
		:global(.screen-heading br) {
			display: none;
		}
	}
</style>
