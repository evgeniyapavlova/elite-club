<script>
	import { onMount } from 'svelte';

	export let content;

	const link = 'https://iqoption.com/en/terms-and-conditions/cookie-policy';

	let cookies_accepted = false;
	const _storageKey = 'cookie_usage_accepted';

	onMount(() => {
		cookies_accepted = Boolean(localStorage.getItem(_storageKey));
	});

	const acceptCookies = () => {
		localStorage.setItem(_storageKey, '1');
		cookies_accepted = true;
	};
</script>

{#if !cookies_accepted}
	<section class="cookies" id="cookies-block">
		<div class="cookies-content">
			{content.text}
			<a href={link} target="_blank" aria-label="Open new page with information about Cookies">
				{content.moreInfo}
			</a>
		</div>
		<button class="cookies-close-btn" on:click={acceptCookies}>
			<svg
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1L9 9"
					stroke="var(--graphite-400)"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9 1L1 9"
					stroke="var(--graphite-400)"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</section>
{/if}

<style>
	.cookies {
		color: var(--graphite-400);
		z-index: 1;
		font-size: 13px;
		line-height: 18px;
		text-align: center;
		padding: 5px 0 5px 24px;
		padding-bottom: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media screen and (max-width: 400px) {
		.cookies {
			padding: 5px 0 5px 16px;
		}
	}
	.cookies a {
		color: inherit;
		cursor: pointer;
		text-wrap: nowrap;
	}

	.cookies-close-btn {
		min-width: 24px;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
