import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

const savedPostsKey = Symbol('saved-posts');

function createSavedPosts() {
	const ids = writable<string[]>([]);

	return {
		ids,
		toggle(postId: string) {
			ids.update((savedIds) =>
				savedIds.includes(postId) ? savedIds.filter((id) => id !== postId) : [...savedIds, postId]
			);
		}
	};
}

export function provideSavedPosts() {
	return setContext(savedPostsKey, createSavedPosts());
}

export function useSavedPosts() {
	return getContext<ReturnType<typeof createSavedPosts>>(savedPostsKey);
}
