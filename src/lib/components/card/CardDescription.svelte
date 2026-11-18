<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		ref?: HTMLDivElement;
	};

	let { children, class: className, ref = $bindable(), ...props }: Props = $props();
</script>

<div bind:this={ref} class={['card-description', className]} {...props}>
	{@render children?.()}
</div>

<style>
	.card-description {
		font-size: 0.875rem;
		color: var(
			--color-muted-foreground,
			color-mix(in srgb, var(--color-text) 70%, var(--color-surface))
		);
	}
</style>
