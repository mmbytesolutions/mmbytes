<script lang="ts">
	import { Code, Rocket, Bot } from 'lucide-svelte';
	import * as Accordion from '$lib/components/ui/accordion';

	const serviceItems = [
		{
			title: 'Custom Software Sorcery',
			description:
				'Conjure bespoke software solutions that align perfectly with your wildest business dreams.',
			icon: Code,
			iconColor: 'text-purple-400'
		},
		{
			title: 'Web Wizardry',
			description:
				'Craft spellbinding websites and web apps that captivate users and elevate your digital presence.',
			icon: Rocket,
			iconColor: 'text-blue-400'
		},
		{
			title: 'AI Alchemy',
			description: 'Transform raw data into golden insights with our AI integration sorcery.',
			icon: Bot,
			iconColor: 'text-green-400'
		}
	];
</script>

<section id="services" class="w-full bg-black/40 py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<h2 class="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			Our Electrifying Services
		</h2>
		<Accordion.Root>
			{#each serviceItems as item (item.title)}
				<Accordion.Item value={item.title}>
					<Accordion.Trigger class="flex items-center">
						<svelte:component this={item.icon} class={`mr-2 h-6 w-6 ${item.iconColor}`} />
						<h3 class="text-xl font-bold">{item.title}</h3>
					</Accordion.Trigger>
					<Accordion.Content>
						<p class="text-zinc-200">{item.description}</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
