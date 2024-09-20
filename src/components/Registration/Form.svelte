<script>
	import { slide } from 'svelte/transition';
	import { emailValidator } from './emailValidator';
	import Arrow from './Arrow.svelte';
	import Loader from './Loader.svelte';
	export let labels, options, button, updateSuccess;

	let isOpen = false;

	const contact_method_initial = 'email';
	let contact_method = contact_method_initial;
	let email = '';
	let tg = '';
	let loading = false;
	let isEmailValid = true;

	const selectOptions = [
		{ value: 'email', label: options[0] },
		{ value: 'telegram', label: options[1] }
	];

	function selectOption(e, option) {
		e.preventDefault();
		contact_method = option.value;
		isOpen = false;
		email = '';
		tg = '';
		isEmailValid = true;
	}
	function toggleDropdown(e) {
		e.preventDefault();
		isOpen = !isOpen;
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (contact_method === 'telegram' || (contact_method === 'email' && emailValidator(email))) {
			loading = true;

			var requestOptions = {
				method: 'POST',
				redirect: 'follow'
			};

			fetch(
				`https://script.google.com/macros/s/AKfycbxwJaKnVUeVl3hOaPdptoXCk-hUVqO3h0GQfWOcMtloRVAY1REMVV85ERs2CBvY8U9QYg/exec?contact_method=${contact_method}&email=${email}&tg=${tg}`,
				requestOptions
			)
				.then((response) => response.text())
				.then((result) => {
					console.log(result);
					loading = false;
					updateSuccess(true);

					isEmailValid = true;
					contact_method = contact_method_initial;
					email = '';
					tg = '';
				})
				.catch((error) => {
					alert('Something went wrong, please try again.');
					loading = false;
				});
		} else {
			isEmailValid = false;
		}
	}
</script>

<form class:loading>
	{#if loading}
		<Loader />
	{/if}
	<div class="fields-wrap">
		<div class="field-wrap">
			<div class="label">{labels[0]}</div>
			<button
				class:is-menu-open={isOpen}
				class="input-styled select-styled"
				on:click={toggleDropdown}
			>
				{selectOptions.find(({ value }) => value === contact_method).label}
				<Arrow />
			</button>
			{#if isOpen}
				<div class="dropdown-menu" transition:slide={{ duration: 200 }} id="contact_method">
					{#each selectOptions.filter((el) => el.value !== contact_method) as option}
						<button class="input-styled" on:click={(e) => selectOption(e, option)}>
							{option.label}
						</button>
					{/each}
				</div>{/if}
		</div>
		<div class="field-wrap" class:field-error={!isEmailValid}>
			<div class="label">
				{selectOptions.find((option) => option.value === contact_method).label}
			</div>
			{#if contact_method === 'email'}
				<input
					id="email"
					type="email"
					name="email"
					placeholder={options[0]}
					class="input-styled"
					bind:value={email}
					on:input={() => {
						isEmailValid = true;
					}}
				/>
			{:else}
				<input id="tg" name="tg" placeholder={options[1]} class="input-styled" bind:value={tg} />
			{/if}
		</div>

		<button
			disabled={!(email || tg) || loading || !isEmailValid}
			class="button"
			on:click={handleSubmit}
			type="submit"><span>{button}</span></button
		>
	</div>
</form>

<style>
	form.loading .fields-wrap {
		opacity: 0.5;
	}
	form.loading {
		pointer-events: none;
		position: relative;
	}
	.field-error .input-styled {
		border: 1px solid red;
	}
	.field-error .label {
		color: red;
	}
	button:disabled {
		color: var(--graphite-800);
		background-color: white;
		background-image: linear-gradient(90deg, var(--graphite-500), var(--graphite-300));
		pointer-events: none;
	}
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
	.label {
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
