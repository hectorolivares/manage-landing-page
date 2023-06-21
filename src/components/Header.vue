<template>

  <header class="invisible fixed flex justify-between items-center px-20 2xl:px-32 h-[120px] w-full z-50 lg:visible" :class="{ 'header-scroll-lg shadow-md': isScrolled }">
    <img class="h-[26px]" src="/logo.svg" alt="" />

    <ul class="flex">
      <li><a class="text-sm mr-10 hover:text-man-red transition duration-200 ease-in-out" href="#">Pricing</a></li>
      <li><a class="text-sm mr-10 hover:text-man-red transition duration-200 ease-in-out" href="#">Product</a></li>
      <li><a class="text-sm mr-10 hover:text-man-red transition duration-200 ease-in-out" href="#">About Us</a></li>
      <li><a class="text-sm mr-10 hover:text-man-red transition duration-200 ease-in-out" href="#">Careers</a></li>
      <li><a class="text-sm hover:text-man-red transition duration-200 ease-in-out" href="#">Commnunity</a></li>
    </ul>

    <button
          class="bg-man-red px-7 py-3 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:bg-man-red-light hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          Get Started
        </button>
  </header>


  <!-- Mobile header -->

  <header
    class="bg-opacity-0 fixed flex justify-between items-center px-6 h-[120px] w-full z-50 transition duration-500 ease-in-out lg:hidden"
    :class="{ 'header-scroll shadow-md bg-opacity-100': isScrolled }"
  >
    <img class="h-[22px]" src="/logo.svg" alt="" />

    <button
      @click="handleClick"
      :class="`hamburger hamburger--spring scale-50 ${
        isActive ? 'is-active' : 'active'
      }`"
      class=""
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  </header>

  <div
    class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-[80%] bg-white rounded-lg z-40 w-[90%] h-fit py-5"
    :class="{ hidden: !isActive, 'position-scroll':  isScrolled}"
  >
    <ul class="text-black font-semibold text-center leading-[60px]">
      <li><a class="" href="#">Pricing</a></li>
      <li><a class="" href="#">Products</a></li>
      <li><a class="" href="#">About Us</a></li>
      <li><a class="" href="#">Careers</a></li>
      <li><a class="" href="#">Community</a></li>
    </ul>
  </div>

  <div
    class="fixed w-full h-full opacity-60 bg-gradient-to-t from-black to-transparent z-30"
    :class="{ hidden: !isActive }"
  ></div>

</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 0;
    },
    handleClick() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.header-scroll {
  transition: all 0.5s ease-in-out;
  height: 60px;
  background-color: rgb(255, 255, 255, 1);
}
.header-scroll-lg {
  transition: all 0.5s ease-in-out;
  height: 80px;
  background-color: rgb(255, 255, 255, 1);
}

.position-scroll{
  transform: translate(-50%, -95%);
}
</style>
