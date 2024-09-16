<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = '欢迎来到 IQ Option 精英俱乐部';
	const desc = '您已被选为我们新忠诚度计划的最高级别的一份子。';
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

<AllBlocks lang="cn" />
