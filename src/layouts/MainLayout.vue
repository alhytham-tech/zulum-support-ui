<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row tw-justify-center">
      <div class="col-12 col-xl-9">
        <div class="tw-bg-white tw-text-black tw-mt-4 lg:tw-mx-24">
          <q-toolbar>
            <div class="text-accent tw-pl-3 tw-text-base md:tw-hidden">
              Zulum <span class="tw-font-semibold">Foundation</span>
            </div>
            <q-space />
            <q-btn
              flat
              size="lg"
              round
              icon="menu"
              color="accent"
              aria-label="Menu"
              @click="toggleLeftDrawer"
              class="md:tw-hidden"
            />

            <q-toolbar-title class="text-accent md:-tw-ml-36 lg:-tw-ml-56 tw-hidden md:tw-block">
              Zulum <span class="tw-font-semibold">Support</span>
            </q-toolbar-title>

            <div class="tw-text-base tw-w-28 tw-text-center tw-hidden md:tw-block">
              <q-btn flat no-caps class="tw-text-base tw-rounded-3xl" color="black" label="Biography" @click="moveToHome" />
            </div>
            <div class="tw-text-base tw-w-28 tw-text-center tw-hidden md:tw-block">
              <q-btn flat no-caps class="tw-text-base tw-rounded-3xl" color="black" label="Projects" @click="moveToProjects" />
            </div>
            <div class="tw-text-base tw-w-28 tw-text-center tw-hidden md:tw-block">
              <q-btn flat no-caps class="tw-text-base tw-rounded-3xl" color="black" label="Gallery" @click="moveToReview" />
            </div>
            <div class="tw-text-base tw-w-28 tw-text-center tw-hidden md:tw-block">
              <q-btn flat no-caps class="tw-text-base tw-rounded-3xl" color="black" label="Donors" @click="moveToDonorsList" />
            </div>
            <div class="tw-text-base tw-w-36 lg:tw-w-44 tw-text-center tw-hidden md:tw-block">
              <q-btn color="accent" label="Donate" no-caps unelevated class="tw-w-24 tw-rounded-3xl" @click="donateDialog = true" />
            </div>
          </q-toolbar>
        </div>

        <q-drawer
          v-model="leftDrawerOpen"
          bordered
          side="right"
        >
          <q-list class="tw-mt-6">
            <q-item clickable v-ripple @click="moveToHome">
              <q-item-section class="tw-text-base">Biography</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="moveToProjects">
              <q-item-section class="tw-text-base">Projects</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="moveToDonorsList">
              <q-item-section class="tw-text-base">Donors</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="moveToReview">
              <q-item-section class="tw-text-base">Gallery</q-item-section>
            </q-item>
          </q-list>
          <q-card-actions align="center">
            <q-btn no-caps unelevated color="accent" class="tw-w-56 tw-h-12 tw-rounded-lg" label="Donate" @click="showDonateModal" />
          </q-card-actions>
        </q-drawer>

        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>

    <!-- View Driver Dialog -->
    <q-dialog persistent :maximized="$q.screen.lt.sm" v-model="donateDialog" @hide="clearDonationForm">
      <q-card class="w-500">
        <q-card-section class="row items-center q-py-sm">
          <div class="text-h4">Donate</div>
          <q-space />
          <q-btn v-close-popup outline size="sm" color="accent" label="Close" />
        </q-card-section>
        <q-separator />
        <q-card-section class="q-gutter-y-sm q-pa-md">
          <q-form ref="donationForm" @submit.prevent="makeDonation" class="q-gutter-y-md">
            <q-input
              outlined
              dense
              color="accent"
              type="text"
              lazy-rules
              hide-bottom-space
              label="Full Name"
              input-class="text-uppercase"
              v-model="donatePayload.fullname"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              outlined
              dense
              color="accent"
              type="email"
              lazy-rules
              hide-bottom-space
              label="Email"
              v-model="donatePayload.email"
              :rules="[
                val => validateEmail(val),
                val => !!val || 'Field is required'
              ]"
            />
            <q-input
              outlined
              dense
              color="accent"
              type="text"
              lazy-rules
              hide-bottom-space
              label="Phone"
              input-class="text-uppercase"
              v-model="donatePayload.phone"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              outlined
              dense
              color="accent"
              label="State"
              lazy-rules
              hide-bottom-space
              input-class="text-uppercase"
              v-model="donatePayload.state"
              :options="stateOptions"
              :rules="[val => !!val || 'Field is required']"
            />
            <div>
              <label for="amount">How much do you want to donate?</label>
              <q-input
                id="amount"
                outlined
                dense
                color="accent"
                lazy-rules
                type="number"
                hide-bottom-space
                input-class="text-uppercase"
                v-model="donatePayload.amount"
                :rules="[val => !!val || 'Field is required']"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-currency-ngn" />
                </template>
              </q-input>
            </div>
            <q-checkbox
              keep-color
              color="accent"
              class="text-accent"
              label="Keep me anonymous"
              v-model="donatePayload.keep_anonymous"
            />
            <q-btn
              no-caps
              unelevated
              type="submit"
              color="accent"
              class="full-width tw-rounded-3xl q-mt-lg text-h6"
              :label="`Donate ₦${new Intl.NumberFormat('en-US').format(donatePayload.amount)}`"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { uid } from 'quasar'


