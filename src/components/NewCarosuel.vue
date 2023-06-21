<template>
    <div class="carousel" ref="carousel" @mousedown="startDrag" @mousemove="drag" @mouseup="endDrag">
      <div class="carousel-inner" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="bg-blue-600 w-[500px] h-[400px]"></div>
        <div class="bg-red-600 w-[500px] h-[400px]"></div>
        <div class="bg-blue-600 w-[500px] h-[400px]"></div>
        <div class="bg-blue-600 w-[500px] h-[400px]"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        startPosition: 0,
        currentPosition: 0,
        translateX: 0
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startPosition = event.clientX;
      },
      drag(event) {
        if (this.isDragging) {
          const deltaX = event.clientX - this.startPosition;
          this.currentPosition = this.translateX + deltaX;
        }
      },
      endDrag() {
        this.isDragging = false;
        this.translateX = this.currentPosition;
      }
    }
  };
  </script>
  
  <style>
  .carousel {
    overflow: hidden;
    width: 100%;
    height: 300px; /* Ajusta la altura según tus necesidades */
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.3s;
  }
  </style>
  