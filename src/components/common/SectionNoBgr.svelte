<script>
	export let bgr = '',
		id;
</script>

{#if bgr !== ''}
	<section class="has-bgr" data-bgimage={bgr} {id}>
		<slot />
	</section>
{:else}
	<section>
		<slot />
	</section>
{/if}

<style>
	section {
		width: 100%;
		padding: 0 56px;
		max-width: 950px;
		margin: 0 auto;
	}

	@media screen and (max-width: 600px) {
		section {
			padding: 0 24px;
		}
	}

	@media screen and (max-width: 400px) {
		section {
			padding: 0 16px;
		}
	}
</style>
