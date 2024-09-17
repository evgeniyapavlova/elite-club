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
		padding: 160px 56px;
		max-width: 950px;
		margin: 0 auto;
	}
	@media screen and (max-width: 1240px) {
		section {
			padding-top: 128px;
			padding-bottom: 128px;
		}
	}
	@media screen and (max-width: 600px) {
		section {
			padding: 100px 24px;
		}
	}

	@media screen and (max-width: 400px) {
		section {
			padding: 72px 16px;
		}
	}
</style>
