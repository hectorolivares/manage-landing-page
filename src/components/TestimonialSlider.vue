<template>
  <div class="grid items-center relative h-[350px] w-full overflow-x-hidden">
    <div class="flex w-[4400px]" 
    style="animation: slide 60s linear infinite"
    @mouseenter="pauseAnimation" 
    @mouseleave="resumeAnimation"
    :style="{ animationPlayState: animationPlayState }"
    >
      <div
        class="w-[550px] mx-4 rounded-md bg-[#FFF6F3] px-5 cursor-pointer hover:-translate-y-2 hover:shadow-lg transition duration-200 ease-in-out"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <div class="flex flex-col items-center justify-center -translate-y-9">
          <img class="w-20 mb-5" :src="testimonial.image" alt="" />
          <h3 class="font-semibold text-center mb-5">{{ testimonial.name }}</h3>
          <p class="opacity-50 text-center">{{ testimonial.message }}</p>
        </div>
      </div>
      <div
        class="w-[550px] mx-4 rounded-md bg-[#FFF6F3] px-5 cursor-pointer hover:-translate-y-2 hover:shadow-lg transition duration-200 ease-in-out"  
        v-for="(testimonial, index) in testimonials"
        :key="index"
        style=""
      >
        <div class="flex flex-col items-center justify-center -translate-y-9 ">
          <img class="w-20 mb-5" :src="testimonial.image" alt="" />
          <h3 class="font-semibold text-center mb-5">{{ testimonial.name }}</h3>
          <p class="opacity-50 text-center">{{ testimonial.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
      animationPlayState: 'running',
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
  methods: {
    pauseAnimation() {
      this.animationPlayState = 'paused';
    },
    resumeAnimation() {
      this.animationPlayState = 'running';
    }
  },
};
</script>


<style>

.animation-pause{
  animation-play-state: paused;
  background-color: blue;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc( -550px * 4 ));
  }
}
</style>
