<script>
	import './css/form.css';
	import './css/phone-code.css';
	import { countryCode } from '../../lib/stores/countryCode';

	import Loader from './components/Loader.svelte';
	import Select from './components/Select.svelte';
	import ContactMethodSelect from './components/ContactMethodSelect.svelte';
	import EmailInput from './components/EmailInput.svelte';
	import TelegramInput from './components/TelegramInput.svelte';
	import { getPhoneCodeData } from './js/getPhoneCodeData';
	import { apiUrl } from './js/apiUrl';

	export let labels, options, button, updateSuccess;

	const contact_method_initial = 'email';
	let contact_method = contact_method_initial;
	let email = '';
	let tg = '';
	let phoneCodeData = {};
	let phoneNum = '';
	let loading = false;
	let isSubmitEnabled = false;

	let isValid = { email: false, phone: false };
	let isTouched = { email: false, phone: false };

	async function handleSubmit(event) {
		event.preventDefault();
		if (contact_method === 'email') {
			tg = '';
			contact_method = 'E-mail';
		} else {
			email = '';
			contact_method = 'Telegram';
		}

		loading = true;

		fetch(`${apiUrl}?contact_method=${contact_method}&email=${email}&tg=${tg}`, {
			method: 'POST',
			redirect: 'follow'
		})
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				loading = false;
				updateSuccess(true);

				isValid = { email: false, phone: false };
				isTouched = { email: false, phone: false };
				contact_method = contact_method_initial;
				email = '';
				tg = '';
				phoneCodeData = getPhoneCodeData($countryCode);
			})
			.catch((error) => {
				alert('Something went wrong, please try again.');
				loading = false;
			});
	}

	const contactMethodOptions = [
		{ value: 'email', label: options[0] },
		{ value: 'tg', label: options[1] }
	];

	$: phoneCodeData = getPhoneCodeData($countryCode);

	$: isSubmitEnabled =
		(contact_method === 'email' && email && isValid.email) ||
		(contact_method === 'tg' && tg && isValid.phone);

	$: tg = `+${phoneCodeData.phone} ${phoneNum}`;
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
		{:else}
			<TelegramInput
				bind:isTouched={isTouched.phone}
				bind:isValid={isValid.phone}
				bind:phoneCodeData
				bind:phoneNum
				label={labels.tg}
			/>
		{/if}

		<button disabled={!isSubmitEnabled} class="button" on:click={handleSubmit} type="submit"
			><span>{button}</span></button
		>
	</div>
</form>
