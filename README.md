# Lore Burrow

A work-in-progress reading community for sharing theories, hidden details, guides,
and open questions. Built with SvelteKit, Svelte 5, TypeScript, and Vite.

The home page displays a responsive discussion feed backed by local sample data.
Posts show their community, author, excerpt, and tags, with a save toggle. Saves
live in a layout-scoped store and persist while switching between “Discover” at
`/` and “Saved posts” at `/saved`. The saved view filters out unsaved posts
immediately and shows an empty state when none remain. Saves reset on refresh;
there is no backend or browser-storage persistence yet.

## Development

Use Node.js 24 LTS and npm. Install the locked dependencies and start the dev server:

```sh
npm ci
npm run dev
```

## Project structure

```text
src/
  app.css                    Shared colors, fonts, and base styles
  routes/
    +layout.svelte           Shared layout, navigation, styles, and saved state
    +page.svelte             All-posts view
    saved/+page.svelte       Saved-posts view
  lib/
    posts.ts                 Post types and SAMPLE_LORE_POSTS
    saved-posts.ts           Layout-scoped saved IDs and toggle callback
    components/
      SiteHeader.svelte      Site wordmark
      SiteSidebar.svelte     Discover and Saved posts navigation
      PostFeed.svelte        Renders posts keyed by ID
      FeedView.svelte        Filters posts for the current view
      PostCard.svelte        Post details, tags, and controlled save button
      SaveButton.svelte      Ghost icon button with optional controlled state
      card/                  Reusable card components
      button/                Button component, variants, and styles
static/                      Public assets
```

Use the `#lib` alias for shared imports. Include the `.ts` extension when importing
TypeScript files through this alias, for example `#lib/posts.ts`.

## Feed data

Edit `SAMPLE_LORE_POSTS` in `src/lib/posts.ts` to update the home feed. Each `LorePost`
has a unique `id`, `community`, `title`, `excerpt`, `author`, `initials`,
`publishedAt` display string, and `tags` array. Allowed tags are `Hidden detail`,
`Guide`, and `Open question`. The current model has no vote or reply counts.

```svelte
<script lang="ts">
	import PostFeed from '#lib/components/PostFeed.svelte';
	import { SAMPLE_LORE_POSTS } from '#lib/posts.ts';

	let savedIds = $state<string[]>([]);

	function toggleSave(postId: string) {
		savedIds = savedIds.includes(postId)
			? savedIds.filter((id) => id !== postId)
			: [...savedIds, postId];
	}
</script>

<PostFeed posts={SAMPLE_LORE_POSTS} {savedIds} onToggleSave={toggleSave} />
```

The example above owns `savedIds` locally. In the application, the shared layout
provides a saved-posts store through Svelte context, and `FeedView` reads it for
both routes. `PostFeed` passes each card an `isSaved` boolean and `onToggleSave`
callback; `PostCard` calls that callback with the post ID when clicked.

## Design system

Components use plain CSS and shared custom properties from `src/app.css`, including
`--color-primary`, `--color-secondary`, `--color-surface`, `--color-text`,
`--font-heading`, and `--font-body`. Tailwind is not required.

The card module exports `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
`CardContent`, and `CardFooter`. Each accepts child content, `class`, HTML
attributes, and `bind:ref`.

```svelte
<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent } from '#lib/components/card';
	import { Button } from '#lib/components/button';
</script>

<Card>
	<CardHeader>
		<CardTitle>Your theory</CardTitle>
	</CardHeader>
	<CardContent>
		<Button variant="secondary" size="sm">Save theory</Button>
	</CardContent>
</Card>
```

Button variants are `default`, `destructive`, `outline`, `secondary`, `ghost`, and
`link`; sizes are `default`, `sm`, `lg`, and `icon`. Buttons support `disabled`,
`onclick`, `class`, HTML attributes, and `bind:ref`. Set `href` to render an anchor;
resolve internal URLs at the call site with SvelteKit's `resolve` from `$app/paths`.
Provide an `aria-label` for buttons containing only an icon.

The button module also exports `buttonVariants`, `ButtonVariant`, and `ButtonSize`.
`buttonVariants` returns a Svelte-compatible class value; its CSS is loaded by
`Button.svelte`. When using the helper without the component, also import
`#lib/components/button/button.css`.

`SaveButton.svelte` uses the `ghost` variant and `icon` size in both states, with
an outline bookmark when unsaved and a filled bookmark when saved. Pass `saved`
and `onSavedChange` to control it from a parent, or omit `saved` for internal state.
An `onclick` handler can cancel the toggle with `event.preventDefault()`.
The component provides `aria-pressed`, a default accessible label, and native
`disabled` behavior. In the feed, its label includes the post title.

## Checks

```sh
npm run check
npm run lint
npm test
npm run build
```

Run type checks and builds sequentially because both regenerate SvelteKit files.
Use `npm run format` to apply formatting.

There are currently no application tests. `npm test` succeeds when no tests exist.
Vitest remains configured for Node unit tests (`src/**/*.test.ts` or `*.spec.ts`)
and Svelte browser tests (`src/**/*.svelte.test.ts` or `*.svelte.spec.ts`).
Browser tests use Playwright Chromium; install it with `npx playwright install chromium`
when adding component tests.

## Production

```sh
npm run build
npm run preview
```

The project uses `adapter-auto`. Choose a deployment adapter for the target hosting
platform before deploying.
