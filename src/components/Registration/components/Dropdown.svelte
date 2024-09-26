<script>
	import { onMount } from 'svelte';
	export let isOpen = false,
		id;

	const wrapId = `${id}-toggle`;
	const menuId = `${id}`;

	function toggleDropdown(e) {
		e.preventDefault();
		isOpen = !isOpen;
	}

	onMount(() => {
		function handleClick(event) {
			if (isOpen) {
				const targetElement = event.target;
				const wrapElement = document.getElementById(wrapId);
				const menuElement = document.getElementById(menuId);

				if (!wrapElement?.contains(targetElement) && !menuElement?.contains(targetElement)) {
					isOpen = false;
				}
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div id={wrapId}>
	<button class:is-menu-open={isOpen} class="input-styled select-styled" on:click={toggleDropdown}>
		<slot name="button-content" />
	</button>
	{#if isOpen}
		<div id={menuId} class="dropdown-menu">
			<slot name="dropdown-content" />
		</div>
	{/if}
</div>
