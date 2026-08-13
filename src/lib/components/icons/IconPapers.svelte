<script lang="ts">
  let { size = 20, color = 'currentColor' }: { size?: number; color?: string } = $props();
</script>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M7,3h7l5,5V19a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V5A2,2,0,0,1,7,3Z" />
  <path d="M14,3v5h5" />
  <path d="M9,13h6M9,17h4" />
</svg>
