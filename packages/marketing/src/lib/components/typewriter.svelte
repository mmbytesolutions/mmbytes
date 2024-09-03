<script lang="ts">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';

	type DynamicContent = Record<string, string[]>;

	interface TypewriterData {
		static: string;
		dynamic: DynamicContent;
	}

	export let data: TypewriterData = {
		static: 'Transforming {business_type} Through Innovative {service_type}',
		dynamic: {
			business_type: ['Startups', 'Enterprises', 'SMBs', 'Non-Profits'],
			service_type: ['Web Development', 'Mobile Apps', 'AI Integration', 'Process Automation']
		}
	};

	let typedElements: Record<string, HTMLSpanElement> = {};
	let typedInstances: Record<string, Typed> = {};

	onMount(() => {
		const commonOptions = {
			typeSpeed: 50,
			backSpeed: 30,
			loop: true,
			smartBackspace: false,
			startDelay: 50,
			backDelay: 5000
		};

		Object.entries(data.dynamic).forEach(([key, values]) => {
			typedInstances[key] = new Typed(typedElements[key], {
				...commonOptions,
				strings: values
			});
		});

		return () => {
			Object.values(typedInstances).forEach((instance) => instance.destroy());
		};
	});

	function getPlaceholderRegex(): RegExp {
		const placeholders = Object.keys(data.dynamic)
				.map((key) => `{${key}}`)
				.join('|');
		return new RegExp(`(${placeholders})`);
	}

	function getMaxWidth(key: string): string {
		return `${Math.max(...data.dynamic[key].map(s => s.length))}ch`;
	}

	function getMaxHeight(): string {
		const allStrings = Object.values(data.dynamic).flat();
		return `${Math.max(...allStrings.map(s => s.split('\n').length))}em`;
	}
</script>

<div class="typewriter-container">
	{#each data.static.split(getPlaceholderRegex()) as part}
		{#if part.startsWith('{') && part.endsWith('}')}
			{@const key = part.slice(1, -1)}
			<div class="typed-wrapper" style="width: {getMaxWidth(key)}; height: {getMaxHeight()};">
				<span bind:this={typedElements[key]} class="typed-text"></span>
			</div>
		{:else}
			<span class="static-text">{part}&nbsp;</span>
		{/if}
	{/each}
</div>

<style>
	.typewriter-container {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		line-height: 1.2;
	}
	.typed-wrapper {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
	}
	.typed-text {
		/* color: #007bff; */
		color: hsl(var(--primary));
		font-weight: bold;
		white-space: nowrap;
	}
	/* .static-text {
		white-space: pre;
	} */
</style>