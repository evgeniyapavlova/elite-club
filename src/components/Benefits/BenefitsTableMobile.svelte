<script>
	import TbodyItem from './TbodyItem.svelte';
	export let items, checkmarks, thead;
</script>

<div class="table-benefits-mobile">
	<div class="thead">
		<h5>{thead[0].label}</h5>
		<div class="caption">{thead[0].caption}</div>
	</div>
	<div class="tbody">
		{#each items as item, index}
			{#if checkmarks[index].star}
				<TbodyItem {item} />
			{/if}
		{/each}
	</div>
	<div class="thead">
		<h5>{thead[1].label}</h5>
		<div class="caption">{thead[1].caption}</div>
	</div>
	<div class="tbody">
		{#each items as item, index}
			{#if checkmarks[index].legend}
				<TbodyItem {item} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.thead {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 32px 0 16px;
	}
	h5 {
		font-size: 24px;
		line-height: 1.1;
		color: var(--accent-500);
		font-weight: 500;
	}
	.tbody {
		text-align: left;
	}

	.caption {
		font-size: 14px;
		line-height: 24px;
	}
</style>
