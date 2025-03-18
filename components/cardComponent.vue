<template>
    <div class="card mb-[10px] md:mb-[50px]">
        <div class="content">
            <div class="back">
                <div class="backContent pt-[70px]" :style="{ backgroundImage: `url(${image})` }">
                    <div class="flex flex-col items-center justify-center">
                        <font-awesome-icon :icon="icon" class="text-2xl"/>
                        <p class="font-bold pt-[20px]">{{ content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        },
    }
</script>