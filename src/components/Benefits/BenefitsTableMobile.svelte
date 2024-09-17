<script>
	export let items, checkmarks, thead;
</script>

<div class="table-benefits-mobile">
	<div class="thead">
		<h5>
			{thead[0].label}
		</h5>
		<div class="caption">
			{thead[0].caption}
		</div>
	</div>
	<div class="tbody">
		{#each items as item, index}
			{#if checkmarks[index].star}
				<div class="tbody-item">
					<div class="label">{item.label}</div>
					{#if item.caption}<div class="caption">{item.caption}</div>{/if}
				</div>
			{/if}
		{/each}
	</div>
	<div class="thead">
		<h5>
			{thead[1].label}
		</h5>
		<div class="caption">
			{thead[1].caption}
		</div>
	</div>
	<div class="tbody">
		{#each items as item, index}
			{#if checkmarks[index].legend}
				<div class="tbody-item">
					<div class="label">{item.label}</div>
					{#if item.caption}<div class="caption">{item.caption}</div>{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.table-benefits-mobile {
	}
	.tbody-item {
		padding: 16px 0;
	}
	.tbody-item:not(:last-child) {
		border-bottom: 1px solid #292726;
	}
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
	.caption {
		font-size: 14px;
	}
	.tbody {
		text-align: left;
	}
	.label {
		color: white;
		margin-bottom: 4px;
		font-size: 16px;
		line-height: 24px;
		font-weight: 600;
	}
	.caption {
		font-size: 14px;
		line-height: 24px;
	}
</style>
