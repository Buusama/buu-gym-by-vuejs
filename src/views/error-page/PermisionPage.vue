<template>
  <div>
    <div class="container">
      <!-- BEGIN: Error Page -->
      <div
          class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left"
      >
        <div class="-intro-x lg:mr-20">
          <img
              alt="Buusama"
              class="h-48 lg:h-auto"
              src="../../assets/images/error-illustration.svg"
          />
        </div>
        <div class="text-white mt-10 lg:mt-0">
          <div class="intro-x text-8xl font-medium">403</div>
          <div class="intro-x text-xl lg:text-3xl font-medium mt-5">
            Oops. This page has gone missing.
          </div>
          <div class="intro-x text-lg mt-3">
            You may have't permission to access this page.
          </div>
          <button
              class="intro-x btn py-3 px-4 text-white border-white dark:text-slate-200 mt-10"
              @click="router.push('/')"
          >
            Back to Home
          </button>
        </div>
      </div>
      <!-- END: Error Page -->
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'PermisionPage',
  setup() {
    const router = useRouter()

    return {router}
  },
})
</script>
