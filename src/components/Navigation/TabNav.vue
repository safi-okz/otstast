<template>
    <div class="d-flex justify-content-between mt-3 mx-1">
        <div class="d-flex">
            <h6>Mange Jobs</h6> 
            <span class="mx-2">|</span>
            <i class='bx bx-home-alt'></i>
        </div>
        <button class="d-flex"><span>Add New Job</span> <i class='bx bx-plus ms-2' ></i></button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/variable.scss';
@import '../../assets/SCSS/mixin.scss';

.bx-home-alt{
    color: $primary_color;
    margin-top: .38rem;
}

h6{
    font-size: 1.25rem;
}

span{
    font-size: .875rem;
    margin-top: .2rem;
}

button{
    @include button;
    border: none;
    border-radius: .4rem;
}

.bx-plus{
    margin-top: .35rem;
}
</style>