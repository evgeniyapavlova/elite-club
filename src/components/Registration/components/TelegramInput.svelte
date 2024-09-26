<script>
	import Dropdown from './Dropdown.svelte';
	import Arrow from './Arrow.svelte';
	import { countryCodeOptions } from '../js/countryCodeOptions';
	import Select from './Select.svelte';
	import { phoneValidator } from '../js/validation';

	let isOpen;
	let searchTerm = '';

	export let isValid, phoneCodeData, phoneNum, label, isTouched;

	function select(e, option) {
		e.preventDefault();
		phoneCodeData = option;
		isOpen = false;
	}

	$: filteredOptions = countryCodeOptions.filter((option) =>
		option.country.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function handleKeyPress(event) {
		if (isOpen) {
			if (event.key.length === 1) {
				searchTerm += event.key;
			} else if (event.key === 'Backspace') {
				searchTerm = searchTerm.slice(0, -1);
			}
		}
	}

	$: {
		if (!isOpen) searchTerm = '';
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tg-input-wrap select-wrap" on:keydown={handleKeyPress}>
	<Dropdown bind:isOpen id="tg-dropdown">
		<svelte:fragment slot="button-content">
			<div class="iti__flag iti__{phoneCodeData.value}" />
			+{phoneCodeData.phone}
			<Arrow />
		</svelte:fragment>

		<svelte:fragment slot="dropdown-content">
			{#if filteredOptions.length > 0}
				{#each filteredOptions as option}
					<button
						class="input-styled-phone-code input-styled input-styled-dropdown-item"
						class:selected={phoneCodeData.value === option.value}
						on:click={(e) => select(e, option)}
					>
						<div class="iti__flag-wrap">
							<div class="iti__flag iti__{option.value}"></div>
						</div>
						{option.country}
						+{option.phone}
					</button>
				{/each}
			{:else}
				<button
					class="input-styled-phone-code input-styled input-styled-dropdown-item"
					on:click={(e) => e.preventDefault()}
				>
					No results found
				</button>
			{/if}
		</svelte:fragment>
	</Dropdown>

	<div class="field-wrap" class:field-error={!isValid && isTouched}>
		<div class="label">
			{label}
		</div>
		<input
			id="phone"
			type="tel"
			name="phone"
			class="input-styled"
			placeholder={label}
			bind:value={phoneNum}
			on:input={() => {
				isTouched = true;
				isValid = phoneValidator(phoneNum);
			}}
		/>
	</div>
</div>
