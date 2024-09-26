<script>
	import Arrow from './Arrow.svelte';
	import Dropdown from './Dropdown.svelte';
	export let selectValue,
		selectOptions,
		isPhone = false;

	let isOpen = false;

	function toggleDropdown(e) {
		e.preventDefault();
		isOpen = !isOpen;
	}

	function select(e, option) {
		e.preventDefault();
		selectValue = option.value;
		isOpen = false;
		// selectOption();
	}
</script>

<Dropdown bind:isOpen id="contact-dropdown">
	<svelte:fragment slot="button-content">
		{selectOptions.find(({ value }) => value === selectValue)?.label || ''}
		<Arrow />
	</svelte:fragment>
	<svelte:fragment slot="dropdown-content">
		{#each selectOptions as option}
			<button
				class:input-styled-phone-code={isPhone}
				class="input-styled input-styled-dropdown-item"
				class:selected={selectValue === option.value}
				on:click={(e) => select(e, option)}
			>
				{option.label}
			</button>
		{/each}
	</svelte:fragment>
</Dropdown>
