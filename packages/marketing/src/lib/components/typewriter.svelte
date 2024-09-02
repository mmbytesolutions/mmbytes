<script>
  import { onMount } from 'svelte';
  import Typed from 'typed.js';

  export let data = {
    static: "Transforming {business_type} Through Innovative {service_type}",
    dynamic: {
      business_type: ["Startups", "Enterprises", "SMBs", "Non-Profits"],
      service_type: ["Web Development", "Mobile Apps", "AI Integration", "Process Automation"]
    }
  };

  let businessTypeElement;
  let serviceTypeElement;
  let businessTypeTyped;
  let serviceTypeTyped;

  onMount(() => {
    const commonOptions = {
      typeSpeed: 500,
      backSpeed: 300,
      loop: true,
      smartBackspace: true,
    };

    businessTypeTyped = new Typed(businessTypeElement, {
      ...commonOptions,
      strings: data.dynamic.business_type,
    });

    serviceTypeTyped = new Typed(serviceTypeElement, {
      ...commonOptions,
      strings: data.dynamic.service_type,
    });

    return () => {
      if (businessTypeTyped) businessTypeTyped.destroy();
      if (serviceTypeTyped) serviceTypeTyped.destroy();
    };
  });

  function getStaticParts() {
    return data.static.split(/{business_type}|{service_type}/);
  }
</script>

<div>
  {#each getStaticParts() as part, index}
    {#if index === 0}
      {part}
    {:else if index === 1}
      {part}<span bind:this={businessTypeElement} class="typed-text"></span>
    {:else}
      {part}<span bind:this={serviceTypeElement} class="typed-text"></span>
    {/if}
  {/each}
</div>

<style>
  .typed-text {
    color: #007bff;
    font-weight: bold;
  }
</style>