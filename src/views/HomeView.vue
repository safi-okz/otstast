<template>
  <div class="px-2">
    <TabNav />
    <SearchBar />
    <div class="row">
      <div class="col-lg-7 col-md-7 col-sm-12">
        <AsyncUser></AsyncUser>  
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, defineAsyncComponent } from 'vue';
import TabNav from '../components/Navigation/TabNav.vue';
import SearchBar from '../components/Navigation/SearchBar.vue';


const AsyncUser = defineAsyncComponent({
   loader: () => import('../components/JobCard/JobCard.vue'),
   loadingComponent: 'Loading',
   suspensible: false,
  //  errorComponent: ErrorComp,
   delay: 200,
   timeout: 3000
}
)


</script>

<style lang="scss" scoped>

</style>
