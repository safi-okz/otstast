<template>
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="inline-block">
                    <router-link to="/e" class="font-color text-decoration-none">Home</router-link>
                    <router-link to="/" class="font-color text-decoration-none mx-3">Manage Jobs</router-link>
                    <router-link to="/w" class="font-color text-decoration-none">Business</router-link>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="inline-block text-center">
                    <img src="../../assets/img/plogo.svg" alt="" class="img-fluid">
                    <span class="puprle_text ms-2">Publish Jobs</span>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="d-flex justify-content-end">
                    <i class='bx bx-moon fs-4 font-color mt-2'></i>
                    <i class='bx bx-bell fs-4 mx-4 font-color mt-2' ></i>
                    <img src="../../assets/img/profile.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/mixin.scss';

.router-link-exact-active  {
    @include button
}
</style>