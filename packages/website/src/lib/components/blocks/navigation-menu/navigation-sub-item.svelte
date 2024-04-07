<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronRight } from 'svelte-radix'
	import type { MenuItem } from './types'
	import { cn } from '$lib/utils'
	import { goto } from '$app/navigation'

	type Props = {
		item: MenuItem
		closeAll: () => void
		onmouseenter?: () => void
		onmouseleave?: () => void
	}

	let { item, closeAll, ...restProps }: Props = $props()

	let isOpen = $state(false)
</script>

{#if item.items}
	<div class="relative">
		<button
			class={cn(
				'flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 ',
				'hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent',
			)}
			aria-expanded={item.isOpen}
			aria-haspopup="true"
			onmouseenter={() => (isOpen = true)}
			onmouseleave={() => (isOpen = false)}
			onclick={() => {
				item.href ? goto(item.href) : item.action && item.action()
				closeAll()
			}}>
			{item.label}
			<ChevronRight
				class={cn(
					'ml-1 h-3 w-3 transition duration-150 ease-in-out group-hover:text-gray-500',
					item.isOpen && 'rotate-90'
				)} />
		</button>
		{#if item.items && isOpen}
			<ul
				class="absolute -top-1/2 left-full z-10 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby={item.label}
				transition:fly={{ y: 5, duration: 200 }}
				onmouseover={() => (isOpen = true)}
				onfocus={() => (isOpen = true)}
				onmouseleave={() => (isOpen = false)}>
				{#each item.items as subItem}
					<li>
						<button
							class={cn(
								'flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent'
							)}
							role="menuitem"
							onclick={() => {
								subItem.href
									? goto(subItem.href)
									: subItem.action && subItem.action()
								closeAll()
							}}>
							{subItem.label}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{:else}
	<a
		href={item.href}
		class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
		role="menuitem">
		{item.label}
	</a>
{/if}
