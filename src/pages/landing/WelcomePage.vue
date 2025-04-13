<template>
  <div>
    <hero-section></hero-section>
    <about-section></about-section>
    <project-section></project-section>
    <analysis-section></analysis-section>
    <app-footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeroSection from 'components/landing/HeroSection.vue';
import AboutSection from 'components/landing/AboutSection.vue';
import ProjectSection from 'src/components/landing/ProjectSection.vue';
import AnalysisSection from 'components/landing/AnalysisSection.vue';
import AppFooter from 'components/AppFooter.vue';

export default defineComponent({
  name: "WelcomePage",
  components: {
    HeroSection,
    AboutSection,
    ProjectSection,
    AnalysisSection,
    AppFooter
  },
  setup() {
    
  },
})
</script>
