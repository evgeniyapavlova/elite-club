<script>
	import AllBlocks from '../../components/AllBlocks.svelte';
	import Head from '../../components/common/Head.svelte';
	const title = 'Bienvenido al Club Elite de IQ Option';
	const desc =
		'El nivel más alto de nuestro nuevo programa de fidelidad del que has sido seleccionado para formar parte.';
	const lang = 'es';
</script>

<Head {title} {lang} {desc} />
<AllBlocks {lang} />
