<script>
	import CheckIcon from './CheckIcon.svelte';
	export let items, checkmarks, thead;
</script>

<table>
	<thead>
		<td></td>
		{#each thead as thead_item}
			<td>
				<h5>{thead_item.label}</h5>
				{thead_item.caption}
			</td>
		{/each}
	</thead>
	<tbody>
		{#each items as item, index}
			<tr>
				<td>
					<div class="text-wrap">
						<h5>{item.label}</h5>
						{#if item.caption}{item.caption}{/if}
					</div>
				</td>
				<td><CheckIcon isChecked={checkmarks[index].star} /></td>
				<td><CheckIcon isChecked={checkmarks[index].legend} /></td>
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
		margin-bottom: 4px;
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
</style>
