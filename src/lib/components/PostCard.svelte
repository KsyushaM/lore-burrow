<script lang="ts">
	import type { LorePost } from '#lib/posts.ts';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
	import { Button } from './button';

	let { post }: { post: LorePost } = $props();
	let isSaved = $state(false);
</script>

<article class="post" aria-labelledby={`post-title-${post.id}`}>
	<Card class="post-card">
		<CardHeader class="post-header">
			<div class="author-row">
				<span class="avatar" aria-hidden="true">{post.initials}</span>
				<div class="author-details">
					<p class="community">{post.community}</p>
					<p class="byline">{post.author} · {post.publishedAt}</p>
				</div>
				<svg class="sparkles" aria-hidden="true" viewBox="0 0 24 24">
					<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z M20 2v4 M18 4h4" />
				</svg>
			</div>
			<CardTitle>
				<h2 id={`post-title-${post.id}`}>{post.title}</h2>
			</CardTitle>
		</CardHeader>
		<CardContent class="post-content">
			<p class="excerpt">{post.excerpt}</p>
			<ul class="tags" aria-label="Tags">
				{#each post.tags as tag, index (index)}
					<li>{tag}</li>
				{/each}
			</ul>
		</CardContent>
		<CardFooter class="post-footer">
			<Button
				type="button"
				variant={isSaved ? 'secondary' : 'ghost'}
				size="sm"
				aria-label={isSaved ? `Unsave ${post.title}` : `Save ${post.title} for later`}
				aria-pressed={isSaved}
				onclick={() => (isSaved = !isSaved)}
			>
				<svg aria-hidden="true" viewBox="0 0 24 24" class:saved={isSaved}>
					<path d="M6 3h12v18l-6-4-6 4Z" />
				</svg>
				<span>{isSaved ? 'Saved' : 'Save'}</span>
			</Button>
		</CardFooter>
	</Card>
</article>

<style>
	.post {
		min-width: 0;
		--post-muted: color-mix(in srgb, var(--color-text) 70%, var(--color-surface));
	}

	.post :global(.post-card) {
		overflow: hidden;
		transition: box-shadow 200ms;
	}

	.post :global(.post-card):hover {
		box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
	}

	.post :global(.post-header) {
		gap: 0.75rem;
		padding: 1.25rem 1.25rem 0;
	}

	.post :global(.post-content) {
		display: grid;
		gap: 1rem;
		padding: 0.75rem 1.25rem;
	}

	.post :global(.post-footer) {
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--color-border, var(--color-accent));
	}

	.author-row {
		display: flex;
		align-items: center;
	}

	.author-row {
		gap: 0.75rem;
	}
	.author-details {
		flex: 1;
		min-width: 0;
	}
	p {
		margin: 0;
	}
	.community {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.byline {
		font-size: 0.75rem;
		color: var(--post-muted);
	}
	.avatar {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		border: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
		background: var(--color-secondary);
		font-family: var(--font-heading);
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.375;
		overflow-wrap: anywhere;
	}
	.excerpt {
		font-size: 0.875rem;
		line-height: 1.625;
		color: var(--post-muted);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.tags li {
		padding: 0.125rem 0.625rem;
		border-radius: 999px;
		background: var(--color-secondary);
		font-size: 0.75rem;
		letter-spacing: 0.025em;
	}
	svg {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.75;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.sparkles {
		color: var(--color-primary);
	}
	.saved {
		fill: currentColor;
	}
	@media (prefers-reduced-motion: reduce) {
		.post :global(.post-card) {
			transition: none;
		}
	}
</style>
