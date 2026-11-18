<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { LorePost } from '#lib/posts.ts';
	import PostCard from './PostCard.svelte';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
		posts: LorePost[];
		savedIds: string[];
		onToggleSave: (postId: string) => void;
	};
	let { posts, savedIds, onToggleSave, class: className, ...props }: Props = $props();
</script>

<section aria-label="Lore discussion feed" class={['post-feed', className]} {...props}>
	{#each posts as post (post.id)}
		<PostCard {post} isSaved={savedIds.includes(post.id)} {onToggleSave} />
	{/each}
</section>

<style>
	.post-feed {
		display: grid;
		gap: 1rem;
	}
</style>
