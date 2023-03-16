<template>
    <div class="card card-body my-4" v-for="job in jobsData" :key="job.id">
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <img src="../../assets/img/dell.svg" alt="" class="img-fluid img-logo rounded me-2">
                <div>
                    <h6 class="mb-0">{{ job.title }}</h6>
                    <div class="mb-0 pb-0">
                        <span class="font-color">
                            <i class='bx bx-buildings'></i>
                        </span>
                        <span class="font-color mx-1">{{ job.business.name }}</span>
                        <span>
                            <router-link to="/"><i class='bx bx-link-external'></i></router-link>
                        </span>
                    </div>
                    <div class="pt-0 div-height">
                        <span class="font-color">
                            <i class='bx bx-map'></i>
                        </span>
                        <span class="font-color ms-1">{{ job?.business_addresses[0]?.city.title || 'No address' }} {{ job?.business_addresses[0]?.country.title }}</span>
                    </div>
                </div>
            </div>
            <div>
                <p class="mb-0 status" 
                :class="[job.status.status === 'active' ? 'active' : '' ||
                        job.status.status === 'draft' ? 'draft' : '' || 
                        job.status.status === 'pending' ? 'pending' : '' || 
                        job.status.status === 'expired' ? 'expired' : '' ||
                        job.status.status === 'closed' ? 'closed' : '' ||
                        job.status.status === 'inprocess' ? 'inprocess' : '']">{{ job.status.status }}</p>
                <i class='bx bx-message-square-edit mt-0'></i>
            </div>
        </div>
        <div class="d-flex justify-content-between mt-2">
            <div v-if="job.status.status === 'draft'">
                <img src="../../assets/img/notpossiable.svg" alt="" class="img-fluid user_icon">
                <span class="font-color mx-1"><span class="incomplete">InComplete</span> Please complete your Application</span>
                <span>
                    <router-link to="/"><i class='bx bx-link-external'></i></router-link>
                </span>
            </div>
            <div v-if="job.status.status !== 'draft'">
                <img src="../../assets/img//user.svg" alt="" class="img-fluid user_icon">
                <span class="font-color mx-1">{{ job.jobs_applied.length }} Application Recieved</span>
                <span>
                    <router-link to="/"><i class='bx bx-link-external'></i></router-link>
                </span>
            </div>
            <div class="d-flex" v-if="job.status.status !== 'draft'">
                <span class="form-check-label font-color" for="flexSwitchCheckChecked">Disabled</span>
            <span class="form-check form-switch ms-3">
               
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" :checked="job.business_addresses[0]?.status === 'active' ? true : false">
            </span>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between mt-3">
            <div class="d-flex mt-3">
                <span>
                    <img src="../../assets/img/postUserIcon.svg" alt="" class="img-fluid post_user">
                </span>
                <span class="font-color ms-1 post_span">
                    Posted by {{ job.jobusers[0].username.username }} <span class="puprle_text">{{ dateFrom(job.created_at) }}</span>
                </span>
            </div>
            <div class="d-flex">
                <button class="analytics_btn d-flex">
                    <img src="../../assets/img/graph.svg" alt="" class="img-fluid me-1 mt-1">
                    <span>View Analytics</span>
                </button>
                <button class="campaign_btn d-flex ms-3">
                    <img src="../../assets/img/circle.svg" alt="" class="img-fluid mt-1 me-1">
                    <span class="">Campaign now</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useJobStore } from '../../stores/getJob';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const dateFrom = (ddd) => {
    const timeAgo = new TimeAgo('en-US');
   return timeAgo.format(new Date(ddd))
}

const jobStore = useJobStore();

const jobsData = computed(() => jobStore.jobs);
const loading = computed(() => jobStore.loading);

await jobStore.getJobsAction();
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/variable.scss';
@import '../../assets/SCSS/mixin.scss';

.card-body {
    border-radius: .6rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

span {
    font-size: .7rem;
}

h6 {
    font-size: 1.25rem;
    font-weight: 500;
    width: 12rem;
}

.img-logo {
    height: 3.1rem;
    width: 3.3rem;
    border: 2px solid $primary_color;
}

.div-height {
    margin-top: -6px;
}

.status {
    font-size: .875rem;
}

.user_icon{
    height: 1.5rem;
    width: 1.5rem;
}

.post_user {
    width: .8rem;
    height: .8rem;
}

.post_span{
    margin-top: .2rem;
}

.analytics_btn {
        background-color: $analytics_background;
        border: none;
        border-radius: .3rem;
        color: $primary_color;
        padding: .5rem 1rem;
        
        span{
            font-size: 1rem;
        }
}

.campaign_btn {
    @include button;
    border: none;

    span{
        font-size: 1rem;
    }
}

.active{
    color: #30D137;
}

.expired {
    color: #F33939;
}

.closed {
    color: #000000;
}

.draft {
    color: #E4740C;
}

.inprocess {
    color: #8477FA;
}

.incomplete{
    color: #E4740C;
}

.pending {
    color: #666; 
}
</style>