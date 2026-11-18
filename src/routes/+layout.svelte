<script lang="ts">
	import type { LayoutProps } from './$types';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import SiteSidebar from '#lib/components/SiteSidebar.svelte';
	import { provideSavedPosts } from '#lib/saved-posts.ts';
	import '../app.css';

	let { children }: LayoutProps = $props();
	provideSavedPosts();
</script>

<SiteHeader />

<div class="page-layout">
	<SiteSidebar />

	<main>
		{@render children()}
	</main>

	<aside aria-label="Your profile and reading preferences">
		<h2>Your burrow</h2>
	</aside>
</div>

<style>
	.page-layout {
		display: grid;
		grid-template-columns: 210px minmax(0, 1fr) 260px;
		gap: 2rem;

		max-width: 1280px;
		margin-inline: auto;
		padding: 2rem;
	}

	main {
		min-width: 0;
	}

	@media (max-width: 1000px) {
		.page-layout {
			grid-template-columns: 190px minmax(0, 1fr);
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

		aside {
			grid-column: auto;
		}
	}
</style>
