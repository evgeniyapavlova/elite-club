<script>
	import Select from './Select.svelte';
	export let selectValue, label, selectOptions;
</script>

<div class="field-wrap">
	<div class="label">{label}</div>
	<Select {selectOptions} bind:selectValue />
</div>
