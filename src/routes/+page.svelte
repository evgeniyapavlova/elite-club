<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import Faq from '../components/FAQ/FAQ.svelte';
	const title = 'Welcome to IQ Option Elite Club';
	const desc = 'The highest tier of our new loyalty program you’ve been selected to be a part.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<Faq />
