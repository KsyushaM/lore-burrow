<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<nav class="sidebar" aria-label="Reading room">
	<p class="sidebar-label">Reading room</p>
	<div class="sidebar-links">
		<a href={resolve('/')} aria-current={page.url.pathname === resolve('/') ? 'page' : undefined}>
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="9" />
				<path d="m16 8-2.5 5.5L8 16l2.5-5.5Z" />
			</svg>
			<span>Discover</span>
		</a>
		<a
			href={resolve('/saved')}
			aria-current={page.url.pathname === resolve('/saved') ? 'page' : undefined}
		>
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<path d="M6 3h12v18l-6-4-6 4Z" />
			</svg>
			<span>Saved posts</span>
		</a>
	</div>
</nav>

<style>
	.sidebar {
		min-width: 0;
		padding: 1rem 0.625rem;
		border: 1px solid color-mix(in srgb, var(--color-text) 16%, transparent);
		border-radius: 1rem;
		background: var(--color-sidebar);
	}

	.sidebar-label {
		margin: 0 0 0.5rem;
		padding-inline: 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: color-mix(in srgb, var(--color-text) 65%, var(--color-sidebar));
	}

	.sidebar-links {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		min-height: 2.75rem;
		box-sizing: border-box;
		padding: 0.625rem 0.75rem;
		border-radius: 0.5rem;
		color: var(--color-text);
		font-size: 0.875rem;
		line-height: 1.25;
		text-decoration: none;
	}

	a:hover {
		background: color-mix(in srgb, var(--color-secondary) 65%, transparent);
	}

	a[aria-current='page'] {
		background: color-mix(in srgb, var(--color-primary) 10%, transparent);
		color: var(--color-primary);
		font-weight: 500;
	}

	a:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	svg {
		width: 1.125rem;
		height: 1.125rem;
		flex-shrink: 0;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.75;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (max-width: 700px) {
		.sidebar-links {
			flex-direction: row;
			flex-wrap: wrap;
		}

		a {
			flex: 1;
		}
	}
</style>
