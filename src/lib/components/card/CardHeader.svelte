<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		ref?: HTMLDivElement;
	};

	let { children, class: className, ref = $bindable(), ...props }: Props = $props();
</script>

<div bind:this={ref} class={['card-header', className]} {...props}>
	{@render children?.()}
</div>

<style>
	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding: 1.5rem;
	}
</style>
