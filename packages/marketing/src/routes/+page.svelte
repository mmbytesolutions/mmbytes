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
    fallback: null,
    duration: 600,
    easing: quintOut,
  });
</script>

<div class="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
  <Header />
  <main class="flex-1">
    {#key 'hero'}
      <div in:receive={{ key: 'hero' }} out:send={{ key: 'hero' }}>
        <Hero />
      </div>
    {/key}
    {#key 'services'}
      <div in:receive={{ key: 'services' }} out:send={{ key: 'services' }}>
        <Services />
      </div>
    {/key}
    {#key 'about'}
      <div in:receive={{ key: 'about' }} out:send={{ key: 'about' }}>
        <About />
      </div>
    {/key}
    {#key 'contact'}
      <div in:receive={{ key: 'contact' }} out:send={{ key: 'contact' }}>
        <Contact />
      </div>
    {/key}
  </main>
  <Footer />
</div>