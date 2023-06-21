<script setup>
import FeaturesList from '../components/FeaturesList.vue';
import TestimonialSlider from '../components/TestimonialSlider.vue';
import CarouselApp from '../components/CarouselApp.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import NewCarosuel from '../components/NewCarosuel.vue';
</script>

<template>
  <Header />
  <main class="pt-[120px] lg:pt-[160px] relative overflow-hidden">
    <img
      class="absolute -z-10 left-20 -top-8 w-full lg:left-[58%] lg:-top-[8%] lg:w-[60%] 2xl:left-[58%] 2xl:-top-[10%] 2xl:w-[50%]"
      src="/bg-tablet-pattern.svg" alt="">
    <img class="absolute -z-10 left-56 top-[34rem] w-[200%] lg:-left-[30%] lg:top-[50%] lg:w-[50%]"
      src="/bg-tablet-pattern.svg" alt="">
    <section
      class="flex relative flex-col items-center justify-between lg:px-24 mb-24 2xl:px-0 lg:flex-row-reverse lg:max-w-[1400px] lg:m-auto lg:mb-[200px]">
      <img class="lg:w-[50%] 2xl:w-[45%]" src="/illustration-intro.svg" alt="" />

      <div class="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-[40%]">
        <h1 class="text-4xl font-bold leading-snug mb-4 lg:text-5xl lg:mb-8 2xl:text-6xl">
          Bring everyone together to build better products.
        </h1>
        <p class="opacity-50 leading-loose mb-8 2xl:w-[64%]">
          Manage makes it simple for software teams to plan day-to-day tasks while
          keeping the larger team goals in view.
        </p>
        <button
          class="bg-man-red px-8 py-4 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:bg-man-red-light hover:-translate-y-1 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>

    <section class="mb-24 w-full lg:flex lg:max-w-[1400px] lg:m-auto lg:mb-[200px] lg:justify-between lg:px-24 2xl:px-0">
      <div class="mb-10 px-6 lg:w-[600px] lg:px-0">
        <h2 class="text-4xl font-bold text-center leading-snug mb-4 lg:text-start 2xl:text-5xl">
          What’s different about Manage?
        </h2>
        <p class="text-center opacity-50 leading-loose lg:text-start 2xl:w-[60%]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <FeaturesList />

    </section>

    <section class="flex flex-col items-center mb-20 lg:mb-[200px]">
      <h2 class="text-4xl font-bold text-center mb-16 2xl:text-5xl">What they’ve said</h2>

      <CarouselApp v-if="isMobileOrAndroid" />
      <TestimonialSlider v-else />

      <button
        class="bg-man-red px-8 py-4 mt-8 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:bg-man-red-light hover:-translate-y-1 transition duration-300 ease-in-out">
        Get Started
      </button>
    </section>

    <section class="bg-man-red px-6 py-24 relative lg:px-24 2xl:px-0">
      <div
        class="flex flex-col justify-center items-center w-full lg:max-w-[1400px] m-auto lg:flex-row lg:justify-between">
        <h2
          class="text-4xl text-white font-bold text-center leading-snug mb-8 lg:text-start lg:mb-0 lg:max-w-lg 2xl:text-5xl">
          Simplify how your team works today.</h2>
        <button
          class="bg-[#f2f2f2] px-8 py-4 w-fit rounded-full text-man-red text-sm font-semibold hover:shadow-lg hover:text-man-red-light hover:-translate-y-1 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  </main>

  <Footer />
</template>

<script>
export default {
  components: {
    CarouselApp,
    TestimonialSlider
  },
  computed: {
    isMobileOrAndroid() {
      const userAgent = navigator.userAgent;
      return /Mobi|Android/i.test(userAgent);
    }
  }
};
</script>
