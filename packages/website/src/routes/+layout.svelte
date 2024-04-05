<script>
	import Button from '$lib/components/ui/button/button.svelte'
	import '../app.pcss'
</script>

<main class="grid h-screen place-content-center">
	<div class="md:rounded-lg md:border-2 md:p-8">
		<slot />
	</div>
</main>
