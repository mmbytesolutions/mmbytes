<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronDown } from 'svelte-radix'
	import type { Menu } from './types'
	import NavigationSubItem from './navigation-sub-item.svelte'
	import { getContext } from 'svelte'

	export let menu: Menu
	let isOpen = false

	let timeoutId: Timer

	const { openMenuItem, setOpenMenuItem } = getContext
	function openMenu() {
		isOpen = true
		clearTimeout(timeoutId)
	}

	function closeMenu() {
		timeoutId = setTimeout(() => {
			isOpen = false
		}, 200)
	}
	function handleMouseEnter() {
		if (openMenuItem && openMenuItem !== menu.label) {
			isOpen = true
			setOpenMenuItem(menu.label)
		}
		openMenu()
	}
</script>

<div class="group/item relative">
	<button
		class="hover:bg-accent hover:text-accent-foreground focus:ring-accent group inline-flex items-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2"
		aria-expanded={isOpen}
		aria-haspopup="true"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={closeMenu}>
		{menu.label}
		{#if menu.items}
			<ChevronDown
				class="ml-1 h-3 w-3 transition duration-150 ease-in-out group-hover:text-gray-500" />
		{/if}
	</button>

	{#if isOpen && menu.items}
		<ul
			class="absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby={menu.label}
			on:mouseenter={openMenu}
			on:mouseleave={closeMenu}
			transition:fly={{ y: 5, duration: 200 }}>
			{#each menu.items as item}
				<li>
					<NavigationSubItem {item} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
