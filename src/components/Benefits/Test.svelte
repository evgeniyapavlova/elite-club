<script>
	import { fade, fly } from 'svelte/transition';

	let active = 1;

	const menuItems = [
		{ id: 1, title: 'Пункт 1', content: ['Строка 1', 'Строка 2', 'Строка 3'] },
		{ id: 2, title: 'Пункт 2', content: ['Строка A', 'Строка B', 'Строка C'] },
		{ id: 3, title: 'Пункт 3', content: ['Строка X', 'Строка Y', 'Строка Z'] },
		{ id: 4, title: 'Пункт 4', content: ['Строка α', 'Строка β', 'Строка γ'] }
	];

	function selectMenuItem(id) {
		active = id;
	}
</script>

<div class="menu">
	{#each menuItems as item}
		<button class:active={item.id === active} on:click={() => selectMenuItem(item.id)}>
			{item.title}
		</button>
	{/each}
</div>

{#each menuItems.filter((_, index) => index === active - 1) as item (item.id)}
	<div class="table-wrap" in:fly={{ x: 200, duration: 400 }}>
		<table class="table">
			<tbody>
				{#each item.content as row}
					<tr>
						<td>{row}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/each}

<style>
	.menu {
		display: flex;
		gap: 10px;
	}

	.menu button {
		padding: 10px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		cursor: pointer;
	}

	.menu button.active {
		background-color: #ddd;
		font-weight: bold;
	}

	.table {
		margin-top: 20px;
		border-collapse: collapse;
		width: 100%;
	}

	.table tr {
		border-bottom: 1px solid #ccc;
	}

	.table td {
		padding: 10px;
	}
</style>
