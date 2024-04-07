<script lang="ts">
	import { Navigation, type Menu } from '$lib/components/blocks/navigation-menu'

	let menuItems: Menu[] = [
		{
			label: 'Who We Are',
			href: '#who-we-are',
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
			href: '#what-we-do',
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
			href: '#what-we-offer',
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
