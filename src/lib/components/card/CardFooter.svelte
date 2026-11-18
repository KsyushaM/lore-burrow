<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		ref?: HTMLDivElement;
	};

	let { children, class: className, ref = $bindable(), ...props }: Props = $props();
</script>

<div bind:this={ref} class={['card-footer', className]} {...props}>
	{@render children?.()}
</div>

<style>
	.card-footer {
		display: flex;
		align-items: center;
		padding: 0 1.5rem 1.5rem;
	}
</style>
