<script>
	import IconCheck from './svg/IconCheck.svelte';
	import IconClose from './svg/IconClose.svelte';

	export let isChecked;
</script>

<div class="icon-wrap">
	{#if isChecked}
		<IconCheck />
	{:else}
		<IconClose />
	{/if}
</div>

<style>
	.icon-wrap {
		height: 26px;
		height: 26px;
		display: flex;
		align-items: center;
		justify-self: center;
		margin: 0 auto;
	}
</style>
