<script lang="ts">
	import { onMount } from 'svelte';
	import Typed, { type TypedOptions } from 'typed.js';
	import { cn } from '@/utils';

	type DynamicContent = Record<string, string[]>;

	interface Props {
		content?: {
			static: string;
			dynamic: DynamicContent;
		};
		class?: string | string[];
		layout?: 'default' | 'centered';
	}

	const defaultContent = {
		static: 'Transforming {business_type} Through Innovative {service_type}',
		dynamic: {
			business_type: ['Startups', 'Enterprises', 'SMBs', 'Non-Profits'],
			service_type: ['Web Development', 'Mobile Apps', 'AI Integration', 'Process Automation']
		}
	};

	let { content = defaultContent, class: className = '', layout = 'centered' }: Props = $props();

	let typedElements: Record<string, HTMLAnchorElement> = $state({});
	let typedInstances: Record<string, Typed> = $state({});
	let currentTexts: Record<string, string> = $state({});

	onMount(() => {
		const commonOptions: TypedOptions = {
			typeSpeed: 50,
			backSpeed: 30,
			loop: true,
			smartBackspace: false,
			startDelay: 50,
			backDelay: 5000,
			cursorChar: '|',
			showCursor: layout === 'default',
			onStringTyped: (arrayPos: number, self: any) => {
				const key = self.el.dataset.key;
				currentTexts[key] = self.strings[arrayPos].toLowerCase().replace(/\s+/g, '-');
			}
		};

		Object.entries(content.dynamic).forEach(([key, values]) => {
			typedInstances[key] = new Typed(typedElements[key], {
				...commonOptions,
				strings: values,
				...(layout === 'centered' && {
					preStringTyped: (arrayPos, self) => {
						const currentString = (self as any).strings[arrayPos];
						const halfLength = Math.floor(currentString.length / 2);
						(self as any).el.textContent = ' '.repeat(halfLength);
					}
				})
			});
		});

		return () => {
			Object.values(typedInstances).forEach((instance) => instance.destroy());
		};
	});

	function getPlaceholderRegex(): RegExp {
		const placeholders = Object.keys(content.dynamic)
			.map((key) => `{${key}}`)
			.join('|');
		return new RegExp(`(${placeholders})`);
	}

	function getMaxWidth(key: string): string {
		return `${Math.max(...content.dynamic[key].map((s) => s.length))}ch`;
	}

	function getMaxHeight(): string {
		const allStrings = Object.values(content.dynamic).flat();
		return `${Math.max(...allStrings.map((s) => s.split('\n').length))}em`;
	}
</script>

<div
	class={cn(
		'inline-flex flex-wrap items-center leading-tight',
		layout === 'centered' && 'justify-center text-center',
		className
	)}
>
	{#each content.static.split(getPlaceholderRegex()) as part}
		{#if part.startsWith('{') && part.endsWith('}')}
			{@const key = part.slice(1, -1)}
			<div
				class={cn(
					'inline-flex items-center overflow-hidden',
					layout === 'centered' ? 'text-center justify-center' : 'text-left'
				)}
				style:width={getMaxWidth(key)}
				style:height={getMaxHeight()}
			>
				<!-- svelte-ignore a11y_missing_content -->
				<a
					href={`#${currentTexts[key] || ''}`}
					bind:this={typedElements[key]}
					data-key={key}
					class={cn(
						'whitespace-nowrap font-bold text-primary',
						'underline decoration-primary/50 decoration-2 underline-offset-4',
						'md:hover:cursor-pointer md:hover:decoration-primary/100',
						layout === 'centered' && 'w-full'
					)}
				></a>
			</div>
		{:else}
			<span class="static-text">{part}</span>{#if layout !== 'centered'}&nbsp;{/if}
		{/if}
	{/each}
</div>
