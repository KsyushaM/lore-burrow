<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { Button } from './button';

	type Props = Omit<HTMLButtonAttributes, 'children' | 'aria-pressed'> & {
		saved?: boolean;
		onSavedChange?: (saved: boolean) => void;
	};

	let { saved, onSavedChange, onclick, disabled = false, ...props }: Props = $props();
	let internalSaved = $state(false);
	let isSaved = $derived(saved ?? internalSaved);

	const handleClick: NonNullable<HTMLButtonAttributes['onclick']> = (event) => {
		onclick?.(event);
		if (event.defaultPrevented || disabled) return;

		const nextSaved = !isSaved;
		if (saved === undefined) internalSaved = nextSaved;
		onSavedChange?.(nextSaved);
	};
</script>

<Button
	aria-label={isSaved ? 'Unsave' : 'Save for later'}
	{...props}
	type="button"
	variant="ghost"
	size="icon"
	disabled={disabled ?? false}
	aria-pressed={isSaved}
	onclick={handleClick}
>
	<svg aria-hidden="true" viewBox="0 0 24 24" class:saved={isSaved}>
		<path d="M6 3h12v18l-6-4-6 4Z" />
	</svg>
</Button>

<style>
	svg {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.75;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.saved {
		fill: currentColor;
	}
</style>
