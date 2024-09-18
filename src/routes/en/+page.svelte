<script>
	import AllBlocks from '../../components/AllBlocks.svelte';
	import Head from '../../components/common/Head.svelte';

	const title = 'Welcome to IQ Option Elite Club';
	const desc = 'The highest tier of our new loyalty program you’ve been selected to be a part.';

	const lang = 'en';
</script>

<Head {title} {lang} {desc} />
<AllBlocks {lang} />