export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const donateDialog = ref(false)
    const $router = useRouter()
    const donationForm = ref(null)
    const donatePayload = ref({
      email: '',
      phone: '',
      state: '',
      amount: 100,
      fullname: '',
      keep_anonymous: false
    })
    const stateOptions = ref([
      'ABIA', 'ADAMAWA', 'ANAMBRA', 'AKWA IBOM', 'BAUCHI',
      'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA',
      'EBONYI', 'ENUGU', 'EDO', 'EKITI', 'FCT - ABUJA',
      'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO',
      'KATSINA', 'KEBBI', 'KOGI', 'KWARA', 'LAGOS',
      'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN',
      'OYO', 'PLATEAU', 'RIVERS', 'SOKOTO', 'TARABA',
      'YOBE', 'ZAMFARA',
    ])

    const moveToProjects = () => {
      $router.push({ name: 'projects' })
    }

    const moveToReview = () => {
      $router.push({ name: 'project-review' })
    }

    const moveToDonorsList = () => {
      $router.push({ name: 'donors-list' })
    }

    const moveToHome = () => {
      $router.push('/')
    }

    const validateEmail = (val) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return (re.test(val) || 'Please enter a valid email.')
    }

    const clearDonationForm = () => {
      donatePayload.value = {
        email: '',
        phone: '',
        state: '',
        fullname: '',
        amount: 100
      }
    }

    const makeDonation = () => {
      donationForm.value.validate().then(success => {
        FlutterwaveCheckout({
          public_key: process.env.FLW_PUBLIC_KEY,
          tx_ref: `zulum-support-${uid()}`,
          amount: donatePayload.value.amount,
          currency: 'NGN',
          payment_options: 'account, banktransfer, card, barter, ussd',
          ////////////////////////
          redirect_url: 'http://localhost:8000/success-payment', // Chnage this to the appropriates success page
          ////////////////////////
          meta: {
            donor_state: donatePayload.value.state,
            keep_anonymous: donatePayload.value.keep_anonymous
          },
          customer: {
            email: donatePayload.value.email,
            phone_number: donatePayload.value.phone,
            name: donatePayload.value.fullname,
          },
          customizations: {
            title: 'Zulum Foundation',
            description: 'Donate towards Zulum Foundation',
            logo: 'https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg',
          },
        })
      })
    }

    const showDonateModal = () => {
      leftDrawerOpen.value = false
      donateDialog.value = true
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      moveToProjects,
      moveToHome,
      moveToReview,
      validateEmail,
      donatePayload,
      donateDialog,
      stateOptions,
      clearDonationForm,
      donationForm,
      makeDonation,
      moveToDonorsList,
      showDonateModal
    }
  }
})
</script>

<style scoped>
  .w-500 {
    width: 100%;
    max-width: 500px;
  }
</style>
