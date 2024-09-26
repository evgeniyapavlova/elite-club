<script>
	import { emailValidator } from '../js/validation';
	export let label, value, isValid, placeholder, isTouched;
</script>

<div class="field-wrap" class:field-error={!isValid && isTouched}>
	<div class="label">
		{label}
	</div>
	<input
		id="email"
		type="email"
		name="email"
		class="input-styled"
		bind:value
		on:input={(e) => {
			isTouched = true;
			isValid = emailValidator(value);
		}}
		{placeholder}
	/>
</div>
