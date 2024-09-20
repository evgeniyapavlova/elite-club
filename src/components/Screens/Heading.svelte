<script>
	import { onMount } from 'svelte';
	import { divideStringToThreeLines } from '../../lib/utils/divideStringToThreeLines';
	import InView from '../common/InView.svelte';
	export let heading;

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./screen-heading.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<div class="screen-heading">
	<InView>
		{@html divideStringToThreeLines(heading)}
	</InView>
</div>
