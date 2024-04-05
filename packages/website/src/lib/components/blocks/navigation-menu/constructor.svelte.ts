import type { Menu } from './types'

function createMenu(initial: Menu[]) {
	const menu: { items: Menu[]; openedItemLabel: string | null } = $state({
		items: initial,
		openedItemLabel: null
	})

	return {
		menu,
		openItem: (index: number | null) => {
			if (index) {
				menu.items[index].isOpen = true
				menu.openedItemLabel = menu.items[index].label
			}
		},
		closeItem: (index: number | null) => {
			if (index) {
				menu.items[index].isOpen = false
				menu.openedItemLabel = null
			}
		}
	}
}
export { createMenu }
