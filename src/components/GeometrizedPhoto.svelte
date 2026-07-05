<script lang="ts">
  import { GeometrizedImage } from '@nomideusz/svelte-geometrize';
  import placeholdersData from '../content/image-placeholders.json';

  let {
    imageKey,
    src,
    alt,
    class: className = '',
  }: {
    imageKey: keyof typeof placeholdersData;
    src: string;
    alt: string;
    class?: string;
  } = $props();

  let placeholder = $derived(placeholdersData[imageKey] as any);
</script>

{#if placeholder}
  <GeometrizedImage
    {placeholder}
    {src}
    {alt}
    class={className}
    loading="lazy"
  />
{:else}
  <img {src} {alt} class={className} loading="lazy" />
{/if}
