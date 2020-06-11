<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const page = await $content(`getting-started/${params.section}/${params.page}`).fetch()
    return {
      page
    }
  },
  head () {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}
</script>
