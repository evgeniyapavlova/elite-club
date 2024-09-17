<script>
	import { base } from '$app/paths';
	import TextLink from '../common/TextLink.svelte';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-links">
		<TextLink href={base} alt="Terms & Conditions">Terms & Conditions</TextLink>
		<TextLink href={base} alt="Privacy policy">Privacy policy</TextLink>
		<TextLink href={base} alt="Cookies policy">Cookies policy</TextLink>
	</div>

	<div class="footer-info">
		All of the information on this website is protected by copyright and is legally owned by IQ
		Option as its intellectual property (hereinafter - Intellectual Property). You may not copy,
		link, publish, upload to external resources, transmit, distribute or reproduce by any means or
		in any form any portion of this website, including any text, images, audio and video materials
		or any other Intellectual Property without prior written consent of Quadcode. <br /> <br />
		Certain names, logos and signs featured on this website are registered trademarks. IQ Option logo
		is a registered trademark in the European Union, Russian Federation, Hong Kong and many other countries.
		The fact that IQ Option has not included any product, feature, service name or logo to the list of
		its Intellectual Property does not waive any intellectual property rights that Quadcode or its affiliates,
		partners and (or) licensees have established in any such product, feature, service name or logo,
		all of which intellectual property rights are expressly reserved. <br /> <br />
		Quadcode trademarks, service marks, trade names, corporate identity are important company's corporate
		assets and Quadcode requires that they be used properly. In order to preserve its reputation and
		protect its trademarks and other Intellectual Property, Quadcode diligently guards such objects against
		any violation.
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
		max-width: 1200px;
		margin: 0 auto;
		padding: 96px 80px 40px;
	}

	.footer-info {
		margin: 32px 0;
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
			margin-bottom: 8px;
		}
	}

	@media screen and (max-width: 400px) {
		footer {
			padding-left: 16px;
			padding-right: 16px;
		}
	}
</style>
