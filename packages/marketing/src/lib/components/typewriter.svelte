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
			typeSpeed: 100,
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
</script>

<div class="typewriter-container">
	{#each data.static.split(getPlaceholderRegex()) as part}
		{#if part.startsWith('{') && part.endsWith('}')}
			{@const key = part.slice(1, -1)}
			<span bind:this={typedElements[key]} class="typed-text">&nbsp;</span>
		{:else}
			<span>{part} &nbsp;</span>
		{/if}
	{/each}
</div>

<style>
	.typewriter-container {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.typed-text {
		color: #007bff;
		font-weight: bold;
		display: inline-block;
		min-width: 10px;
	}
</style>
