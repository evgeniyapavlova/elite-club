<section>
	<slot />
</section>

<style>
	section {
		width: 100%;
		padding: 160px 56px;
		max-width: 950px;
		margin: 0 auto;
	}
	@media screen and (max-width: 1024px) {
		section {
			padding-top: 128px;
			padding-bottom: 128px;
		}
	}
	@media screen and (max-width: 480px) {
		section {
			padding: 100px 24px;
		}
	}

	@media screen and (max-width: 320px) {
		section {
			padding: 72px 16px;
		}
	}
</style>
