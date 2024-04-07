<script lang="ts">
	import type { Menu } from './types'
	import NavigationItem from './navigation-item.svelte'
	import { createMenu } from './constructor.svelte'
	import { cn } from '$lib/utils'

	let {
		menuItems = $bindable(),
		class: classList
	}: { menuItems: Menu[]; class?: string | string[] } = $props()

	let { menu, openItem, closeItem, closeAll } = createMenu(menuItems)
</script>

<nav
	class={cn(
		'flex items-center space-x-1 rounded-md border border-none bg-background p-1',
		classList
	)}
	aria-label="Main Navigation">
	<ul class="flex justify-between space-x-1">
		{#each menu.items as menuItem, index}
			<li>
				<NavigationItem
					{menuItem}
					onmouseenter={() => openItem(index)}
					onmouseleave={() => closeItem(index)}
					{closeAll} />
			</li>
		{/each}
	</ul>
</nav>
