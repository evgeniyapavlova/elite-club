<script>
	import CheckIcon from './CheckIcon.svelte';
	export let items, checkmarks, thead;
</script>

<table>
	<thead>
		<td></td>
		{#each thead as thead_item}
			<td>
				<div class="h5">{thead_item.label}</div>
				{thead_item.caption}
			</td>
		{/each}
	</thead>
	<tbody>
		{#each items as item, index}
			<tr>
				<td>
					<div class="text-wrap">
						<div class="h5">{item.label}</div>

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
				</td>
				<td><CheckIcon isChecked={checkmarks[index].star} /></td>
				<td><CheckIcon isChecked={checkmarks[index].legend} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.caption {
		margin-top: 4px;
	}
	table {
		color: var(--graphite-500);
		font-size: 16px;
		line-height: 1.6;
		width: 100%;
		border-collapse: collapse;
	}
	table tr td:first-child {
		text-align: left;
	}
	.h5 {
		font-size: 20px;
		line-height: 1.4;
		color: var(--graphite-100);
	}

	tr td {
		border-top: 1px solid #292726;
	}

	td {
		padding: 22px 0 20px;
	}

	table thead td:not(:first-child) {
		width: 128px;
	}

	.text-wrap {
		max-width: 380px;
	}
</style>
