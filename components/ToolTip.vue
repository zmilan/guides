<template>
  <div class="relative">
    <div class="absolute transform -skew-y-6 -ml-1 -mt-2 text-white px-3 py-1 rounded-md font-serif" :class="`bg-${theme.shadowColor}`">
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        {{ type == 'info' ? 'Info!' : 'Heads up!' }}
      </template>
    </div>
    <div class="box font-serif rounded-md border-2 p-4 my-6 pt-10" :class="`border-${theme.baseColor} bg-${theme.highlightColor} ${theme.textColor}`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      themes: {
        info: {
          baseColor: 'blue-500',
          highlightColor: 'blue-100',
          shadowColor: 'blue-700',
          textColor: 'text-blue-700'
        },
        danger: {
          baseColor: 'red-500',
          highlightColor: 'red-100',
          shadowColor: 'red-600',
          textColor: 'text-red-700'
        }
      }
    }
  },
  computed: {
    theme () {
      return this.themes[this.type]
    }
  }
}
</script>

<style scoped>
.box {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fefdff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}
.box p {
  margin: 0;
}
</style>
