<script lang="ts">
	import { SAMPLE_LORE_POSTS } from '#lib/posts.ts';
	import { useSavedPosts } from '#lib/saved-posts.ts';
	import PostFeed from './PostFeed.svelte';

	let { savedOnly = false }: { savedOnly?: boolean } = $props();
	const { ids: savedIds, toggle } = useSavedPosts();
	let posts = $derived(
		savedOnly ? SAMPLE_LORE_POSTS.filter((post) => $savedIds.includes(post.id)) : SAMPLE_LORE_POSTS
	);
</script>

<h1 class="visually-hidden">{savedOnly ? 'Saved posts' : 'Discover'}</h1>

{#if savedOnly && posts.length === 0}
	<p role="status">No saved posts yet. Save a post from your feed to find it here.</p>
{:else}
	<PostFeed
		{posts}
		savedIds={$savedIds}
		onToggleSave={toggle}
		aria-label={savedOnly ? 'Saved posts' : 'Lore discussion feed'}
	/>
{/if}

<style>
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
		border: 0;
	}
</style>
