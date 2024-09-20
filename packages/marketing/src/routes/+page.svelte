<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import Header from '$lib/components/sections/Header.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Card from '$lib/components/sections/Card.svelte'; 
	import { fly } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: 600,
		easing: quintOut
	});

	const caseStudies = [
	  {
		title: "Expert Home Inspections You Can Trust",
		description: "Safeguarding your biggest investment with top-quality inspections in Florida. We offer mold testing, wind mitigation, roof certifications, and more.",
		imageUrl: "/img7.jpg",
		href: "https://rnainspection.com/"
	  },
	  {
		title: "Plumbing Emergencies Solved Fast",
		description: "24/7 emergency plumbing service in Miami and nearby areas. Quick, reliable solutions for drain cleaning, repairs, water heaters, and more.",
		imageUrl: "/img8.jpg",
		href: "https://urgentplumbingservices.com/"
	  },
	  {
		title: "IAward-Winning Custom Designs & Branding Solutions",
		description: "Over 10 years of experience in web design, app development, and digital branding. We deliver fully responsive, custom projects that make your brand stand out.",
		imageUrl: "/img9.jpg",
		href: "https://multipage-99up.vercel.app/"
	  }
	];
</script>

<div
	class="flex min-h-screen flex-col"
>
	<Header />
	<main class="flex-1">
		<Hero />
		<Services />

		<section id="case-studies" class="py-24">
			<div class="container mx-auto px-6">
			  <h2 class="text-5xl font-bold text-center text-gray-800 mb-16">Digital Solutions Delivered</h2>
			  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
				{#each caseStudies as study, index}
				  <div in:fly={{y: 50, duration: 500, delay: index * 200}}>
					<Card 
					  title={study.title}
					  description={study.description}
					  imageUrl={study.imageUrl}
					  href={study.href}
					/>
				  </div>
				{/each}
			  </div>
			</div>

		  </section>
		<About />
		<Contact />
	</main>
	<Footer />
</div>
