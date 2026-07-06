<script lang="ts">
  import { GeometrizedImage, type GeometrizeSource } from '@nomideusz/svelte-geometrize';
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
  let webpSrc = $derived(src.replace(/\.png$/, '.webp'));
  let sources: GeometrizeSource[] = $derived([
    { srcset: webpSrc, type: 'image/webp' }
  ]);
</script>

{#if placeholder}
  <GeometrizedImage
    {placeholder}
    {src}
    {sources}
    {alt}
    reveal="scatter"
    class={className}
    loading="lazy"
  />
{:else}
  <picture class={className}>
    <source srcset={webpSrc} type="image/webp" />
    <img {src} {alt} class={className} loading="lazy" />
  </picture>
{/if}
