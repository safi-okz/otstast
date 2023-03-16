import axios from 'axios'
import { defineStore } from 'pinia'

export const useJobStore = defineStore('jobStore', {
        state: () => ({
                jobs: [],
                loading: false
        }),
        getters: {

        },
        actions: {
          async getJobsAction() {
            this.loading = true;
            try{

              const response = await axios.get('https://api.publish.jobs/api/user-business-jobs', {
                headers: {
                  Authorization: 'Bearer 664|TZZ7zHnAkQRnVuY5wP0s2xQLoCKzZ7Kl1oLTjEeO'
                }
              });
              const data = await response.data.data;
              this.jobs = data;
              console.log('data ', data);
            } catch(error) {
              console.log('error ', error);
            } finally{
              this.loading = false;
            }

          }
        }
})
