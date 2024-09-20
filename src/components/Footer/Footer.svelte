<script>
	import TextLink from '../common/TextLink.svelte';
	import { termsLinks } from '../../lib/utils/constants';

	export let content;
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-links">
		<TextLink href={termsLinks.terms} alt="Terms & Conditions">{content.terms}</TextLink>
		<TextLink href={termsLinks.privacy} alt="Privacy policy">{content.privacy}</TextLink>
		<TextLink href={termsLinks.cookies} alt="Cookies policy">{content.cookies}</TextLink>
	</div>

	<div class="footer-info">
		{content.text[0]} <br /> <br />
		{content.text[1]}
	</div>

	<div class="footer-copyright">
		<span>© IQ Option</span>
		<span>{year}</span>
	</div>
</footer>

<style>
	footer {
		font-family: var(--suisse-font);
		font-weight: 400;
		color: var(--graphite-500);
		padding-top: 96px;
		padding-bottom: 40px;
		line-height: 1.6;
		font-size: 14px;
		max-width: 1360px;
		margin: 0 auto;
		padding: 96px 80px 40px;
	}

	.footer-info {
		margin: 40px 0;
	}

	.footer-copyright {
		display: flex;
		justify-content: space-between;
	}
	:global(.footer-links a) {
		margin-right: 32px;
	}

	@media screen and (max-width: 1240px) {
		footer {
			padding-left: 56px;
			padding-right: 56px;
			padding-top: 0;
		}
	}

	@media screen and (max-width: 600px) {
		footer {
			padding-left: 24px;
			padding-right: 24px;
		}
		.footer-links {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		:global(.footer-links a) {
			margin-right: 0;
			margin-bottom: 32px;
		}
		.footer-info {
			margin-top: 8px;
		}
	}

	@media screen and (max-width: 400px) {
		footer {
			padding-left: 16px;
			padding-right: 16px;
		}
	}
</style>
