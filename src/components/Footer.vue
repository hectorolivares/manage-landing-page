<template>
  <footer class="bg-man-dark-blue flex justify-center w-full px-6 py-16 lg:py-20 lg:px-24 2xl:px-0">
    <div class="flex flex-col items-center justify-between w-full lg:max-w-[1400px] lg:flex-row-reverse lg:relative lg:items-start">
      <form class="flex lg:justify-end w-full mb-10 lg:mb-0" action="">
        <input
          class="bg-white rounded-full text-sm py-3 pl-3 mr-2 w-[70%] lg:w-[60%]"
          type="email"
          name=""
          id=""
          placeholder="Updates in your inbox..."
        />
        <button
          class="bg-man-red py-3 px-7 rounded-full text-white text-sm font-semibold uppercase w-[30%] lg:w-[20%]"
          type="submit"
        >
          Go
        </button>
      </form>

      <ul class="columns-2 w-[80%] leading-[45px]">
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Home</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Pricing</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Products</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">About Us</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Careers</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Community</a></li>
        <li><a class="text-white hover:text-man-red transition duration-200 ease-in-out" href="#">Privacy Policy</a></li>
      </ul>

      <div class="flex flex-col-reverse w-full h-full justify-center mt-10 lg:mt-0 lg:flex-col lg:items-start lg:justify-between">
      <img class="h-[28px] mt-12 lg:mt-0" src="/logo-white.svg" alt="" />
  
        <div class="flex justify-evenly">
          <a href="#"
            ><img
              class="w-[24px] mr-8 hover:fill-man-red"
              src="/icon-facebook.svg"
              alt=""
          /></a>
          <a href="#"
            ><img
              class="w-[24px] mr-8 hover:fill-man-red"
              src="/icon-youtube.svg"
              alt=""
          /></a>
          <a href="#"
            ><img
              class="w-[24px] mr-8 hover:fill-man-red"
              src="/icon-twitter.svg"
              alt=""
          /></a>
          <a href="#"
            ><img
              class="w-[24px] mr-8 hover:fill-man-red"
              src="/icon-pinterest.svg"
              alt=""
          /></a>
          <a href="#"
            ><img
              class="w-[24px] hover:fill-man-red"
              src="/icon-instagram.svg"
              alt=""
          /></a>
        </div>
      </div>
      <p class="text-center text-white text-sm opacity-50 mt-5 lg:mt-0 lg:absolute lg:bottom-[0%]">
        Copyright 2023. All rights Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
