<script>
	import { base } from '$app/paths';
	import EliteTag from '../common/EliteTag.svelte';
	import TextLink from '../common/TextLink.svelte';
	import InView from '../common/InView.svelte';
	import Form from './Form.svelte';

	export let content, lang;
	const { terms } = content;
</script>

<section id="registration" data-lang={lang}>
	<div class="wrap">
		<div class="wrap-text">
			<div class="wrap-tag">
				<InView>
					<EliteTag />
				</InView>
			</div>
			<InView>
				<h2 class="registration-h2" data-lang={lang}>{@html content.title}</h2>
			</InView>
			<InView>
				<div class="welcome-text">{content.welcome}</div></InView
			>
		</div>
		<div class="wrap-form">
			<p class="form-head-text">
				{content.fill_form}
			</p>
			<Form
				labels={[content.contact, content.email]}
				placeholders={[content.email, content.email]}
				options={[content.email, content.telegram]}
				button={content.button}
			/>
			<p class="form-terms-text">
				{terms[0]}
				<TextLink href={base}>{terms[1]}</TextLink>
				{terms[2]}
				<TextLink href={base}>{terms[3]}</TextLink>
			</p>
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: 72px;
		line-height: 1.2;
	}
	h2[data-lang='sv'] {
		font-size: 70px;
	}
	h2[data-lang='ru'] {
		font-size: 50px;
	}
	h2[data-lang='fr'],
	h2[data-lang='it'] {
		font-size: 67px;
	}
	h2[data-lang='tr'],
	h2[data-lang='pt'],
	h2[data-lang='id'] {
		font-size: 62px;
	}
	section {
		background-color: var(--graphite-900);
		max-width: 1270px;
		width: calc(100vw - 96px);
		margin: 0 auto;
		border-radius: 40px;
		padding: 128px 48px;
	}
	.wrap {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 1015px;
	}
	.wrap-tag {
		margin: 16px 0 24px;
	}
	.welcome-text {
		margin-top: 146px;
		color: var(--graphite-300);
		font-size: 16px;
		line-height: 1.5;
	}
	.wrap-form {
		max-width: 408px;
		width: 50%;
	}
	.wrap-text {
		width: 50%;
	}
	p {
		color: var(--graphite-500);
	}
	.form-head-text {
		margin-bottom: 32px;
		font-size: 16px;
		line-height: 26px;
	}
	.form-terms-text {
		font-size: 14px;
		line-height: 20px;
		margin-top: 16px;
	}

	:global(.form-terms-text a) {
		font-weight: 600;
	}

	@media screen and (max-width: 1240px) {
		section {
			width: calc(100vw - 64px);
			border-radius: 24px;
			padding: 114px 48px;
		}
		h2.registration-h2 {
			font-size: 58px;
		}
		.welcome-text {
			margin-top: 96px;
		}
		h2[data-lang='tr'],
		h2[data-lang='id'],
		h2[data-lang='pt'] {
			font-size: 54px;
		}
		h2[data-lang='ru'] {
			font-size: 44px;
		}
	}
	@media screen and (max-width: 1050px) {
		h2.registration-h2 {
			font-size: 52px;
		}
		h2[data-lang='tr'],
		h2[data-lang='id'],
		h2[data-lang='pt'] {
			font-size: 46px;
		}
		h2[data-lang='ru'] {
			font-size: 38px;
		}
	}
	@media screen and (max-width: 960px) {
		.welcome-text {
			margin-top: 24px;
			margin-bottom: 40px;
		}
		section {
			width: calc(100vw - 48px);
			padding: 80px 24px;
		}
		h2.registration-h2 {
			font-size: 48px;
		}
		.wrap {
			display: block;
			max-width: 408px;
		}
		.wrap-form,
		.wrap-text {
			width: 100%;
		}
		h2[data-lang='ru'] {
			font-size: 38px;
		}
	}

	@media screen and (max-width: 600px) {
		h2.registration-h2 {
			font-size: 40px;
		}
		section {
			padding: 56px 24px;
		}
		h2[data-lang='ru'] {
			font-size: 30px;
		}
	}
	@media screen and (max-width: 450px) {
		h2[data-lang='tr'],
		h2[data-lang='id'],
		h2[data-lang='pt'] {
			font-size: 36px;
		}
	}
	@media screen and (max-width: 400px) {
		section {
			width: 100%;
			border-radius: 16px;
			padding: 32px 16px;
		}
		h2[data-lang='fr'],
		h2[data-lang='sv'],
		h2[data-lang='it'] {
			font-size: 36px;
		}
		h2[data-lang='tr'],
		h2[data-lang='id'],
		h2[data-lang='pt'] {
			font-size: 32px;
		}
		h2[data-lang='ru'] {
			font-size: 26px;
		}
	}
</style>
