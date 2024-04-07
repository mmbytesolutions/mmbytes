<script lang="ts">
	import type { Menu } from './types'
	import NavigationItem from './navigation-item.svelte'
	import { createMenu } from './constructor.svelte'

	let { menuItems = $bindable() }: { menuItems: Menu[] } = $props()

	let { menu, openItem, closeItem } = createMenu(menuItems)
</script>

<nav
	class="flex items-center space-x-1 rounded-md border border-none bg-background p-1 shadow-sm"
	aria-label="Main Navigation">
	<ul class="flex justify-between space-x-1">
		{#each menu.items as menuItem, index}
			<li>
				<NavigationItem
					{menuItem}
					onmouseenter={() => openItem(index)}
					onmouseleave={() => closeItem(index)} />
			</li>
		{/each}
	</ul>
</nav>
