// Ambient types for the global toast API exposed by src/components/ui/Toast.astro.

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastOptions {
	type?: ToastType;
	/** Heading above the message. Pass '' to hide it. Defaults to a per-type label. */
	title?: string;
	/** Auto-dismiss delay in ms. Pass 0 to keep the toast until dismissed. */
	duration?: number;
}

export interface ToastApi {
	show(message: string, options?: ToastOptions): HTMLElement;
	info(message: string, options?: ToastOptions): HTMLElement;
	success(message: string, options?: ToastOptions): HTMLElement;
	warning(message: string, options?: ToastOptions): HTMLElement;
	error(message: string, options?: ToastOptions): HTMLElement;
	dismiss(toast: HTMLElement): void;
}

declare global {
	interface Window {
		toast: ToastApi;
	}
}

export {};
