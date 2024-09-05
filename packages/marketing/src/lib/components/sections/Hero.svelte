<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';
	import Typewriter from '../typewriter.svelte';
	import RiveLoader from '../loaders/riveLoader.svelte';
</script>

<section class="w-full py-6 md:py-12 lg:py-24 xl:py-32 h-svh md:grid md:place-items-center">
	<div class="container flex flex-col items-center justify-between px-4 md:px-6">
		<div class="flex flex-col items-start space-y-10">
			<div
				class="space-y-6 text-center !tracking-wide md:max-w-5xl"
				in:fade={{ delay: 200, duration: 600, easing: quintOut }}
			>
				<h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">
					<Typewriter />
					<!-- Transforming <span class="text-primary">Startups</span> through Innovative
					<span class="block text-primary">Web Development</span> -->
				</h1>
				<p class="mx-auto w-4/5 text-muted-foreground md:text-xl">
					Partner with MM Byte Solutions for expert technical consulting and unlock your business
					potential with custom software, automation, and AI Integration.
				</p>
			</div>
			<div
				class="flex w-full justify-center space-x-4"
				in:fly={{ y: 50, delay: 400, duration: 600, easing: quintOut }}
			>
				<Button class="!bg-primary hover:!bg-primary/90 active:!bg-primary/70" size="lg">
					Get Started
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button variant="outline" class="!border-primary !text-primary" size="lg">Learn More</Button
				>
			</div>
		</div>

		<!-- Space for Rive animation -->
		<div class="w-full flex-shrink-0"><RiveLoader /></div>
	</div>
</section>
