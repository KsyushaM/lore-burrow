<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from './button';

	let { onNewPost }: { onNewPost?: () => void } = $props();
</script>

<header class="site-header">
	<div class="header-content">
		<a class="wordmark" href={resolve('/')}>Loreburrow</a>
		<Button onclick={onNewPost}>
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<path d="M12 5v14M5 12h14" />
			</svg>
			<span>New post</span>
		</Button>
	</div>
</header>

<style>
	.site-header {
		background: var(--color-background);
		border-bottom: 1px solid color-mix(in srgb, var(--color-text) 16%, transparent);
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 1280px;
		min-height: 3.25rem;
		margin-inline: auto;
		padding: 0.75rem 2rem;
		box-sizing: content-box;
	}

	.wordmark {
		color: var(--color-text);
		font-family: var(--font-heading);
		font-size: 2rem;
		font-style: italic;
		line-height: 1.1;
		letter-spacing: -0.04em;
		text-decoration: none;
	}

	.wordmark:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 4px;
		border-radius: 0.25rem;
	}

	svg {
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
	}

	@media (max-width: 700px) {
		.header-content {
			min-height: 3rem;
			padding: 0.5rem 1rem;
		}

		.wordmark {
			font-size: 1.75rem;
		}
	}
</style>
