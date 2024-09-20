<script lang="ts">
    export let title: string;
    export let description: string;
    export let imageUrl: string;
    export let href: string;
  
    let isHovered = false;
  </script>
  
  <a
    {href}
    class="block relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
  >
    <img
      src={imageUrl}
      alt={title}
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300"
      class:opacity-90={isHovered}
    ></div>
    <div class="absolute inset-0 p-6 flex flex-col justify-end">
      <h3 class="text-xl font-bold text-white mb-2 transition-transform duration-300 transform translate-y-0" class:translate-y-0={isHovered}>
        {title}
      </h3>
      <p
        class="text-white text-sm opacity-0 transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
        class:opacity-100={isHovered}
        class:max-h-40={isHovered}
      >
        {description}
      </p>
    </div>
  </a>