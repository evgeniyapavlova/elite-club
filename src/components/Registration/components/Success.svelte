<script>
	import { onMount } from 'svelte';
	export let content, updateSuccess;

	let isStyleLoaded = false;
	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('../css/success.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<div class="form-success">
	<button
		class="btn-back"
		on:click={() => {
			updateSuccess(false);
		}}
	>
		<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17 7H1M1 7L7 13M1 7L7 1"
				stroke="#FBB35A"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		{content[0]}
	</button>
	<h3>
		{content[1]}
	</h3>
	<div class="caption">
		{content[2]}
	</div>

	<!-- <a href="" class="button"><span>{content[3]}</span></a> -->
</div>
