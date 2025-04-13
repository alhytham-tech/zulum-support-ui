<template>
  <div class="tw-bg-ashColorBG tw-h-full tw-mt-28">
    <div class="tw-flex tw-justify-center tw-mx-4 md:tw-mx-0 tw-flex-wrap md:tw-flex-nowrap">
      <div>
        <q-img
          class="xl:tw-w-120 xl:tw-h-full tw-w-96 tw-h-full tw-mt-8 md:tw-mt-0 tw-rounded-lg md:tw-rounded-none"
          src="~assets/img/about-hero.png"
        />
      </div>
      <div class="md:tw-ml-7 lg:tw-mr-24">
        <div class="lg:tw-text-5xl tw-text-3xl tw-font-semibold tw-pt-12 lg:tw-pt-28">
          About Zulum
        </div>
        <div class="tw-pt-6">
          Prof. (Engr.) Babagana Umara Zulum, was born 26 August 1969 
          in Mafa local Government area of Borno State. He attended elementary school in
          in Government Secondary School, Monguno from 1980 to 1985. Babagana Umara Zulum 
          recalled. He combined farming with his primary school education in Mafa and 
          Secondary School in Monguno from 1975 to 1980 and 1980 to 85, respectively. 
          After his secondary education, he recalled, he gained admission into Ramat 
          Polytechnic in Maiduguri, owned by the state government, to study for National 
          Diploma in Irrigation Engineering. During this time, he lived with relatives’ 
          off-campus in Kofa Biyu, a densely-populated area and trekked for eight kilometers 
          from Kofa Biyu to Ramat Polytechnic and back whenever he had lectures.
          <div class="tw-pt-5">
            From there, he proceeded to the University of Maiduguri to Study Agricultural Engineering between 1990 and 1994. Afterwards, he proceeded to the University of Ibadan from 1997 to 1998 where he obtained a Masters’ Degree in Soil and Water Engineering. He came back to University of Maiduguri where he started from to undertake a doctoral degree which was successfully completed in 2009 in Agric and Environmental Engineering.
          </div>
        </div>
        <q-btn color="accent" no-caps unelevated label="Read More" class="tw-mt-10 tw-w-32 tw-rounded-3xl tw-h-10 tw-mb-10" @click="moveToMore" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "AboutSection",

  setup() {
    const $router = useRouter()

    const moveToMore = () => {
      $router.push({ name: "more-about" })
    }

    return {
      moveToMore
    }
  },
})
</script>
