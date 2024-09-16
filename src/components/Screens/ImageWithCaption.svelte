<script>
	import InView from '../common/InView.svelte';
	export let image,
		caption,
		isRight = false;
</script>

<div class="image image-{isRight ? 'right' : 'left'}  has-bgr" data-bgimage={image}>
	<div class="caption caption-{isRight ? 'right' : 'left'}">
		<InView>{caption}</InView>
	</div>
</div>

<style>
	.image {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 0;
		background-position: center center;
		background-size: cover;
	}

	.image-left {
		left: 0;
	}
	.image-right {
		right: 0;
	}

	.caption {
		font-size: 20px;
		position: absolute;
		bottom: 32px;
		z-index: 1;
	}
	.caption-left {
		left: 64px;
	}
	.caption-right {
		right: 64px;
	}

	@media screen and (max-width: 960px) {
		.image {
			border-radius: 16px;
			position: relative;
			height: 350px;
		}

		.caption {
			left: 24px;
			bottom: 24px;
		}
	}

	@media screen and (max-width: 480px) {
		.image {
			display: flex;
			align-items: flex-end;
			justify-content: flex-start;
			padding: 24px;
			width: 235px;
			scroll-snap-align: center;
			flex: none;
		}

		.caption {
			font-size: 24px;
			position: static;
			line-height: 1.1;
		}
	}
</style>
