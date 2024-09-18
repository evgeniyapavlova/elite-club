<script>
	import { base } from '$app/paths';
	export let lang, title, desc;

	const img_fb = `${base}/images/meta/${lang}/meta_fb.jpg`;
	const img_tw = `${base}/images/meta/${lang}/meta_tw.jpg`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={img_fb} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={img_tw} />
</svelte:head>
