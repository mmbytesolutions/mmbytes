<script lang="ts">
	import { Navigation, type Menu } from '$lib/components/blocks/navigation-menu'
	import Navbar from '$lib/components/blocks/navbar.svelte'
	import Separator from '$lib/components/ui/separator/separator.svelte'
	import MegaMenu from '$lib/components/blocks/mega-menu.svelte'

	let menuItems: Menu[] = [
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

<Navigation {menuItems} />
