<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.pcss';
</script>

<Button onclick={() => console.log('hello')}>Hello</Button>
<slot />
