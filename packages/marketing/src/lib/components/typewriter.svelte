<script>
  import { onMount } from 'svelte';
  import Typed from 'typed.js';

  /** @type {{strings?: any, typeSpeed?: number, backSpeed?: number, loop?: boolean}} */
  let {
    strings = ['Hello, World!', 'Welcome to Svelte!', 'Enjoy the typewriter effect!'],
    typeSpeed = 50,
    backSpeed = 50,
    loop = true
  } = $props();

  let element = $state();

  onMount(() => {
    const typed = new Typed(element, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
    });

    return () => {
      // Clean up the Typed instance when the component is destroyed
      typed.destroy();
    };
  });
</script>

<span bind:this={element}></span>