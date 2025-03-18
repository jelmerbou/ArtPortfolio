<template>
    <div v-if="isModalOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 z-10"@click.self="closeModal">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 w-full max-w-2xl":class="{ 'scale-105': isHovered }"@mouseover="isHovered = true"@mouseleave="isHovered = false">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 w-full h-40 md:h-auto bg-cover bg-center flex items-center justify-center text-white p-4 backdrop-blur-md" :style="{ backgroundImage: `url(${image})` }">
            <div class="absolute inset-0 bg-black/30"></div>
            <h2 class="text-xl md:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded z-10">
              {{ modalTitle }}
            </h2>
          </div>
          <div class="md:w-1/2 w-full p-6 flex flex-col justify-between">
            <p class="text-gray-700 text-sm md:text-base" v-html="modalContent"></p>

            <button @click="closeModal" class="mt-4 bg-red-500 text-white py-2 px-4 rounded self-end">
              Sluit Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        isModalOpen: false,
        modalTitle: '',
        modalContent: '',
        color: '',
        image: ''
      };
    },

    methods: {
      openModal(title, content, color, image) {
        this.modalTitle = title;
        this.modalContent = content;
        this.isModalOpen = true;
        this.color = color;
        this.image = image;
      },
      
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
</script>
