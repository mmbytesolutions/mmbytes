import type { Menu } from './types'

function createMenu(initial: Menu[]) {
	const menu: {
		items: Menu[]
		openedItemLabel: string | null
		openedSubItemLabel: string | null
	} = $state({
		items: initial,
		openedItemLabel: null,
		openedSubItemLabel: null
	})
	let timeoutId: number | undefined

	return {
		menu,
		openItem: (index: number) => {
			if (menu.openedItemLabel) {
				menu.items.map((item) => (item.isOpen = false))
			}
			clearTimeout(timeoutId)
			menu.items[index].isOpen = true
			menu.openedItemLabel = menu.items[index].label
		},
		closeItem: (index: number) => {
			timeoutId = setTimeout(() => {
				menu.items[index].isOpen = false
				menu.openedItemLabel = null
			}, 100)
		}
	}
}
export { createMenu }
