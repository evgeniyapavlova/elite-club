<script>
	import { telegramUsernameValidator } from '../js/validation';
	export let label, value, isValid, placeholder, isTouched;
</script>

<div class="field-wrap" class:field-error={!isValid && isTouched}>
	<div class="label">
		{label}
	</div>
	<input
		id="tg"
		type="text"
		name="tg"
		class="input-styled"
		bind:value
		on:input={(e) => {
			isTouched = true;
			isValid = telegramUsernameValidator(value);
		}}
		{placeholder}
	/>
</div>
