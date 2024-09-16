<script>
	import { InView } from 'svelte-inview';

	export let dataBgimage = '';

	let divElement;

	const setBackgroundImage = () => {
		if (divElement) {
			divElement.style.backgroundImage = `url(${dataBgimage})`;
		}
	};
</script>

<InView on:enter={setBackgroundImage} threshold={0.1}>
	<div bind:this={divElement} data-bgimage={dataBgimage} class="lazy-load-bg"></div>
</InView>
