<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';
	import Typewriter from '../typewriter.svelte';
</script>

<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
	<div class="container flex items-center justify-between px-4 md:px-6">
		<div class="flex flex-col items-start space-y-4 text-left">
			<div class="space-y-2" in:fade={{ delay: 200, duration: 600, easing: quintOut }}>
				<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
					<Typewriter
						data={{
							static: 'Transforming {business_type} Through Innovative {service_type}',
							dynamic: {
								business_type: ['Startups', 'Enterprises', 'SMBs', 'Non-Profits'],
								service_type: [
									'Web Development',
									'Mobile Apps',
									'AI Integration',
									'Process Automation'
								]
							}
						}}
					/>
				</h1>
				<p class="max-w-[700px] text-zinc-200 md:text-xl">
					Partner with MM Byte Solutions for expert technical consulting and unlock your business
					potential with custom software, automation, and AI Integration.
				</p>
			</div>
			<div class="space-x-4" in:fly={{ y: 50, delay: 400, duration: 600, easing: quintOut }}>
				<Button variant="default" class="bg-white text-black hover:bg-zinc-200">
					Get Started
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button variant="outline">Learn More</Button>
			</div>
		</div>

		<!-- Space for Rive animation -->
		<div class="w-1/2 max-w-lg flex-shrink-0"></div>
	</div>
</section>
