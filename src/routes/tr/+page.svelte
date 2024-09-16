<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = "IQ Option Elite Club'a hoş geldiniz";
	const desc = 'Parçası olmayı tercih ettiğiniz yeni sadakat programımızın en yüksek kademesi.';
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

<AllBlocks lang="tr" />
