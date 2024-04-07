<script lang="ts">
	import { Navigation, type Menu } from '$lib/components/blocks/navigation-menu'
	import Button from '$lib/components/ui/button/button.svelte'

	let menuItems: Menu[] = [
		{
			label: 'Who We Are',
			href: '#who-we-are'
		},
		{
			label: 'What We Do',
			href: '#what-we-do'
		},
		{
			label: 'What We Offer',
			href: '#what-we-offer'
		}
	]
</script>

<div class="w-full shadow-sm">
	<div
		class="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2">
		<span class="w-52">MMByte</span>
		<Navigation
			{menuItems}
			class="mx-auto w-fit" />
		<div class="w-52">
			<Button class="float-right">Schedule a Consultation</Button>
		</div>
	</div>
</div>
