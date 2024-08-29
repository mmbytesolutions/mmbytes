<!-- $lib/components/Contact.svelte -->
<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Phone } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		if (!name || !email || !message) {
			toast.error('Please fill in all fields');
			return;
		}

		// Simulate form submission
		toast.success('Message sent successfully!');

		name = '';
		email = '';
		message = '';
	}
</script>

<section id="contact" class="w-full bg-black/40 py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2" in:fade={{ delay: 200, duration: 600, easing: quintOut }}>
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Ready to Ignite Your Digital Future?
				</h2>
				<p class="mx-auto max-w-[600px] text-zinc-200 md:text-xl">
					Don't let your competitors leave you in the digital dust. Contact us now and let's create
					some tech magic together!
				</p>
			</div>
			<div
				class="w-full max-w-sm space-y-2"
				in:slide={{ delay: 400, duration: 600, easing: quintOut }}
			>
				<form class="flex flex-col gap-4" on:submit|preventDefault={handleSubmit}>
					<Input class="bg-white/10" bind:value={name} placeholder="Your Name" type="text" />
					<Input class="bg-white/10" bind:value={email} placeholder="Your Email" type="email" />
					<Textarea class="bg-white/10" bind:value={message} placeholder="Your Message" />
					<Button type="submit" variant="default" class="bg-white text-black hover:bg-zinc-200">
						Send Message
						<ArrowRight class="ml-2 h-4 w-4" />
					</Button>
				</form>
			</div>
			<div
				class="flex items-center justify-center space-x-4"
				in:fade={{ delay: 600, duration: 600, easing: quintOut }}
			>
				<Phone class="h-6 w-6" />
				<span class="text-zinc-200">+1 (720) 432-9393</span>
			</div>
		</div>
	</div>
</section>
