<script>
	export let href;
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
		left: 50%;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 50%;
		transition: width ease-out 0.2s;
		height: 1px;
		background-color: #533b1d;
	}
	a::before {
		right: 50%;
	}

	a:hover::after,
	a:hover::before {
		width: 0;
	}
</style>
