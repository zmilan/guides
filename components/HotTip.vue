<template>
  <div class="bg-blue-900 text-white">
    {{ type }}
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    }
  }
}
</script>
