<template>
  <div class="tw-flex tw-justify-center bg-grey-2 tw-h-screen">
    <div class="tw-bg-white tw-h-96 tw-w-full tw-mx-4 sm:tw-mx-0 sm:tw-w-96 tw-rounded-md tw-mt-24">
      <div class="tw-bg-primaryColor tw-w-28 tw-h-28 tw-rounded-full tw-mx-auto tw-mt-12 tw-border-8 tw-py-8">
        <svg class="tw-mx-auto" width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 12L12.5 23L34.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="tw-text-center tw-text-xl tw-font-semibold tw-pt-4">
        Transaction successful
      </div>
      <div class="tw-text-base tw-pt-1 tw-text-gray-600 tw-text-center">
        Your payment of {{ successList.amount }} has been <br>
        successfully sent to Babagana <br>
        Zulum support.
      </div>
      <div class="tw-flex tw-justify-center tw-mt-7">
        <q-btn no-caps unelevated color="accent" class="tw-w-44 tw-h-10 tw-rounded-lg" label="Go Home" @click="moveToHome" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import donationService from '../../services/donations';

export default defineComponent({
  name: "SuccessPayment",
  
  setup() {
    const $router = useRouter()
    const $route = useRoute()
    const successList = ref([])

    const moveToHome = () => {
      $router.push('/')
    }

    const verifyTransaction = () => {
      donationService.verifyDonation($route.query.transaction_id)
      .then((res) => {
        successList.value = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      })
    }
    verifyTransaction()

    return {
      moveToHome,
      successList
    }
  },
})
</script>
