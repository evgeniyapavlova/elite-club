<script>
	import './css/form.css';
	import './css/phone-code.css';
	import { countryCode } from '../../lib/stores/countryCode';

	import Loader from './components/Loader.svelte';
	import ContactMethodSelect from './components/ContactMethodSelect.svelte';
	import EmailInput from './components/EmailInput.svelte';
	import PhoneNumberInput from './components/PhoneNumberInput.svelte';
	import TgInput from './components/TgInput.svelte';
	import { getPhoneCodeData } from './js/getPhoneCodeData';
	import { apiUrl } from './js/apiUrl';
	import { isValidInitial, isTouchedInitial } from './js/initialValues';

	export let labels, options, button, updateSuccess;

	const contact_method_initial = 'email';
	let contact_method = contact_method_initial;
	let email = '';
	let tg = '';
	let phone = '';
	let phoneCodeData = {};
	let phoneNum = '';
	let contact_data = '';

	let loading = false;
	let isSubmitEnabled = false;

	let isValid = isValidInitial;
	let isTouched = isTouchedInitial;

	async function handleSubmit(event) {
		event.preventDefault();
		if (contact_method === 'email') contact_method = 'E-mail';
		else if (contact_method === 'tg') contact_method = 'Telegram';
		else contact_method = 'Phone number';

		loading = true;

		fetch(
			`${apiUrl}?contact_method=${contact_method}&contact_data=${encodeURIComponent(contact_data)}`,
			{
				method: 'POST',
				redirect: 'follow'
			}
		)
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				loading = false;
				updateSuccess(true);

				isValid = isValidInitial;
				isTouched = isTouchedInitial;
				contact_method = contact_method_initial;

				email = '';
				tg = '';
				phone = '';
				phoneCodeData = {};
				phoneNum = '';
				contact_data = '';

				phoneCodeData = getPhoneCodeData($countryCode);
			})
			.catch((error) => {
				alert('Something went wrong, please try again.');
				loading = false;
			});
	}

	const contactMethodOptions = [
		{ value: 'email', label: options[0] },
		{ value: 'tg', label: options[1] },
		{ value: 'phone', label: 'Phone number' }
	];

	$: phoneCodeData = getPhoneCodeData($countryCode);

	$: isSubmitEnabled =
		contact_data &&
		((contact_method === 'email' && isValid.email) ||
			(contact_method === 'tg' && isValid.tg) ||
			(contact_method === 'phone' && isValid.phone));

	$: phone = `+${phoneCodeData.phone} ${phoneNum}`;

	$: {
		if (contact_method === 'email') {
			contact_data = email;
		} else if (contact_method === 'tg') {
			contact_data = tg;
		} else {
			contact_data = phone;
		}
	}
</script>

<form class:loading>
	{#if loading}
		<Loader />
	{/if}
	<div class="fields-wrap">
		<div class="select-wrap">
			<ContactMethodSelect
				bind:selectValue={contact_method}
				label={labels.contact}
				selectOptions={contactMethodOptions}
			/>
		</div>

		{#if contact_method === 'email'}
			<EmailInput
				label={labels.email}
				bind:value={email}
				bind:isValid={isValid.email}
				placeholder={options[0]}
				bind:isTouched={isTouched.email}
			/>
		{:else if contact_method === 'tg'}
			<TgInput
				label={labels.tg}
				bind:value={tg}
				placeholder={options[1]}
				bind:isValid={isValid.tg}
				bind:isTouched={isTouched.tg}
			/>
		{:else}
			<PhoneNumberInput
				bind:isTouched={isTouched.phone}
				bind:isValid={isValid.phone}
				bind:phoneCodeData
				bind:phoneNum
				label={labels.phone}
			/>
		{/if}

		<button disabled={!isSubmitEnabled} class="button" on:click={handleSubmit} type="submit">
			<span>{button}</span>
		</button>
	</div>
</form>
