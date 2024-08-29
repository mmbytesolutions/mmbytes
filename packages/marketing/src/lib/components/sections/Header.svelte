<script lang="ts">
  import { Zap } from 'lucide-svelte';
</script>

<header class="px-4 lg:px-6 h-14 flex items-center">
  <a class="flex items-center justify-center" href="#">
    <Zap class="h-6 w-6 mr-2" />
    <span class="font-bold text-lg">MMBytes</span>
  </a>
  <nav class="ml-auto flex gap-4 sm:gap-6">
    <a class="text-sm font-medium hover:underline underline-offset-4" href="#services">Services</a>
    <a class="text-sm font-medium hover:underline underline-offset-4" href="#about">About</a>
    <a class="text-sm font-medium hover:underline underline-offset-4" href="#contact">Contact</a>
  </nav>
</header>
