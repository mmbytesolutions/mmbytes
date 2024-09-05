<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as rive from '@rive-app/canvas';

  export let src: string = 'ns-hero.riv';
  export let width: number = 500;
  export let height: number = 500;
  export let artboard: string | undefined = undefined;
  export let stateMachines: string | string[] | undefined = 'ATimeline 1';
  export let autoplay: boolean = true;

  let canvas: HTMLCanvasElement;
  let riveInstance: rive.Rive;

  onMount(() => {
    riveInstance = new rive.Rive({
      src,
      canvas,
      artboard,
      stateMachines,
      autoplay,
      onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
      },
    });

    const handleResize = () => {
      riveInstance?.resizeDrawingSurfaceToCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  onDestroy(() => {
    riveInstance?.cleanup();
  });
</script>

<canvas bind:this={canvas} {width} {height}></canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
</style>
