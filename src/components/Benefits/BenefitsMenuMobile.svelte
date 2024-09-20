<script>
	import { icons } from './menuIcons';

	export let active, menuItems;

	function toggleActive(index) {
		active = index;
	}

	let isVisible = false;
</script>

<div class="benefits-menu-wrap">
	<div class="benefits-menu">
		{#each menuItems as item, index}
			<button class={index === active && 'active'} on:click={() => toggleActive(index)}>
				<div class="icon-wrap">
					<svelte:component this={icons[index]} />
				</div>
				<div class="text-wrap">{item}</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.text-wrap {
		font-size: 12px;
		line-height: 16px;
	}
	.benefits-menu-wrap {
		text-align: center;
		max-width: 100%;
	}
	.icon-wrap {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.benefits-menu {
		max-width: 100%;
		list-style-type: none;
		display: inline-flex;
		gap: 4px;
		background-color: var(--graphite-900);
		justify-content: center;
		color: var(--graphite-500);
		border-radius: 16px;
		padding: 0 8px;
		margin: 0 auto;
	}

	button {
		display: flex;
		border-radius: 12px;
		cursor: pointer;
		transition: background-color ease-out 0.2s;
		align-items: center;
		font-size: inherit;
		font-weight: 600;
		line-height: 24px;
		color: inherit;
		flex-direction: column;
		gap: 5px;
		padding: 10px 14px 8px 14px;
		width: 25%;
	}

	button.active {
		color: var(--accent-500);
	}
	:global(.benefits-menu svg path) {
		stroke: #8c877d;
		transition: stroke ease-out 0.2s;
	}
	:global(.benefits-menu button.active svg path, .benefits-menu button:hover svg path) {
		stroke: var(--accent-500);
	}
</style>
