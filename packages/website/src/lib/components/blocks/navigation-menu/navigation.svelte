<script lang="ts">
	import { setContext } from 'svelte'
	import type { Menu } from './types'
	import NavigationItem from './navigation-item.svelte'

	export let menuItems: Menu[]

	let openMenuItem: string | null = null
	setContext('navigation', {
		openMenuItem,
		setOpenMenuItem: (item: string) => {
			openMenuItem = item
		}
	})
</script>

<nav
	class="bg-background flex items-center space-x-1 rounded-md border border-none p-1 shadow-sm"
	aria-label="Main Navigation">
	<ul class="flex justify-between space-x-1">
		{#each menuItems as menu}
			<li>
				<NavigationItem {menu} />
			</li>
		{/each}
	</ul>
</nav>
