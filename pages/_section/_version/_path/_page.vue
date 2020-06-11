<template>
  <div>
    <div class="flex justify-between border-b mb-8 pb-4 text-sm border-gray-200 text-gray-600">
      <div>
        Last updated: {{ lastUpdated }}
      </div>
      <div>
        {{ page.readingTime.text }}
      </div>
    </div>

    <!-- <div class="flex mb-8 ">
      <div class="w-full">
        <div class="relative">
          <input class="border border-blue-500 placeholder-blue-600 font-serif w-full rounded-full p-2 pl-8 text-sm focus:outline-none shadow-solid-blue  focus:border-blue-600" placeholder="Search...">
        </div>
      </div>
      <div class="ml-6">
        <div class="relative">
          <select class="block appearance-none w-full bg-white font-bold border-blue-500 text-blue-600 border shadow-solid-blue border-blue-500 text-gray-700 h-full py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
            <option v-for="version in versions" :key="version" :value="version">
              {{ version }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
    </div> -->
    <nuxt-content :document="page" />
  </div>
</template>

<script>
const moment = require('moment')

export default {
  async asyncData ({ params, $content, error }) {
    try {
      const page = await $content(`${params.section}/${params.version}/${params.path}/${params.page}`).fetch()
      return {
        page
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {
    lastUpdated () {
      return this.page ? moment(this.page.updatedAt).format('Do MMMM YYYY') : null
    },
    versions () {
      return this.$store.state.versions[this.$route.params.section || 'hub-guides']
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
