<script>
	import IconCheck from './svg/IconCheck.svelte';
	import IconClose from './svg/IconClose.svelte';

	export let isChecked;
</script>

{#if isChecked}
	<IconCheck />
{:else}
	<IconClose />
{/if}
