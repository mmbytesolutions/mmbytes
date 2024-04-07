export type MenuItem = {
	label: string
	href?: string
	action?: () => void
	isOpen?: boolean
	shortcut?: string
	items?: MenuItem[]
}

export type Menu = {
	label: string
	href?: string
	isOpen?: boolean
	items?: MenuItem[]
}
