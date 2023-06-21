<template>
  <Carousel :wrap-around="true" items-to-show="1">
    <Slide v-for="(testimonial, index) in testimonials" :key="index">
      <div class="carousel__item">
        <div class="relative flex flex-col items-center justify-center">
          <img class="w-20 mb-3" :src="testimonial.image" alt="" />
          <h3 class="font-semibold text-center mb-4">{{ testimonial.name }}</h3>
          <p class="opacity-50 text-center text-sm pb-4 px-2">{{ testimonial.message }}</p>
          <div class="absolute bg-[#FFF6F3] w-full h-[85%] rounded-lg -z-10 bottom-0"></div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination/>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      testimonials: [
        {
          name: "Anisha Li",
          image: "/avatar-anisha.png",
          message:
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
        },
        {
          name: "Ali Bravo",
          image: "/avatar-ali.png",
          message:
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
        },
        {
          name: "Richard Watts",
          image: "/avatar-richard.png",
          message:
            " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
        },
        {
          name: "Shanai Gough",
          image: "/avatar-shanai.png",
          message:
            "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
        },
      ],
    };
  },
})
</script>

<style>
.carousel__item {
  max-height: 250px;
  width: 400px;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.carousel__slide {
  padding: 12px;
}


.carousel__pagination-button::after {
  border-radius: 50px;
  border: 1px solid #F3613C;
  background-color: white;
  width: 7px;
  height: 7px;
}

.carousel__pagination-button--active::after{
  background-color: #F3613C;
}
</style>