<template>
  <header class="navbar text-black sticky top-0 z-10">
    <section class="mx-auto p-4 flex justify-between items-center">
      <h1 class="text-2xl font-medium">
        <a href="/">BOUM Arts</a>
      </h1>

      <!-- Hamburger button -->
      <button @click="toggleMenu" :class="{ 'toggle-btn': isMenuOpen }"class="text-3xl md:hidden cursor-pointer relative w-8 h-8 flex items-center justify-center">
        <div class="bg-black w-8 h-1 rounded transition-all duration-500
        before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] 
        after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']">
        </div>
      </button>

      <!-- Desktop nav -->
      <nav class="mainNav hidden md:flex space-x-8 text-l absolute left-1/2 transform -translate-x-1/2" aria-label="main">
        <ul>
          <li><a href="/#home" :class="{ 'active': activeSection === '#home' }" class="hover:opacity-90">Home</a></li>
          <li><a href="/#about" :class="{ 'active': activeSection === '#about' }" exact-active-class="nav-active" class="hover:opacity-90">About</a></li>
          <li><a href="/#digitalArt" :class="{ 'active': activeSection === '#digitalArt' }" exact-active-class="nav-active" class="hover:opacity-90">Digital art</a></li>
          <li><a href="/#music" :class="{ 'active': activeSection === '#music' }" class="hover:opacity-90">Music</a></li>
          <li><a href="/#coding" :class="{ 'active': activeSection === '#coding' }" class="hover:opacity-90">Coding</a></li>
          <li><a href="/#contact" :class="{ 'active': activeSection === '#contact' }" class="hover:opacity-90">Contact</a></li>
        </ul>
      </nav>

      <!-- Social media-icons -->
      <div class="hidden md:flex space-x-4">
        <a href="https://twitter.com" target="_blank" class="hover:opacity-80">
          <font-awesome-icon icon="fa-brands fa-soundcloud" class="text-2xl"/>
        </a>
        <a href="https://github.com" target="_blank" class="hover:opacity-80">
          <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl"/>
        </a>
        <a href="https://github.com" target="_blank" class="hover:opacity-80">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-2xl"/>
        </a>
      </div>
    </section>

    <!-- Mobile Menu -->
    <section :class="menuClasses" class="absolute top-16 left-0 bg-white w-full text-3xl flex-col justify-center origin-top transition-all duration-500">
      <nav class="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
        <a href="#home" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">Home</a>
        <a href="#about" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">About</a>
        <a href="#digitalArt" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">Digital art</a>
        <a href="#music" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">Music</a>
        <a href="#programming" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">Programming</a>
        <a href="#contact" class="w-full text-center py-6 hover:opacity-90" @click="closeMenu">Contact</a>
        <div>        
          <a href="https://twitter.com" target="_blank" class="hover:opacity-80">
            <font-awesome-icon icon="fa-brands fa-soundcloud" class="text-2xl"/>
          </a> &nbsp;
          <a href="https://github.com" target="_blank" class="hover:opacity-80">
            <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl"/>
          </a> &nbsp;
          <a href="https://github.com" target="_blank" class="hover:opacity-80">
            <font-awesome-icon icon="fa-solid fa-envelope" class="text-2xl"/>
          </a> 
        </div>
      </nav>
    </section>
  </header>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import { useRoute } from 'vue-router';

  const route = useRoute(); 
  const isMenuOpen = ref(false)
  const activeSection = ref('#home');
  const observer = ref(null);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = `#${entry.target.id}`;
      }
    });
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  onMounted(() => {
    const sections = document.querySelectorAll('section');
    
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    sections.forEach(section => {
      observer.value.observe(section);
    });
  });

  onBeforeUnmount(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  const menuClasses = computed(() => ({
    hidden: !isMenuOpen.value, 
    flex: isMenuOpen.value,
    'animate-open-menu': isMenuOpen.value,
    'toggle-btn': isMenuOpen.value 
  }))
</script>
