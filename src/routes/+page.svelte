<script lang="ts">
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import PostFeed from '#lib/components/PostFeed.svelte';
	import { SAMPLE_LORE_POSTS } from '#lib/posts.ts';
</script>

<svelte:head>
	<title>Lore Burrow</title>
</svelte:head>

<SiteHeader />

<div class="page-layout">
	<nav class="sidebar-navigation" aria-label="Fandom navigation">
		<a href="/">Your feed</a>
		<a href="/saved">Saved theories</a>
	</nav>

	<main>
		<section class="feed-heading">
			<h1>Let's go down the rabbit hole</h1>
		</section>

		<PostFeed posts={SAMPLE_LORE_POSTS} />
	</main>

	<aside aria-label="Your profile and reading preferences">
		<h2>Your burrow</h2>
	</aside>
</div>

<style>
	.page-layout {
		display: grid;
		grid-template-columns: 180px minmax(0, 1fr) 260px;
		gap: 2rem;

		max-width: 1280px;
		margin-inline: auto;
		padding: 2rem;
	}

	.sidebar-navigation {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	main {
		min-width: 0;
	}

	.feed-heading {
		margin-bottom: 2rem;
	}

	@media (max-width: 1000px) {
		.page-layout {
			grid-template-columns: 160px minmax(0, 1fr);
		}

		aside {
			grid-column: 2;
		}
	}

	@media (max-width: 700px) {
		.page-layout {
			grid-template-columns: minmax(0, 1fr);
			padding: 1rem;
		}

		.sidebar-navigation {
			flex-direction: row;
			flex-wrap: wrap;
		}

		aside {
			grid-column: auto;
		}
	}
</style>
