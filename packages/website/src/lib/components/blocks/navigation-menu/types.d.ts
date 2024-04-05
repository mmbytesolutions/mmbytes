export type MenuItem = {
	label: string
	shortcut?: string
	items?: MenuItem[]
}

export type Menu = {
	label: string
	items?: MenuItem[]
}
