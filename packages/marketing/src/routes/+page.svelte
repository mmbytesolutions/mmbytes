<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import Header from '$lib/components/sections/Header.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	const [send, receive] = crossfade({
		duration: 600,
		easing: quintOut
	});
</script>

<div
	class="flex min-h-screen flex-col"
>
	<Header />
	<main class="flex-1">
		<Hero />
		<Services />
		<About />
		<Contact />
	</main>
	<Footer />
</div>
