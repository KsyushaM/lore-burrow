<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from './variants.ts';
	import './button.css';

	type SharedProps = {
		variant?: ButtonVariant;
		size?: ButtonSize;
		children?: Snippet;
		disabled?: boolean;
		ref?: HTMLButtonElement | HTMLAnchorElement;
	};
	type Props = SharedProps &
		((HTMLButtonAttributes & { href?: never }) | (HTMLAnchorAttributes & { href: string }));

	let {
		variant = 'default',
		size = 'default',
		class: className,
		children,
		ref = $bindable(),
		disabled = false,
		href,
		...props
	}: Props = $props();
</script>

<!-- Callers resolve internal URLs; external URLs are also supported. -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if href !== undefined}
	<a
		{...props as HTMLAnchorAttributes}
		bind:this={ref}
		href={disabled ? undefined : href}
		aria-disabled={disabled || undefined}
		tabindex={disabled ? -1 : props.tabindex}
		class={buttonVariants({ variant, size, class: className })}
		onclick={(event) => {
			if (disabled) {
				event.preventDefault();
				return;
			}
			(props as HTMLAnchorAttributes).onclick?.(event);
		}}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		type="button"
		{...props as HTMLButtonAttributes}
		bind:this={ref}
		{disabled}
		class={buttonVariants({ variant, size, class: className })}
	>
		{@render children?.()}
	</button>
{/if}
