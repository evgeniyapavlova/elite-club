<script>
	import H2 from '../common/H2.svelte';
	import EliteTag from '../common/EliteTag.svelte';
	import TextLink from '../common/TextLink.svelte';
	import InView from '../common/InView.svelte';
	import Form from './Form.svelte';

	export let content;
</script>

<section id="registration">
	<div class="wrap">
		<div class="wrap-text">
			<div class="wrap-tag">
				<InView>
					<EliteTag />
				</InView>
			</div>
			<InView>
				<H2>{@html content.title}</H2></InView
			>
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
				options={[content.email, content.telegram]}
				button={content.button}
			/>
			<p class="form-terms-text">
				By continuing you accept our <TextLink href="/">Terms & Conditions</TextLink> and
				<TextLink href="/">Privacy policy</TextLink>
			</p>
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--graphite-900);
		max-width: 1270px;
		margin: 0 auto;
		border-radius: 40px;
		padding: 128px;
		width: 100%;
	}
	.wrap {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
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
</style>
