<template>
    <body class="min-h-screen">
        <NavbarComponent/>  
        <section id="home">
            <div class="customContainer">
                <div class="w-full h-full flex flex-col md:flex-row gap-4 homeTxt">
                    <div class="w-full md:w-1/3 flex justify-center homeTitles">
                        <div class="max-w-lg text-black text-center md:text-left">
                            <h1 class="text-3xl font-bold text-black">BOUM</h1>
                            <h2 class="border-b-2 border-black md:border-none">EXPLORING THE WORLD OF SOUND & SIGHT</h2>
                            <h3 class="hidden md:block">CRAFTING EXPERIENCES THROUGH SOUND, ART, AND TECHNOLOGY</h3>
                            <hr class="customHr">
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 relative md:h-auto max-h-screen">
                        <img src="~/assets/images/greenMosh.jpg" alt="">
                    </div>
                    <div class="w-full md:w-1/3 relative md:h-auto max-h-screen">
                        <img src="~/assets/images/ghostLamp.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section id="about">
            <about/>
        </section>

        <section id="digitalArt">
            <digitalArt/>
        </section>

        <section id="music">
            <music/>
        </section>

        <section id="coding">
            <coding/>
        </section>

        <section id="contact">
            <contact/>
        </section>

        <FooterComponent/>

        <copyrightRuleComponent/>
    </body>
</template>

<script setup lang="ts">
import NavbarComponent from '~/components/NavbarComponent.vue';


</script>