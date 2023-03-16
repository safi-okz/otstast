<template>
    <div class="row mt-4">
        <div class="col-lg-7 col-md-7 col-sm-12 d-flex"> 
            <button class="select d-flex"><span class="me-5 mt-1">All Category</span><i class='bx bx-chevron-down ms-5 ps-2 fs-3 mt-1' ></i></button>
            <div class="d-flex flex-grow-1 border rounded ms-4 ps-4 py-0">
                <img src="../../assets/img/search.svg" alt="" class="img-fluid">
                <input class="form-control border-0" type="text" placeholder="Search job" aria-label="default input example">
                <button>Search</button>
            </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12"> 
            <div class="d-flex">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Date</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select mx-4 py-2" aria-label="Default select example">
                    <option selected>Company</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/mixin.scss';
@import '../../assets/SCSS/mixin.scss';

.select {
    @include button;
    border: none;
    border-bottom-left-radius: .3rem;
    border-top-left-radius: .3rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-size: 1.25rem;
    padding: 0rem 1rem;
}

button{
    @include button;
    border: none;
    padding: 0rem 2rem;
}
</style>