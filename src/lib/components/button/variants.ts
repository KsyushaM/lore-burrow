import type { ClassValue } from 'svelte/elements';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export function buttonVariants({
	variant = 'default',
	size = 'default',
	class: className
}: {
	variant?: ButtonVariant;
	size?: ButtonSize;
	class?: ClassValue | null;
} = {}): ClassValue {
	return ['button', `button--${variant}`, `button--size-${size}`, className];
}
