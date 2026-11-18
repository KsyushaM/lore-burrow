<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		ref?: HTMLDivElement;
	};

	let { children, class: className, ref = $bindable(), ...props }: Props = $props();
</script>

<div bind:this={ref} class={['card', className]} {...props}>
	{@render children?.()}
</div>

<style>
	.card {
		border: 1px solid var(--color-border, var(--color-accent));
		border-radius: 1rem;
		background-color: var(--color-surface);
		color: var(--color-text);
		box-shadow:
			0 1px 3px rgb(0 0 0 / 0.1),
			0 1px 2px rgb(0 0 0 / 0.06);
	}
</style>
