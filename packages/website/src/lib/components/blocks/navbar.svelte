<script lang="ts">
	import { ChevronDown } from 'svelte-radix'

	type MenuItem = {
		label: string
		shortcut?: string
		items?: MenuItem[]
	}

	type Menu = {
		label: string
		items?: MenuItem[]
	}

	const menuItems: Menu[] = [
		{
			label: 'Who We Are',
			items: [
				{ label: 'New Tab' },
				{ label: 'New Window' },
				{ label: 'New Incognito Window' },
				{
					label: 'share',
					items: [
						{ label: 'Email link' },
						{ label: 'Messages' },
						{ label: 'Notes' }
					]
				},
				{ label: 'Print...' }
			]
		},
		{
			label: 'What We Do',
			items: [
				{ label: 'Undo' },
				{ label: 'Redo' },
				{ label: 'Cut' },
				{ label: 'Copy' },
				{ label: 'Paste' }
			]
		},
		{
			label: 'What We Offer',
			items: [
				{ label: 'Reload' },
				{ label: 'Force Reload' },
				{ label: 'Toggle Fullscreen' },
				{ label: 'Hide Sidebar' }
			]
		}
	]
</script>

<nav
	class="flex h-9 items-center space-x-1 rounded-md border border-none bg-background p-1 shadow-sm"
>
	<ul class="flex justify-between">
		{#each menuItems as menu}
			<li
				class="group/menuItem relative flex rounded-sm
                px-4 py-2 text-sm
                font-medium outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
			>
				<a
					href="#"
					class="inline-flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
				>
					{menu.label}
					<ChevronDown
						class="h-3 w-3 group-hover:text-gray-900 group-focus:text-gray-900"
					/>
				</a>
				<ul
					class="absolute left-0 top-full z-50 mt-1 hidden w-fit min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none
                     group-hover/menuItem:block"
				>
					{#if menu.items}
						{#each menu.items as item}
							{#if item.items}
								<li
									class="group/menuSubItem relative flex rounded-sm px-4
                                py-2 text-sm
                                font-medium outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
								>
									<a
										href="#"
										class="inline-flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
									>
										{item.label}
										<ChevronDown
											class="h-3 w-3 group-hover:text-gray-900 group-focus:text-gray-900"
										/>
									</a>
									<ul
										class="absolute left-0 top-full z-50 mt-1 hidden w-fit min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none
                                        group-hover/menuSubItem:block"
									>
										{#each item.items as subItem}
											<li
												class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
											>
												<a
													href="#"
													class="inline-flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
												>
													{subItem.label}
													<ChevronDown
														class="h-3 w-3 group-hover:text-gray-900 group-focus:text-gray-900"
													/>
												</a>
											</li>
										{/each}
									</ul>
								</li>
							{:else}
								<li
									class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
								>
									<a
										href="#"
										class=""
									>
										{item.label}
									</a>
								</li>
							{/if}
						{/each}
					{/if}
				</ul>
			</li>
		{/each}
	</ul>
</nav>
