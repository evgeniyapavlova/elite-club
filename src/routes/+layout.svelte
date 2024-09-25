<script>
	import { onMount } from 'svelte';

	import './styles.css';

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('../lib/styles/fonts.css');
			isStyleLoaded = true;
		}
	}

	const lazyLoadBackgrounds = () => {
		const setBackgroundImage = (element) => {
			const bgImage = element.getAttribute('data-bgimage');
			if (bgImage) {
				element.style.backgroundImage = `url(${bgImage})`;
			}
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setBackgroundImage(entry.target);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '800px',
				threshold: 0.1
			}
		);

		const observeElements = () => {
			const elements = document.querySelectorAll('.has-bgr');
			elements.forEach((element) => {
				if (!element.style.backgroundImage) {
					observer.observe(element);
				}
			});
		};

		const mutationObserver = new MutationObserver(() => {
			observeElements();
		});

		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});

		observeElements();
	};

	onMount(() => {
		loadStyle();
		lazyLoadBackgrounds();
	});
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
