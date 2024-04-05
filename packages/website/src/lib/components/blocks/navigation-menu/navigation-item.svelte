<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronDown } from 'svelte-radix'
	import type { MenuItem } from './types'
	import NavigationSubItem from './navigation-sub-item.svelte'

	type Props = {
		menuItem: MenuItem
		onmouseenter?: () => void
		onmouseleave?: () => void
	}

	let { menuItem, onmouseenter, onmouseleave }: Props = $props()
</script>

<div class="group/item relative">
	<button
		class="hover:bg-accent hover:text-accent-foreground focus:ring-accent group inline-flex items-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2"
		aria-expanded={menuItem.isOpen}
		aria-haspopup="true"
		{onmouseenter}
		{onmouseleave}>
		{menuItem.label}
		{#if menuItem.items}
			<ChevronDown
				class="ml-1 h-3 w-3 transition duration-150 ease-in-out group-hover:text-gray-500" />
		{/if}
	</button>

	{#if menuItem.isOpen && menuItem.items}
		<ul
			class="absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby={menuItem.label}
			{onmouseenter}
			{onmouseleave}
			transition:fly={{ y: 5, duration: 200 }}>
			{#each menuItem.items as item}
				<li>
					<NavigationSubItem
						{menuItem}
						{onmouseenter}
						{onmouseleave} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
