<script>
	import meta_img from '$lib/images/meta__img__en.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const title = 'Chào mừng bạn đến với Elite Club của IQ Option';
	const desc =
		'Bạn được chọn trở thành thành viên ở cấp độ cao nhất của chương trình khách hàng thân thiết mới của chúng tôi.';
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

<AllBlocks lang="vn" />
