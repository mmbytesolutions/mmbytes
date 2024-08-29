<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fade, slide } from 'svelte/transition';
  import { Marquee } from '@selemondev/svelte-marquee';
  import '@selemondev/svelte-marquee/dist/style.css';

  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '100+', label: 'Satisfied Clients' },
    { value: '500+', label: 'Projects Completed' },
    { value: '24/7', label: 'Support' },
  ];
</script>

<section id="about" class="w-full py-12 md:py-24 lg:py-32">
  <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2" in:fade={{ delay: 200, duration: 600, easing: quintOut }}>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose MMBytes?
        </h2>
        <p class="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
          We're not your average tech consultants. We're the digital alchemists who turn your business challenges into golden opportunities.
        </p>
      </div>
      <Marquee direction="left" pauseOnHover={true} innerClassName="gap-12">
        <ul class="flex">
          {#each stats as stat (stat.label)}
            <li class="flex flex-col items-center space-y-2 border border-zinc-700 p-4 rounded-lg">
              <span class="text-2xl font-bold">{stat.value}</span>
              <span class="text-sm text-zinc-300">{stat.label}</span>
            </li>
          {/each}
        </ul>
      </Marquee>
    </div>
  </div>
</section>
