<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { LorePost } from '#lib/posts.ts';
	import PostCard from './PostCard.svelte';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'children'> & { posts: LorePost[] };
	let { posts, class: className, ...props }: Props = $props();
</script>

<section aria-label="Lore discussion feed" class={['post-feed', className]} {...props}>
	{#each posts as post (post.id)}
		<PostCard {post} />
	{/each}
</section>

<style>
	.post-feed {
		display: grid;
		gap: 1rem;
	}
</style>
