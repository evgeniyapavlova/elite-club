<script>
	import { isDesktop } from '$lib/stores/isDesktop';
	import InView from '../common/InView.svelte';
	import Header from '../Header/Header.svelte';
	import introBg from './img/intro-bg_1.webp';
	import introBgMobile from './img/intro-bg_mobile.webp';
	export let lang, content, isTranslationLoaded;
</script>

<section
	class="has-bgr"
	data-bgimage={$isDesktop ? introBg : introBgMobile}
	style="background-attachment:{$isDesktop
		? 'fixed'
		: 'scroll'};min-height: 100vh; background-repeat: no-repeat; background-position: center; background-size: cover; display: flex; flex-direction: column; background-color: rgba(251, 179, 90, 0.1);"
>
	<Header {lang} />
	<div class="content">
		<div class="text-content">
			<div class="h1-wrap">
				{#if content?.h1}
					<InView>
						<h1>
							{@html content?.h1}
						</h1>
					</InView>
				{:else}
					&nbsp;
				{/if}
			</div>
			<div class="h1_caption-wrap">
				{#if isTranslationLoaded}
					<InView><div class="h1_caption">{@html content?.h1_caption}</div></InView>
				{:else}&nbsp;
				{/if}
			</div>
			<div
				style="	display: flex; align-items: center; justify-content: flex-start; gap: 20px; min-height: 48px;"
			>
				{#if isTranslationLoaded}
					<a href="#registration" alt="Join the club" class="button button-small">
						<span>{content?.button}</span>
					</a>
					<div class="btn-caption">{content?.button_caption}</div>
				{:else}
					&nbsp;{/if}
			</div>
		</div>
	</div>
	{#if isTranslationLoaded}
		<div
			style="text-align: center;
		padding-bottom: 32px;
		color: var(--graphite-500);
		font-size: 14px;
		line-height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;"
		>
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.5 3.33334V16.6667M10.5 16.6667L15.5 11.6667M10.5 16.6667L5.5 11.6667"
					stroke="#8C877D"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			{content?.scroll_text}
		</div>{/if}
</section>

<style>
	svg {
		animation: bounce 2s infinite;
	}
	.btn-caption {
		font-size: 14px;
		line-height: 20px;
		color: var(--graphite-500);
	}
	.h1_caption {
		margin: 24px 0 40px;
		color: var(--graphite-400);
		font-size: 20px;
		line-height: 30px;
		max-width: 580px;
	}
	.content {
		max-width: 1366px;
		padding: 140px 156px;
		margin: 0 auto;
		flex-grow: 1;
		display: flex;
		align-items: center;
		width: 100%;
	}
	h1 {
		font-size: 72px;
		line-height: 88px;
	}
	.h1-wrap {
		min-height: 88px;
	}
	@media screen and (max-width: 960px) {
		section {
			min-height: auto !important;
		}
		.content {
			padding: 200px 32px;
		}
		h1 {
			font-size: 48px;
			line-height: 56px;
		}
		.h1-wrap {
			min-height: 56px;
		}
		.h1_caption {
			font-size: 17px;
			line-height: 26px;
			max-width: 100%;
		}
	}
	@media screen and (max-width: 600px) {
		.content {
			padding: 160px 32px;
		}
		.h1-wrap {
			min-height: 112px;
		}
	}
	@media screen and (max-width: 400px) {
		.content {
			padding: 73px 16px;
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-2px);
		}
		50% {
			transform: translateY(2px);
		}
	}
</style>
