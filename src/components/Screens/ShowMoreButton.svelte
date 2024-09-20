<script>
	let isVisible = false;

	function handleClick() {
		const lastSlide = document.getElementById('screen-slide-2');

		const lastSlideClasses = lastSlide.classList;
		if (lastSlideClasses.contains('visible')) {
			lastSlideClasses.remove('visible');
			isVisible = false;
		} else {
			lastSlideClasses.add('visible');
			isVisible = true;
		}
	}
</script>

{#if !isVisible}
	<button on:click={handleClick}> +&nbsp;&nbsp;&nbsp;Show more </button>
{/if}

<style>
	button {
		font-size: 14px;
		color: var(--graphite-500);
		text-align: center;
		margin-top: 40px;
		display: none;
	}

	@media screen and (max-width: 960px) {
		button {
			display: block;
			margin: 40px auto;
		}
	}
	@media screen and (max-width: 480px) {
		button {
			padding-right: 24px;
		}
	}
</style>
