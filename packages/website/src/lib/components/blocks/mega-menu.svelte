<script lang="ts">
	import ChevronDown from 'svelte-radix/ChevronDown.svelte'
	import * as Menubar from '$lib/components/ui/menubar'
	import { Root } from 'postcss'
	import { Button } from '../ui/button'

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

<Menubar.Root class="border-none">
	{#each menuItems as menu}
		<Menubar.Menu>
			<Menubar.Trigger
				class="px-4 py-2"
				on:pointerenter
			>
				<span>{menu.label}</span>
				<ChevronDown class="ml-1 h-3 w-3" />
			</Menubar.Trigger>
			<Menubar.Content>
				{#if menu.items}
					{#each menu.items as item}
						{#if item.items}
							<Menubar.Sub>
								<Menubar.SubTrigger>{item.label}</Menubar.SubTrigger>
								<Menubar.SubContent>
									{#each item.items as subItem}
										<Menubar.Item>
											{subItem.label}
										</Menubar.Item>
									{/each}
								</Menubar.SubContent>
							</Menubar.Sub>
						{:else}
							<Menubar.Item>
								{item.label}
								{#if item.shortcut}
									<Menubar.Shortcut>{item.shortcut}</Menubar.Shortcut>
								{/if}
							</Menubar.Item>
						{/if}
					{/each}
				{/if}
			</Menubar.Content>
		</Menubar.Menu>
	{/each}
</Menubar.Root>
