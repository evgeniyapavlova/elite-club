<script>
	import IconServices from './svg/IconServices.svelte';
	import IconEducation from './svg/IconEducation.svelte';
	import IconExperience from './svg/IconExperience.svelte';
	import IconGifts from './svg/IconGifts.svelte';

	const icons = [IconServices, IconEducation, IconExperience, IconGifts];

	const items = ['Services', 'Education', 'Experience', 'Gifts'];

	export let active;

	function toggleActive(index) {
		active = index;
	}
</script>

<div class="benefits-menu-wrap">
	<ul class="benefits-menu">
		{#each items as item, index}
			<li class={index === active && 'active'} on:click={() => toggleActive(index)}>
				<div class="icon-wrap">
					<svelte:component this={icons[index]} />
				</div>
				{item}
			</li>
		{/each}
	</ul>
</div>

<style>
	.benefits-menu-wrap {
		text-align: center;
	}
	.icon-wrap {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.benefits-menu {
		margin: 64px auto 56px;
		list-style-type: none;
		display: inline-flex;
		gap: 4px;
		padding: 8px;
		background-color: var(--graphite-900);
		justify-content: center;
		color: var(--graphite-500);
		font-weight: 600;
		border-radius: 16px;
	}

	li {
		display: flex;
		gap: 13px;
		padding: 10px 12px;
		border-radius: 12px;
		cursor: pointer;
		transition: background-color ease-out 0.2s;
	}

	li:hover {
		background-color: var(--graphite-800);
	}
	li.active {
		background-color: var(--graphite-800);
		color: var(--accent-500);
	}
	:global(.benefits-menu svg path) {
		stroke: #8c877d;
	}
	:global(.benefits-menu li.active svg path) {
		stroke: var(--accent-500);
	}
</style>
