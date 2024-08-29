<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  export let text: string = '';
  export let delay: number = 0;
  export let cursor: string = '|';
  export let cursorSpeed: number = 500;
  export let typeSpeed: number = 100;

  let currentText = '';
  let isTyping = true;
  let cursorVisible = true;

  const typewriterText = tweened(text, {
    duration: text.length * typeSpeed,
    easing: quintOut,
    delay,
  });

  typewriterText.subscribe((value) => {
    currentText = value;
    if (value === text) {
      isTyping = false;
    }
  });

  const toggleCursor = () => {
    cursorVisible = !cursorVisible;
  };

  const cursorInterval = setInterval(toggleCursor, cursorSpeed);
</script>

<span>
  {currentText}
  {#if isTyping || cursorVisible}
    <span class="inline-block">{cursor}</span>
  {/if}
</span>

<style>
  span {
    white-space: pre;
  }
</style>