<template>
    <CodingSkillModal ref="modal"/>
    <div class="customContainer">
      <div class="programmingContent borderHeader">
        <div class="programmingHeader md:p-6">
          <h2>CODING</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
        </div>
        <div class="programmingBody px-0 md:px-[20%]">
          <h3 class="mt-[20px] sm:mt-0">SKILLS</h3>
          <hr class="customHr">
          <div class="programmingCircles max-w-screen-lg mx-auto md:px-20 w-full p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            <div v-for="programmingBrand in programmingBrands" :key="programmingBrand.id" class="flex flex-col items-center">
              <button @click="openModal(programmingBrand.name, programmingBrand.modalText, programmingBrand.color, programmingBrand.image)" class="skillsBtn hover:opacity-80 text-white text-4xl">
                  <div :class="`h-24 w-24 rounded-full flex items-center justify-center`" :style="{ backgroundColor: programmingBrand.color }">
                      <font-awesome-icon :icon="programmingBrand.icon" />
                  </div>

                  <p :style="{ color: programmingBrand.color.replace('bg-', '') }" class="text-md mt-2 text-center">
                    {{ programmingBrand.name }}
                  </p>
              </button>
            </div>
            </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="lg:mt-[50px] md:mb-[50px]">
                  <cardComponent icon="fa-solid fa-desktop" content="Web Development" image="/_nuxt/assets/images/card_two.jpg"/>
              </div>
              <div class="mt-[50px] lg:mb-[50px]">
                  <cardComponent icon="fa-solid fa-mobile-screen" content="App Development" image="/_nuxt/assets/images/card_one.jpg"/>
              </div>
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

        programmingBrands: [
          { 
            id: 1,
            name: 'HTML', 
            icon: 'fa-brands fa-html5', 
            color: '#e34c26', 
            link: 'https://github.com', 
            modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
            image: '/_nuxt/assets/images/html.png' 
          },
          { 
            id: 2, 
            name: 'CSS/SCSS', 
            icon: 'fa-brands fa-css3', 
            color: '#264de4', 
            link: 'https://github.com', 
            modalText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
            image: '/_nuxt/assets/images/css.png' 
          },
          { 
            id: 3, 
            name: 'VueJS', 
            icon: 'fa-brands fa-vuejs', 
            color: '#42b883', 
            link: 'https://github.com', 
            modalText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
            image: '/_nuxt/assets/images/vue.png' 
          },
          { 
            id: 4, 
            name: 'PHP', 
            icon: 'fa-brands fa-php', 
            color: '#474A8A', 
            link: 'https://github.com', 
            modalText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
            image: '/_nuxt/assets/images/html.png' 
          }
        ],
      };
    },
    
    methods: {
        openModal(title, content, color, image) {
          this.$refs.modal.openModal(title, content, color, image);
        },
    },
  };
  
  </script>
