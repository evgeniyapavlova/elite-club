<script>
	export let item;
</script>

<div class="tbody-item">
	<div class="label">{item.label}</div>
	{#if item.caption}
		<div class="caption">
			{#if typeof item.caption === 'string'}
				{item.caption}
			{:else}
				<ul>
					{#each item.caption as cap}
						<li>{cap}</li>
					{/each}
				</ul>
			{/if}
		</div>{/if}
</div>

<style>
	.tbody-item {
		padding: 16px 0;
	}
	.tbody-item:not(:last-child) {
		border-bottom: 1px solid #292726;
	}
	.label {
		color: white;
		margin-bottom: 4px;
		font-size: 16px;
		line-height: 24px;
		font-weight: 600;
	}
</style>
