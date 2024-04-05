<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronDown } from 'svelte-radix'
	import { getContext } from 'svelte'
	import type { MenuItem } from './types'

	export let item: MenuItem
	let isOpen = false

	let timeoutId: Timer

	const { openMenuItem, setOpenMenuItem } = getContext('navigation')
	function openMenu() {
		isOpen = true
		setOpenMenuItem(item.label)
		clearTimeout(timeoutId)
	}

	function closeMenu() {
		timeoutId = setTimeout(() => {
			isOpen = false
			setOpenMenuItem(null)
		}, 200)
	}
	function handleMouseEnter() {
		if (openMenuItem && openMenuItem !== item.label) {
			isOpen = true
			setOpenMenuItem(item.label)
		}
		openMenu()
	}
</script>

{#if item.items}
	<div class="relative">
		<button
			class="focus:ring-accent group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2"
			aria-expanded={isOpen}
			aria-haspopup="true"
			on:mouseenter={handleMouseEnter}
			on:mouseleave={closeMenu}>
			{item.label}
			<ChevronDown
				class="ml-1 h-3 w-3 transition duration-150 ease-in-out group-hover:text-gray-500" />
		</button>
		{#if isOpen}
			<ul
				class="absolute left-full top-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby={item.label}
				transition:fly={{ y: 5, duration: 200 }}
				on:mouseenter={openMenu}
				on:mouseleave={closeMenu}>
				{#each item.items as subItem}
					<li>
						<a
							href="/#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem">
							{subItem.label}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{:else}
	<a
		href="/#"
		class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
		role="menuitem">
		{item.label}
	</a>
{/if}
