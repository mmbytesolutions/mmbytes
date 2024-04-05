<script lang="ts">
	import type { Menu } from './types'
	import NavigationItem from './navigation-item.svelte'
	import { createMenu } from './constructor.svelte'

	let { menu = $bindable() }: { menu: Menu[] } = $props()

	let { menu: menuList, openItem, closeItem } = createMenu(menu)

	$effect(() => {
		if (!menuList.openedItemLabel) {
			menuList.items.map((item) => (item.isOpen = false))
		}
	})
</script>

<nav
	class="bg-background flex items-center space-x-1 rounded-md border border-none p-1 shadow-sm"
	aria-label="Main Navigation">
	<ul class="flex justify-between space-x-1">
		{#each menuList.items as menuItem, index}
			<li>
				<NavigationItem
					{menuItem}
					onmouseenter={() => openItem(index)}
					onmouseleave={() => closeItem(index)} />
			</li>
		{/each}
	</ul>
</nav>
