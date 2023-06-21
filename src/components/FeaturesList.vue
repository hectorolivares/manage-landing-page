<template>
  <div class="lg:w-1/2">
    <div class="mb-8 pl-6" v-for="({feature, message}, index) in features">
        <div class="flex items-center bg-gray-200 mb-3 rounded-l-full lg:bg-transparent">
            <span class="bg-man-red rounded-full px-6 py-2 font-medium text-white mr-3">{{ '0' + ( index + 1 ) }}</span>
            <h3 class="font-semibold pr-6">{{ feature }}</h3>
        </div>
        <p class="opacity-50 pr-6 leading-loose lg:ml-20">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        features: [
        {
          feature: "Track company-wide progress",
          message:
            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
        {
          feature: "Advanced built-in reports",
          message:
            " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
          feature: "Everything you need in one place",
          message:
            "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
        },
      ],
      activeIndex: 0,
    };
  },
};
</script>
