<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const path = params.path || 'index'
    const page = await $content(`${params.section}/${params.version}/${path}`).fetch()

    return {
      page
    }
  },
  computed: {
    version () {
      return this.$store.state.version
    },
    section () {
      return this.$route.params.section
    }
  },
  watch: {
    version (val) {
      this.$router.push({
        params: {
          section: this.section,
          version: val,
          path: this.$route.params.path
        }
      })
    }
  }
}
</script>
