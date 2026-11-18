<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		ref?: HTMLDivElement;
	};

	let { children, class: className, ref = $bindable(), ...props }: Props = $props();
</script>

<div bind:this={ref} class={['card-title', className]} {...props}>
	{@render children?.()}
</div>

<style>
	.card-title {
		font-family: var(--font-heading);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.025em;
	}
</style>
