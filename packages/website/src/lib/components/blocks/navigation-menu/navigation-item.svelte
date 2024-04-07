<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronDown } from 'svelte-radix'
	import type { MenuItem } from './types'
	import NavigationSubItem from './navigation-sub-item.svelte'
	import type { HTMLLiAttributes } from 'svelte/elements'
	import { cn } from '$lib/utils'
	import { goto } from '$app/navigation'
	// extend html buttun attributes to props with MenuItem
	type Props = {
		menuItem: MenuItem
		[key: string]: HTMLLiAttributes[keyof HTMLLiAttributes]
	}

	let { menuItem, closeAll, ...restProps }: Props = $props()
</script>

<div class="relative">
	<button
		class={cn(
			'font-medium0 inline-flex items-center rounded-md px-4 py-2 text-sm',
			'hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent',
			'cursor-pointer'
		)}
		aria-expanded={menuItem.isOpen}
		aria-haspopup="true"
		onclick={() => {
			menuItem.href ? goto(menuItem.href) : menuItem.action && menuItem.action()
			closeAll()
		}}
		{...restProps}>
		{menuItem.label}
		{#if menuItem.items}
			<ChevronDown
				class={cn(
					'ml-1 h-3 w-3 transition duration-150 ease-in-out',
					menuItem.isOpen && 'rotate-180'
				)} />
		{/if}
	</button>

	{#if menuItem.isOpen && menuItem.items}
		<ul
			class="absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby={menuItem.label}
			{...restProps}
			transition:fly={{ y: 5, duration: 200 }}>
			{#each menuItem.items as item}
				<li>
					<NavigationSubItem
						{item}
						{closeAll}
						{...restProps} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
