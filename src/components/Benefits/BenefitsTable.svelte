<script>
	import IconCheck from './svg/IconCheck.svelte';
	import IconClose from './svg/IconClose.svelte';
	export let items;
</script>

<table>
	<thead>
		<td></td>
		<td>
			<h5>Star</h5>
			By default
		</td>
		<td>
			<h5>Legend</h5>
			Profiled users
		</td>
	</thead>
	<tbody>
		{#each items as item}
			<tr>
				<td>
					<div class="text-wrap">
						<h5>
							{item.label}
						</h5>
						{#if item.caption}
							{item.caption}
						{/if}
					</div>
				</td>
				<td>
					{#if item.star}
						<IconCheck />
					{:else}
						<IconClose />
					{/if}
				</td>
				<td>
					{#if item.legend}
						<IconCheck />
					{:else}
						<IconClose />
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		color: var(--graphite-500);
		font-size: 16px;
		line-height: 1.6;
		width: 100%;
	}
	table tr td:first-child {
		text-align: left;
	}
	h5 {
		font-size: 20px;
		line-height: 1.4;
		color: var(--graphite-100);
	}

	tr td {
		border-top: 1px solid #292726;
	}

	td {
		padding: 24px 0;
	}

	table thead td:not(:first-child) {
		width: 128px;
	}

	.text-wrap {
		max-width: 380px;
	}
	.caption {
		margin-top: 4px;
	}
</style>
