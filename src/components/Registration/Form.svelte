<script>
	import { slide } from 'svelte/transition';
	import Arrow from './Arrow.svelte';
	export let labels, placeholders, options, button;

	let isOpen = false;

	let selectedOption = 'email';

	const selectOptions = [
		{ value: 'email', label: options[0] },
		{ value: 'telegram', label: options[1] }
	];

	function selectOption(option) {
		selectedOption = option.value;
		isOpen = false;
	}
	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<form action="">
	<div class="field-wrap">
		<label for="contact_method">{labels[0]}</label>
		<button
			class:is-menu-open={isOpen}
			class="input-styled select-styled"
			on:click={toggleDropdown}
		>
			{selectOptions.find(({ value }) => value === selectedOption).label}
			<Arrow />
		</button>
		{#if isOpen}
			<div class="dropdown-menu" transition:slide={{ duration: 200 }}>
				{#each selectOptions.filter((el) => el.value !== selectedOption) as option}
					<button class="input-styled" on:click={() => selectOption(option)}>
						{option.label}
					</button>
				{/each}
			</div>{/if}
	</div>
	<div class="field-wrap">
		<label for="email"
			>{selectOptions.find((option) => option.value === selectedOption).label}</label
		>
		<input
			type="email"
			name="email"
			placeholder={selectedOption === 'telegram' ? '@' : options[0]}
			class="input-styled"
		/>
	</div>

	<button class="button" type="submit"><span>{button}</span></button>
</form>

<style>
	:global(.select-styled.is-menu-open svg) {
		transform: rotate(180deg);
	}
	:global(.select-styled svg) {
		position: absolute;
		top: 30px;
		right: 20px;
		transition: transform 0.2s ease-out;
	}
	.dropdown-menu button:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
	.dropdown-menu button {
		display: block;
		width: 100%;
	}
	form {
		width: 100%;
	}
	.input-styled {
		width: 100%;
		outline: none;
		border: none;
		padding: 30px 16px 12px;
		border-radius: 12px;
		margin-bottom: 12px;
		font-size: 16px;
		color: #313236;
		cursor: pointer;
		background-color: white;
		transition: border-radius 0.2s ease-out;
		text-align: left;
	}
	.dropdown-menu .input-styled {
		padding: 12px 16px;
		margin-bottom: 0;
		border-radius: 0;
	}
	.field-wrap {
		position: relative;
	}
	label {
		position: absolute;
		left: 16px;
		top: 12px;
		font-size: 12px;
		font-family: var(--suisse-font);
		font-weight: 400;
		color: #73726c;
	}
	button[type='submit'] {
		margin-top: 12px;
		width: 100%;
	}

	button.is-menu-open {
		border-radius: 12px 12px 0 0;
	}
	.dropdown-menu {
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		border: 1px solid #ccc;
		background-color: #fff;
		max-height: 200px;
		overflow-y: auto;
		z-index: 1;
		border-radius: 0 0 12px 12px;
	}
</style>
