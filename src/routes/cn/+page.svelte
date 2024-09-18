<script>
	import AllBlocks from '../../components/AllBlocks.svelte';
	import Head from '../../components/common/Head.svelte';

	const title = '欢迎来到 IQ Option 精英俱乐部';
	const desc = '您已被选为我们新忠诚度计划的最高级别的一份子。';

	const lang = 'cn';
</script>

<Head {title} {lang} {desc} />
<AllBlocks {lang} />
