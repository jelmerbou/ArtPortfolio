<template>
  <body class="min-h-screen">
    <NavbarComponent />

    <div class="p-5 md:p-10">
      <div class="w-full mb-[50px]">
        <div class="relative right-0">
          <div class="w-full">
            <div class="relative right-0">
              <ul class="flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100">
                <li v-for="category in categories" :key="category" class="flex-auto text-center">
                  <button @click="selectedCategory = category" class="w-full px-4 py-2 text-sm transition-all ease-in-out rounded-lg cursor-pointer" :class="selectedCategory === category ? 'bg-gray-300 text-black' : 'bg-inherit text-slate-700'">
                    {{ category }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="gap-5 lg:gap-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <h2>BOUM ARTWORK GALLERY</h2>
        
        <img v-for="image in filteredImages" :key="image.src" :src="image.src" alt="Artwork" class="rounded-lg transition-transform transform hover:scale-110"
        />
      </div>
    </div>

    <FooterComponent />

    <CopyrightRuleComponent />

  </body>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const categories = ref(["Show All", "Abstract Art", "Cover Art", "3D Art"]);
    const selectedCategory = ref("Show All");

    const images = ref([
        { src: "/_nuxt/assets/images/image-gallery/abstract.jpg", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/ghostLamp.jpg", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/fade-tree.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/flowers.jpg", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-2.jpg", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/ondergronds.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/space.jpg", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/treeHill.jpg", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/Woods.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-3.jpg", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/avenue-1.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/moon.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/skeleton.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-4.jpg", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/ancient_temple.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/ctw.2.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-5.png", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/avenue-2.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/ondergronds-2.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/immersion.jpg", category: "Cover Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-6.png", category: "Abstract Art" },
        { src: "/_nuxt/assets/images/image-gallery/growing.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/bird.png", category: "3D Art" },
        { src: "/_nuxt/assets/images/image-gallery/abstract-7.png", category: "Abstract Art" },
    ]);

    onMounted(() => {
        const categoryFromURL = route.query.filter;
        if (categoryFromURL && categories.value.includes(categoryFromURL)) {
            selectedCategory.value = categoryFromURL;
        }
    });

    const filteredImages = computed(() => {
        if (selectedCategory.value === "Show All") {
            return images.value;
        }
        return images.value.filter(img => img.category === selectedCategory.value);
    });

    const setFilter = (category) => {
        selectedCategory.value = category;
        router.push({ path: route.path, query: { filter: category } });
    };
</script>