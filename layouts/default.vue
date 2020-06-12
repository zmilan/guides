<template>
  <div class="font-sans text-gray-800">
    <div class="min-h-screen flex flex-col">
      <div class="flex-grow w-full">
        <div class="py-4 w-full md:py-8">
          <div class="flex items-center max-w-6xl mx-auto">
            <nuxt-link to="/" class="px-6 w-full md:w-auto md:pr-12">
              <logo class="w-8 md:w-12" />
            </nuxt-link>
            <div class="text-sm hidden md:block text-bold w-full">
              <nuxt-link
                to="/"
                class="inline-block mr-6 hover:text-pink-500 text-gray-800"
                exact-active-class="font-bold text-pink-500"
              >
                Getting started
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'api-guides'
                  }
                }"
                class="inline-block mr-6 hover:text-pink-500 text-gray-800"
                active-class="font-bold text-pink-500"
              >
                API Guides
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'hub-guides'
                  }
                }"
                class="inline-block mr-6 hover:text-pink-500 text-gray-800"
                active-class="font-bold text-pink-500"
              >
                Hub Guides
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'storefront-development'
                  }
                }"
                class="inline-block hover:text-pink-500 text-gray-800"
                active-class="font-bold text-pink-500"
              >
                Storefront Development
              </nuxt-link>
            </div>
            <div class="flex justify-end items-center pr-6">
              <div class="text-gray-800 flex">
                <a href="https://github.com/getcandy" title="View the GetCandy Github Organisation" target="_blank" rel="noopener noreferrer">
                  <svg
                    class="fill-current w-5 h-5 mr-6"
                    viewBox="0 0 33 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Github</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                      <g id="Artboard" transform="translate(-15.000000, -19.000000)">
                        <path id="Fill-4" d="M31.288,19 C22.294,19 15,26.293 15,35.29 C15,42.487 19.667,48.592 26.14,50.746 C26.955,50.896 27.252,50.393 27.252,49.961 C27.252,49.575 27.238,48.55 27.23,47.191 C22.699,48.175 21.743,45.007 21.743,45.007 C21.002,43.125 19.934,42.624 19.934,42.624 C18.455,41.614 20.046,41.634 20.046,41.634 C21.681,41.749 22.541,43.313 22.541,43.313 C23.994,45.802 26.354,45.083 27.282,44.666 C27.43,43.614 27.851,42.896 28.316,42.489 C24.699,42.078 20.896,40.68 20.896,34.438 C20.896,32.66 21.531,31.205 22.573,30.067 C22.405,29.655 21.846,27.998 22.733,25.756 C22.733,25.756 24.1,25.318 27.212,27.426 C28.511,27.064 29.905,26.884 31.29,26.877 C32.674,26.884 34.067,27.064 35.368,27.426 C38.478,25.318 39.843,25.756 39.843,25.756 C40.732,27.998 40.173,29.655 40.006,30.067 C41.05,31.205 41.68,32.66 41.68,34.438 C41.68,40.696 37.871,42.073 34.243,42.476 C34.827,42.979 35.348,43.973 35.348,45.493 C35.348,47.67 35.328,49.427 35.328,49.961 C35.328,50.397 35.622,50.904 36.448,50.745 C42.916,48.586 47.579,42.485 47.579,35.29 C47.579,26.293 40.285,19 31.288,19" />
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="https://discord.gg/v6qVWaf" title="Join us on Discord" target="_blank" rel="noopener noreferrer">
                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 146">
                    <title>Discord</title>
                    <path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fill-rule="nonzero" />
                  </svg>
                </a>
              </div>
              <div class="pl-6 inline-flex items-center md:hidden">
                <!-- <select v-if="!isRoot" class="border py-1 px-2 rounded" @input="changeVersion($event.target.value)">
                <option v-for="(v, index) in versions" :key="index" :value="v">
                  {{ v }}
                </option>
              </select> -->
                <button class="focus:outline-none md:hidden inline-flex items-center" @click="showNav = !showNav">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 text-pink-600 rounded"
                  ><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr class="striped h-2 md:h-4 border-none">
        <div class="md:flex max-w-6xl mx-auto pt-6 md:pt-12 ">
          <div :class="!showNav ? 'hidden' : 'block'" class="md:block w-full md:w-1/3 lg:w-1/4 xl:w-1/5 px-6 pt-1 pb-12 overflow-auto min-h-screen">
            <div class="md:hidden mb-8">
              <nuxt-link
                to="/"
                class="block  hover:text-pink-500 text-gray-800"
              >
                Getting started
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'hub-guides'
                  }
                }"
                class="block hover:text-pink-500 text-gray-800"
              >
                Hub Guides
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'api-guides'
                  }
                }"
                class="block  hover:text-pink-500 text-gray-800"
              >
                API Guides
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'section',
                  params: {
                    section: 'storefront-development'
                  }
                }"
                class="block hover:text-pink-500 text-gray-800"
                active-class="font-bold text-pink-500"
              >
                Storefront Development
              </nuxt-link>
            </div>
            <nav class="text-gray-700 mb-8">
              <a href="https://getcandy.io/" class="mb-2 w-full inline-flex items-center hover:text-pink-500">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 mr-2 text-pink-500"
                ><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                GetCandy Website
              </a>
              <a href="https://community.getcandy.io/" class="block inline-flex items-center hover:text-pink-500">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 mr-2 text-pink-500"
                ><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                Community
              </a>
              <hr v-if="topNav.length" class="border-t bg-gray-100 my-4 w-1/3">
              <a
                v-for="(topNavItem, index) in topNav"
                :key="index"
                :title="topNavItem.title"
                :href="topNavItem.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block mb-2 inline-flex items-center hover:text-pink-500"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 mr-2 text-gray-400"
                ><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                {{ topNavItem.title }}
              </a>
            </nav>
            <nav>
              <nav v-for="(navSection, index) in navigation" :key="index" class="mb-4">
                <header>
                  <h3 class="font-serif text-lg mb-4">
                    {{ navSection.heading }}
                  </h3>
                </header>
                <section v-for="(item, itemIndex) in navSection.items" :key="itemIndex">
                  <template v-if="!item.children">
                    <nuxt-link
                      :key="itemIndex"
                      :to="{
                        name: navSection.route,
                        params: {
                          page: item.page,
                          ...{
                              path: item.path,
                              version
                            }
                        }
                      }"
                      class="block mb-1"
                      exact-active-class="font-bold text-blue-800"
                    >
                      {{ item.title }}
                    </nuxt-link>
                  </template>
                  <template v-else>
                    <h4 class="mb-2 mt-4 text-blue-500 font-bold text-sm">
                      {{ item.title }}
                    </h4>
                    <section class="ml-2">
                      <nuxt-link
                        v-for="(link, linkIndex) in item.children"
                        :key="linkIndex"
                        :to="{
                          name: navSection.route,
                          params: {
                            page: link.page,
                            ...{
                              path: item.path,
                              section: item.section,
                              version
                            }
                          }
                        }"
                        class="block mb-1"
                        exact-active-class="font-semibold"
                      >
                        {{ link.title }}
                      </nuxt-link>
                    </section>
                  </template>
                </section>
              </nav>
            </nav>
          </div>
          <div class="w-full lg:w-3/4 xl:w-4/5 px-4 lg:px-6 xl:px-12" :class="showNav ? 'overflow-state ' : null">
            <nuxt />
          </div>
        </div>
      </div>
      <div class="border-t bg-blue-800 text-blue-500 py-4 mt-24 text-sm px-6">
        <div class="md:flex max-w-6xl mx-auto">
          Copyright 2020 GetCandy &nbsp; &middot; &nbsp; <a href="https://www.freepik.com/free-photos-vectors/candy" target="_blank" rel="noopener noreferrer">Candy vector created by freepik</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showNav: false
    }
  },
  computed: {
    version () {
      return this.$store.state.version
    },
    section () {
      return this.$route.params.section
    },
    currentSection () {
      /**
       * This is pretty gross and needs improving
       */
      if (this.$route.name === 'storefront-development-page' || this.$route.name === 'storefront-development-example-storefront-page') {
        return 'storefront-development'
      }
      return this.$route.name === 'getting-started-section-page' ? 'getting-started' : this.section || 'getting-started'
    },
    topNav () {
      return this.$store.state.navigation[this.currentSection].topNav || []
    },
    navigation () {
      return this.$store.state.navigation[this.currentSection].sideNav || []
    },
    isRoot () {
      return this.$route.path === '/'
    }
  },
  watch: {
    '$route' (to, from) {
      this.showNav = false
    }
  }
}
</script>
