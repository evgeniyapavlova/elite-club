<script>
	export let href, alt;
</script>

<a {href}><slot /></a>

<style>
	a {
		color: var(--graphite-500);
		text-decoration: none;
		display: inline-block;
		padding-bottom: 2px;
		position: relative;
	}

	a::after {
		left: 0;
	}

	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		transition: background-color ease-out 0.2s;
		height: 1px;
		background-color: rgba(251, 179, 90, 0.3);
	}

	a:hover::after {
		background-color: var(--accent-500);
	}

	a:active::after {
		background-color: var(--accent-700);
	}
</style>
