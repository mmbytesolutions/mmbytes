<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as rive from '@rive-app/canvas';
	import { fade } from 'svelte/transition';
	import { cn } from '@/utils';

	interface Props {
		src?: string;
		width?: number;
		height?: number;
		artboard?: string | undefined;
		autoplay?: boolean;
		class?: string | string[];
	}

	let {
		src = 'ns-hero.riv',
		width = 500,
		height = 500,
		artboard = undefined,
		autoplay = true,
		class: className = ''
	}: Props = $props();

	let canvas = $state() as HTMLCanvasElement;
	let riveInstance: rive.Rive;
	let isLoaded = $state(false);

	onMount(() => {
		isLoaded = true;
		riveInstance = new rive.Rive({
			src,
			canvas,
			artboard,
			autoplay,
			onLoad: () => {
				riveInstance.resizeDrawingSurfaceToCanvas();
			}
		});

		const handleResize = () => {
			riveInstance?.resizeDrawingSurfaceToCanvas();
		};

		window.addEventListener('resize', handleResize);
		console.log('loaded');

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		riveInstance?.cleanup();
	});
</script>

<div class={cn(className)}>
	<canvas class="max-h-[50vh] w-full" bind:this={canvas} {width} {height}></canvas>
</div>
