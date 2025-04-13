<template>
  <div class="">
    <div class="tw-flex tw-justify-center tw-my-16">
      <div class="tw-w-52 tw-h-44 tw-rounded-lg tw-border-2 tw-border-gray-200 tw-mx-2 md:tw-mx-4">
        <div class="tw-text-center tw-pt-14 tw-text-2xl tw-uppercase tw-font-semibold text-accent">
          ₦{{ new Intl.NumberFormat('en-US').format(amountCountList.sum_total) }}
        </div>
        <div class="text-accent tw-text-center tw-pt-1 tw-font-semibold">
          Total Raised
        </div>
      </div>
      <div class="tw-w-52 tw-h-44 tw-rounded-lg tw-border-2 tw-border-gray-200 tw-mx-2 md:tw-mx-4">
        <div class="tw-text-center tw-pt-14 tw-text-2xl tw-uppercase tw-font-semibold text-accent">
          {{ amountCountList.donations }}
        </div>
        <div class="text-accent tw-text-center tw-pt-1 tw-font-semibold">
          Number of donations
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import donationService from '../../services/donations';

export default defineComponent({
  name: "AnalysisSection",
  
  setup() {
    const amountCountList = ref([])

    const totalAmountRaised = () => {
      donationService.getDonationsCount()
      .then((res) => {
        amountCountList.value = res.data
      })
      .catch((err) => {
        console.log(err);
      })
    }
    totalAmountRaised()

    return {
      amountCountList
    }
  },
})
</script>
