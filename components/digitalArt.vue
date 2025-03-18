<template>
    <div class="customContainer">
        <div class="digitalArt borderHeader">
            <div class="flex flex-col md:flex-row w-full">
                <div class="w-full md:w-2/3 md:p-6">
                    <h2>DIGITAL ART</h2>
                </div>
                <div class="w-full md:w-1/3 md:p-6">
                    <h3>Digital art encompasses a wide range of creative expressions, utilizing various rendering engines, Photoshop, and color programs. I create unique pieces that blend traditional techniques with digital innovation, allowing for endless possibilities and experimentation in my work. Whether it's illustrations, 3D, or compositions, my goal is to bring imaginative concepts to life in the digital realm. </h3>
                </div>
            </div>
            <div class="artStyles flex flex-col md:flex-row w-full gap-4">
                <div class="w-full md:w-1/3 md:p-6">
                    <img class="digitalArtImage" src="~/assets/images/ancient_temple.png" alt="">
                    <div class="dArtTxt ">
                        <h4 class="text-2xl font-bold">3D ART</h4>
                        <p> 3D art is a dynamic field that combines creativity with technical skills to create immersive visual experiences. Utilizing various software and tools, I design intricate models and environments that draw the viewer into a new dimension. Whether for games, animations, or virtual reality, my 3D creations aim to captivate and inspire. </p>
                        <div class="mt-[25px]">
                            <a href="/art-gallery?filter=3D Art" class="linkBtn mt-[25px]">Show 3D Art</a>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/3 md:p-6">
                    <img class="digitalArtImage coverArt" src="~/assets/images/ctw.2.jpg" alt="">
                    <div class="coverArtTxt">
                        <h4 class="text-2xl font-bold">COVER ART</h4>
                        <p>Cover art serves as the visual gateway to stories and concepts, merging aesthetics with communication. I craft striking designs that encapsulate the essence of a project, whether it’s for music albums, books, or digital media. My goal is to create memorable and engaging visuals that resonate with the intended audience. </p>
                        <div class="mt-[25px]">
                            <a href="/art-gallery?filter=Cover Art" class="linkBtn">Show Cover Art</a>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/3 md:p-6">
                    <img class="digitalArtImage abstractArt" src="~/assets/images/abstract.jpg" alt="">
                    <div class="abstractArtTxt">
                        <h4 class="text-2xl font-bold">ABSTRACT ART</h4>
                        <p>Abstract art pushes the boundaries of perception, allowing for personal interpretation through shapes, colors, and textures. In my work, I explore the interplay between form and emotion, creating pieces that evoke thought and reflection. Each artwork invites viewers to experience a unique journey within the abstract realm. </p>
                        <div class="mt-[25px]">
                            <a href="/art-gallery?filter=Abstract Art" class="linkBtn">Show Abstract Art</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>