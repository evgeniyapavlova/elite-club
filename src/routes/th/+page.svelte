<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = 'ยินดีต้อนรับสู่ IQ Option Elite Club';
	const desc = 'คุณได้รับเลือกให้เป็นส่วนหนึ่งของโปรแกรมลอยัลตี้ใหม่ระดับสูงสุด';
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

<AllBlocks lang="th" />
