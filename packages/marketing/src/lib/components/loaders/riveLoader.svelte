<script lang="ts">
    import pkg from '@rive-app/canvas';
	import { onMount } from 'svelte';
    const { Rive } = pkg;
  
    let canvas: HTMLCanvasElement;
  
    onMount(() => {
      const rive = new Rive({
        src: 'https://cdn.rive.app/animations/vehicles.riv', // Puedes cambiar la URL a cualquier animación de Rive
        canvas: canvas,
        autoplay: true,
      });
  
      return () => rive.cleanup();
    });
  </script>
  
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <canvas bind:this={canvas} class="w-1/2 h-1/2"></canvas>
  </div>
  
  <style>
    canvas {
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  </style>
