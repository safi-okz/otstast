<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TopNavigationBar from './components/Navigation/TopNavigationBar.vue';

import { onErrorCaptured, ref } from 'vue';
const errMsg = ref(null);
onErrorCaptured((err) => {
  errMsg.value = `Error message ${err}`
})
</script>

<template>
  <div class="container-fluid px-4">
    <TopNavigationBar />
    <RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition mode="out-in">
      <KeepAlive>
        <div v-if="errMsg"><h1>{{errMsg}}</h1></div>
        <Suspense v-else timeout="0">
          <!-- main content -->
          <component :is="Component"></component>

          <!-- loading state -->
          <template #fallback>
            <h1>Loading............................................................</h1>
            <img src="./assets/b6e0b072897469.5bf6e79950d23.gif" alt="" srcset="">
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
  </div>
</template>
