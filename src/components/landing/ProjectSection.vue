<template>
  <div class="lg:tw-mt-24 tw-mt-12 row tw-justify-center">
    <div class="lg:tw-w-5/6">
      <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-mt-4">
        <div>
          <q-img
            class="sm:tw-w-96 tw-w-screen tw-h-full"
            src="~assets/img/mega-schools.png"
          />
        </div>
        <div class="tw-bg-darkAshColor tw-w-full tw-h-72 tw-px-4 tw-pt-12 lg:tw-p-20">
          <div class="tw-text-xl md:tw-text-2xl tw-font-semibold">
            Mega Schools
          </div>
          <div class="tw-pt-2">
            25 August 2022
          </div>
          <div class="lg:tw-w-64 tw-text-xs tw-pt-2 tw-text-gray-600">
            Since 2019, Governor Zulum has constructed dozens of Mega-sized secondary schools, constructed new primary schools and rehabilitated many more.
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-mt-4">
        <div>
          <q-img
            class="sm:tw-w-96 tw-w-screen tw-h-full"
            src="~assets/img/water.png"
          />
        </div>
        <div class="tw-bg-darkAshColor tw-w-full tw-h-72 tw-px-4 tw-pt-12 lg:tw-p-20">
          <div class="tw-text-xl md:tw-text-2xl tw-font-semibold">
            Water Projects
          </div>
          <div class="tw-pt-2">
            25 August 2022
          </div>
          <div class="lg:tw-w-64 tw-text-xs tw-pt-2 tw-text-gray-600">
            Borno State Governor Babagana Umara Zulum has commissioned N200m water projects to meet the need of residents in two communities of Maiduguri metropolis
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-mt-4">
        <div>
          <q-img
            class="sm:tw-w-96 tw-w-screen tw-h-full"
            src="~assets/img/road.png"
          />
        </div>
        <div class="tw-bg-darkAshColor tw-w-full tw-h-72 tw-px-4 tw-pt-12 lg:tw-p-20">
          <div class="tw-text-xl md:tw-text-2xl tw-font-semibold">
            Road Projects
          </div>
          <div class="tw-pt-2">
            25 August 2022
          </div>
          <div class="lg:tw-w-64 tw-text-xs tw-pt-2 tw-text-gray-600">
            Borno State Governor Babagana Umara Zulum Thursday flagged-off N11.5 billion worth of construction works for eight major roads and two bridges sited in key parts of Maiduguri, the state capital. 
          </div>
        </div>
      </div>
      <q-card-actions align="center" class="tw-mt-4">
        <q-btn no-caps color="accent" unelevated class="md:tw-w-1/3 tw-w-44 tw-h-12 tw-rounded-3xl" label="View more projects" @click="moveToProjects" />
      </q-card-actions>
    </div>
    <div class="tw-bg-ashColorBG tw-w-full tw-py-16 tw-mt-8">
      <div class="row tw-justify-center tw-w-5/6 lg:tw-w-4/6 tw-mx-auto">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias alias, dignissimos non suscipit. Autem ea et, quis culpa quae consequatur alias ipsam, iure, officia asperiores tempore perspiciatis quo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias alias, dignissimos non suscipit. Autem ea et, quis culpa quae consequatur alias ipsam, iure, officia asperiores tempore perspiciatis quo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias alias, dignissimos non suscipit. Autem ea et, quis culpa quae consequatur alias ipsam, iure, officia asperiores tempore perspiciatis quo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias alias, dignissimos non suscipit. Autem ea et, quis culpa quae consequatur alias ipsam, iure, officia asperiores tempore perspiciatis quo!
        </div>
      </div>
    </div>
    <div class="tw-bg-darkAshColor tw-w-full tw-pb-16">
      <div class="tw-flex tw-flex-wrap tw-justify-center tw-mt-16">
        <div class="tw-w-80 sm:tw-w-64 lg:tw-w-72 tw-bg-white tw-rounded-lg tw-pb-8 tw-shadow-md hover:tw-shadow-2xl tw-mx-1 lg:tw-mx-2 tw-mt-4 lg:tw-mt-0">
          <q-img
            class="tw-rounded-t-lg tw-w-full tw-h-44"
            src="~assets/img/poly.png"
          />
          <div class="tw-mx-6 tw-mt-4 tw-font-semibold">
            Zulum suspend Ramat poly's entire management after surprise visit to alma mater.
          </div>
          <div class="tw-mx-6 tw-mt-4 tw-text-xs tw-text-gray-500">
            The Governor visited the Polytechnic around 9:00am and found most of the laboratories out of use.
          </div>
        </div>
        <div class="tw-w-80 sm:tw-w-64 lg:tw-w-72 tw-bg-white tw-rounded-lg tw-pb-8 tw-shadow-md hover:tw-shadow-2xl tw-mx-1 lg:tw-mx-2 tw-mt-4 lg:tw-mt-0">
          <q-img
            class="tw-rounded-t-lg tw-w-full tw-h-44"
            src="~assets/img/health.png"
          />
          <div class="tw-mx-6 tw-mt-4 tw-font-semibold">
            His Excellency Prof Babagana Umara Zulum opens health center, technical college in chiboke.
          </div>
          <div class="tw-mx-6 tw-mt-4 tw-text-xs tw-text-gray-500">
            On Monday, He departed to Damboa Local Governor Area. There he supervised the distribution of food and social protection monies to displaced families.
          </div>
        </div>
        <div class="tw-w-80 sm:tw-w-64 lg:tw-w-72 tw-bg-white tw-rounded-lg tw-pb-8 tw-shadow-md hover:tw-shadow-2xl tw-mx-1 lg:tw-mx-2 tw-mt-4 lg:tw-mt-0">
          <q-img
            class="tw-rounded-t-lg tw-w-full tw-h-44"
            src="~assets/img/humanitarian.jpg"
          />
          <div class="tw-mx-6 tw-mt-4 tw-font-semibold">
            Zulum visit the part of borno where boko haram invaded and provides support to their needs.
          </div>
          <div class="tw-mx-6 tw-mt-4 tw-text-xs tw-text-gray-500">
            The Governor visit the part of borno where boko haram invaded and provides shelter, clothes and food as well as their education.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "ProjectSection",
  setup() {
    const $router = useRouter()
    
    const moveToProjects = () => {
      $router.push({ name: 'projects' })
    }

    return {
      moveToProjects
    }
  },
})
</script>
