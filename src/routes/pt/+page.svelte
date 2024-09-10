<script>
	import meta_img from '$lib/images/meta__img__pt.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = 'PARABÉNS!';
	const desc = 'Você foi selecionado como vencedor entre todos os usuários!';
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

<AllBlocks lang="pt" />
