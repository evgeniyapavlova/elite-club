<h2><slot /></h2>

<style>
	h2 {
		font-size: 72px;
		line-height: 1.2;
		color: var(--graphite-100);
		background: -webkit-linear-gradient(-45deg, #fff, #ffbe70);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: 960px) {
		h2 {
			font-size: 48px;
			line-height: 56px;
		}
	}
</style>
