<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = 'IQ Option एलीट क्लब में आपका स्वागत है';
	const desc = 'आपको हमारे नए लॉयल्टी कार्यक्रम के उच्चतम स्तर का हिस्सा बनने के लिए चुना गया है।';
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

<AllBlocks lang="hi" />
