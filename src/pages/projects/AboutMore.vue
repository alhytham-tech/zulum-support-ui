<template>
  <div class="row tw-justify-center">
    <div class="bg-accent tw-h-24 tw-w-full tw-my-8"></div>
    <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-justify-center md:tw-w-5/6">
      <div class="sm:tw-w-96 tw-w-full tw-mx-3 sm:tw-mx-0 tw-border-2 lg:tw-mr-6 tw-border-primaryColor">
        <div class="tw-m-5">
          <q-img
            class="tw-w-full tw-h-full tw-mt-2"
            src="~assets/img/about-hero.png"
          />
        </div>
      </div>
      <div class="lg:tw-w-2/3 tw-p-4 lg:tw-p-0">
        <div class="">
          Prof. (Engr.) Babagana Umara Zulum, was born 26 August 1969 in Mafa local Government area of Borno State. 
          He attended elementary school in Mafa Primary School
          from 1975 to 1980 and secondary education in Government Secondary School, Monguno from 1980 to 1985.
        </div>
        <div class="tw-mt-5">
          Babagana Umara Zulum recalled. He combined farming with his primary school education in Mafa and Secondary 
          School in Monguno from 1975 to 1980 and 1980 to 85, respectively. After his secondary education, he recalled, 
          he gained admission into Ramat Polytechnic in Maiduguri, owned by the state government, to study for National 
          Diploma in Irrigation Engineering. During this time, he lived with relatives’ off-campus in Kofa Biyu, a densely-populated 
          area and trekked for eight kilometers from Kofa Biyu to Ramat Polytechnic and back whenever he had lectures.
        </div>
        <div class="tw-mt-5">
          From there, he proceeded to the University of Maiduguri to Study Agricultural Engineering between 1990 and 1994.
          Afterwards, he proceeded to the University of Ibadan from 1997 to 1998 where he obtained a Masters’ Degree in Soil
          and Water Engineering. He came back to University of Maiduguri where he started from to undertake a doctoral degree
          which was successfully completed in 2009 in Agric and Environmental Engineering.
        </div>
        <div class="tw-mt-5">
          Between 1984 to around 1999 a period of 16 years which he spent in school, he became a commercial driver of taxis, 
          particularly Peugeot 404. At some point, he also drove buses carrying passengers to different villages, and neighboring
          states. At a later time, he drove commercial pickup trucks carrying firewood from forests. It is during this period working as 
          commercial driver he learned how to fix any vehicle he drove, It was still as a commercial driver that in 1990, he secured 
          admission into University of Maiduguri for a degree in Agricultural Engineering, and graduated in 1994. After three years, 
          (1997) he again got admission into the University of Ibadan for an MSc in Agricultural Engineering.
        </div>
      </div>
    </div>
    <div class="md:tw-w-5/6 tw-p-4 lg:tw-p-0 md:tw-my-12">
      <div class="">
        He recalled his experience after gaining admission in Ibadan which will always remain memorable, 
        his registration was delayed for three weeks because he could not pay his registration fees. He did not 
        have the money when he departed Maiduguri, but believed he could get some work to do in Lagos. For three 
        weeks, he lived in Alaba Rago working with commercial vehicles and there he raised the money for his 
        tuition. He graduated in 1998 and returned to the civil service as a Senior Agricultural Engineer and 
        later Principal Water Engineer. After obtaining a Master’s Degree, he joined the University of Maiduguri 
        in 1998 as an assistant lecturer. From 2005 to 2009, he obtained PhD in Soil and Water Engineering from
        University of Maiduguri, rising through the ranks, at some point Deputy Dean and Acting Dean of the 
        Faculty of Agricultural Engineering.
      </div>
      <div class="tw-mt-5">
        Though he was appointed the Rector of Ramat Polytechnic in 2011 by Governor Shettima, he preferred to 
        retain his job as a lecturer with the University as a result he continue teaching students in UNIMAID 
        during his lecture hours. As the Rector of Ramat Polytechnic, he is credited with expansions and erection
        of many capital infrastructure using internally-generated revenue and attracting interventions from federal agencies.
      </div>
      <div class="tw-mt-5">
        In 2015, Prof was appointed pioneer Commissioner for Reconstruction, Rehabilitation and Resettlement by Governor 
        Shettima, who was quoted as saying “one of my attractions to Zulum was the fact that: despite being in control of 
        billions of naira for reconstruction of thousands of homes, schools and hospitals, “[He] neither bought a personal 
        house nor a personal car for himself. He also came under attack from Boko Haram twice, but that didn’t stop him in 
        his efforts to rebuild substantial parts of Borno.” Zulum himself confirmed that his appointment as Commissioner 
        for Reconstruction, Rehabilitation and Resettlement was one of his biggest challenges in life.
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import { defineComponent } from 'vue';
import AppFooter from 'components/AppFooter.vue';

export default defineComponent({
  name: "AboutMore",
  components: {
    AppFooter
  },
  setup() {
    
  },
})
</script>
