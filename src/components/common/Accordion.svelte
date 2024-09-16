<script>
	import { slide } from 'svelte/transition';
	export let item;
	export let open = false;

	const { q, a } = item;
	const handleClick = () => (open = !open);
</script>

<div class="accordion-item">
	<button class="item-label" on:click={handleClick}>
		<div class="question">
			{q}
		</div>
		<div class="arrow-wrap">
			<button aria-label="Open accordion item" class="{open ? 'item-open' : 'item-closed'} arrow"
			></button>
		</div>
	</button>

	{#if open}
		<div class="answer" transition:slide>{@html a}</div>
	{/if}
</div>

<style>
	.question {
		font-weight: 600;
		text-align: left;
		color: var(--graphite-100);
		font-size: 20px;
	}

	.item-label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		gap: 15px;
		width: 100%;
	}

	.answer {
		margin-top: 20px;
		color: var(--graphite-500);
		padding-bottom: 12px;
	}

	:global(.answer p) {
		margin-bottom: 15px;
	}
	:global(.answer ul li) {
		margin-bottom: 8px;
	}
	:global(.answer ul) {
		padding-inline-start: 26px;
		margin-bottom: 15px;
	}

	.accordion-item {
		padding: 20px 0;
	}

	.accordion-item:not(:last-child) {
		border-bottom: 1px solid var(--graphite-800);
	}

	.arrow {
		width: 14px;
		height: 1px;
		cursor: pointer;
		position: relative;
		background-color: var(--graphite-500);
		transition: background-color ease-out 0.2s;
	}

	.arrow-wrap {
		transition: transform ease-out 0.2s;
		transform-origin: 50% 50%;
		width: 24px;
		height: 24px;
		position: relative;
	}
	.arrow-wrap:hover {
		transform: scale(1.5);
	}

	.arrow-wrap:hover .arrow,
	.arrow-wrap:hover .arrow::after,
	.arrow-wrap:hover .arrow::before {
		background-color: var(--accent-500);
	}

	.arrow::after,
	.arrow::before {
		content: '';
		background-color: var(--graphite-500);
		transition: all ease-out 0.2s;
		display: block;
		position: absolute;
		width: 1px;
		height: 7px;
		left: 50%;
		transition:
			height ease-out 0.2s,
			background-color ease-out 0.2s;
	}

	.arrow:after {
		bottom: 0;
	}

	.arrow:before {
		top: 0;
	}

	.arrow.item-open {
		background-color: var(--accent-500);
	}

	.arrow.item-open::after,
	.arrow.item-open::before {
		height: 0;
	}

	@media screen and (max-width: 960px) {
		.item-label {
			font-size: 16px;
			gap: 4px;
		}
		.answer {
			font-size: 14px;
			margin-top: 12px;
		}
	}
</style>
